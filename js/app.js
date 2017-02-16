var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
  $http.get("js/jsonresponse.json")
    .success(function(response) {
        $scope.currentTopPro = response.StatSections[0].TopSalesReps,
        $scope.currentTopMgr = response.StatSections[0].Managers,
        $scope.currentStart = dateParse(response.StatSections[0].StartDateFilter),
        $scope.currentEnd = dateParse(response.StatSections[0].EndDateFilter),
        $scope.currentOffice = sortByPreference(response.StatSections[0].Office),
        $scope.monthTopPro = response.StatSections[1].TopSalesReps,
        $scope.monthTopMgr = response.StatSections[1].Managers,
        $scope.monthOffice = sortByPreference(response.StatSections[1].Office),
        $scope.monthStart = dateParse(response.StatSections[1].StartDateFilter),
        $scope.monthEnd = dateParse(response.StatSections[1].EndDateFilter),
        $scope.yearTopPro = response.StatSections[2].TopSalesReps,
        $scope.yearTopMgr = response.StatSections[2].Managers,
        $scope.yearStart = dateParse(response.StatSections[2].StartDateFilter),
        $scope.yearEnd = dateParse(response.StatSections[2].EndDateFilter),
        $scope.yearOffice = sortByPreference(response.StatSections[2].Office)
    }).error(function(data, status) {
      console.log("Error status : " + status);
      $('div').slice(2).hide();
      $('.hidetext').show();
    });

  //Reload Charts on Window Resize
  $(window).resize(function() {
    currentTopMgrBarChart();
    monthTopMgrBarChart();
    monthOfficePieChart();
    yearOfficePieChart();
    officeMap();
  });
  
//  var autoUpdate = setInterval(function(){
//    currentTopMgrBarChart();
//    monthTopMgrBarChart();
//    monthOfficePieChart();
//    yearOfficePieChart();
//    officeMap();
//  }, 100); 
  
  getCurrentMonth();
  getCurrentYear();

  google.charts.load('current', {
    'packages': ['corechart']
  });
  google.setOnLoadCallback(officeMap);
  google.charts.setOnLoadCallback(currentTopMgrBarChart);
  google.charts.setOnLoadCallback(monthTopMgrBarChart);
  google.charts.setOnLoadCallback(monthOfficePieChart);
  google.charts.setOnLoadCallback(yearOfficePieChart);

  /* CHART CREATION FUNCTIONS */

  //Year Total Office Geomap: USA   
  function officeMap() {
    var data = new google.visualization.DataTable();

    data.addColumn('string', 'Country');
    data.addColumn('number', 'Value');
    data.addColumn({
      type: 'string',
      role: 'tooltip'
    });
    var ivalue = new Array();

    for (i = 0; i < $scope.yearOffice.length; i++) {
      if ($scope.yearOffice[i].Name == "Portland") {
        data.addRows([
          [{
            v: 'US-OR',
            f: 'Portland, Oregon'
          }, 0, "$" + numberWithCommas($scope.yearOffice[i].TotalSales)]
        ]);
      } else if ($scope.yearOffice[i].Name == "Chicago") {
        data.addRows([
          [{
            v: 'US-IL',
            f: 'Chicago, Illinois'
          }, 1, "$" + numberWithCommas($scope.yearOffice[i].TotalSales)]
        ]);
      } else if ($scope.yearOffice[i].Name == "Henderson") {
        data.addRows([
          [{
            v: 'US-NV',
            f: 'Henderson, Nevada'
          }, 2, "$" + numberWithCommas($scope.yearOffice[i].TotalSales)]
        ]);
      } else if ($scope.yearOffice[i].Name == "Austin") {
        data.addRows([
          [{
            v: 'US-TX',
            f: 'Austin, Texas'
          }, 3, "$" + numberWithCommas($scope.yearOffice[i].TotalSales)]
        ]);
      }
    }

    var options = {
      backgroundColor: {
        fill: '#FFFFFF',
        stroke: '#FFFFFF',
        strokeWidth: 0
      },
      chartArea: {
        'width': '100%',
        'height': '80%'
      },
      height: 246,
      colorAxis: {
        minValue: 0,
        maxValue: 3,
        colors: ['#1dbfe3', '#0097c7', '#0ba23f', '#00ca6b', ]
      },
      legend: 'none',
      backgroundColor: {
        fill: 'transparent',
        strokeWidth: 0
      },
      datalessRegionColor: '#323232',
      displayMode: 'regions',
      enableRegionInteractivity: 'true',
      resolution: 'provinces',
      sizeAxis: {
        minValue: 1,
        maxValue: 1,
        minSize: 10,
        maxSize: 10
      },
      region: 'US',
      keepAspectRatio: true,
      tooltip: {
        textStyle: {
          color: '#444444'
        },
        trigger: 'hover'
      }
    };

    var chart = new google.visualization.GeoChart(document.getElementById('officeMap'));
    google.visualization.events.addListener(chart, 'select', function() {
      var selection = chart.getSelection();
      if (selection.length == 1) {
        var selectedRow = selection[0].row;
        var selectedRegion = data.getValue(selectedRow, 0);
      }
    });

    chart.draw(data, options);
  }

  //Current Top Manager Bar Chart    
  function currentTopMgrBarChart() {

    var test = [
      ['Location', 'Revenue', {
        role: 'style'
      }]
    ];

    for (i = 0; i < 8; i++) {

        var barColor = "#dddddd";
        if ($scope.monthTopMgr[i].Office == "Portland") {
          barColor = "#1dbfe3";
        } else if ($scope.monthTopMgr[i].Office == "Chicago") {
          barColor = "#0097c7";
        } else if ($scope.monthTopMgr[i].Office == "Henderson") {
          barColor = "#0ba23f";
        } else if ($scope.monthTopMgr[i].Office == "Austin") {
          barColor = "#00ca6b";
        }
      
      test.push([$scope.currentTopMgr[i].Name, {
        v: $scope.currentTopMgr[i].TotalSales,
        f: '$' + parseFloat($scope.currentTopMgr[i].TotalSales).toFixed(2)
      }, barColor]);
    }

    //Create the data table
    var data = new google.visualization.arrayToDataTable(test);

    var options = {
      titleTextStyle: {
        color: '#FFF'
      },
      height: 206,
      backgroundColor: {
        fill: 'transparent',
        strokeWidth: 0
      },
      chartArea: {
        left: 100
      },
      legendTextStyle: {
        color: '#FFF'
      },
      legend: 'none',
      hAxis: {
        title: 'Total Sales',
        minValue: 0,
        textStyle: {
          color: '#FFF'
        },
        format: '$#,###'
      },
      vAxis: {
        title: 'Manager',
        textStyle: {
          color: '#FFF'
        }
      },
    };

    // Instantiate and draw the chart.
    var chart = new google.visualization.BarChart(document.getElementById('currentTopMgrBarChart'));
    chart.draw(data, options);
  }

  //Month Top Manager Bar Chart      
  function monthTopMgrBarChart() {

    var test = [
      ['Location', 'Revenue', {
        role: 'style'
      }]
    ];

    for (i = 0; i < 5; i++) {

        var barColor = "#dddddd";
        if ($scope.monthTopMgr[i].Office == "Portland") {
          barColor = "#1dbfe3";
        } else if ($scope.monthTopMgr[i].Office == "Chicago") {
          barColor = "#0097c7";
        } else if ($scope.monthTopMgr[i].Office == "Henderson") {
          barColor = "#0ba23f";
        } else if ($scope.monthTopMgr[i].Office == "Austin") {
          barColor = "#00ca6b";
        }
      
      test.push([$scope.monthTopMgr[i].Name, {
        v: $scope.monthTopMgr[i].TotalSales,
        f: '$' + parseFloat($scope.monthTopMgr[i].TotalSales).toFixed(2)
      }, barColor]);
    }

    //Create the data table
    var data = new google.visualization.arrayToDataTable(test);

    var options = {
      titleTextStyle: {
        color: '#FFF'
      },
      height: 206,
      backgroundColor: {
        fill: 'transparent',
        strokeWidth: 0
      },
      chartArea: {
        left: 100
      },
      legendTextStyle: {
        color: '#FFF'
      },
      legend: 'none',
      hAxis: {
        title: 'Total Sales',
        minValue: 0,
        textStyle: {
          color: '#FFF'
        },
        format: '$#,###'
      },
      vAxis: {
        title: 'Manager',
        textStyle: {
          color: '#FFF'
        }
      },
    };

    // Instantiate and draw the chart.
    var chart = new google.visualization.BarChart(document.getElementById('monthTopMgrBarChart'));
    chart.draw(data, options);
  }

  //Month Top Office Pie Chart      
  function monthOfficePieChart() {

    var test = [
      ['Location', 'Revenue']
    ];

    var sortedData = sortByPreference($scope.monthOffice);

    for (i = 0; i < sortedData.length; i++) {
      test.push([sortedData[i].Name, {
        v: sortedData[i].TotalSales,
        f: '$' + parseFloat(sortedData[i].TotalSales).toFixed(2)
      }]);
    }

    // Create the data table.
    var data = new google.visualization.arrayToDataTable(test);

    // Set options for the pie chart.
    var options = {
      //                       title: 'My Daily Activities',
      height: 246,
      backgroundColor: {
        fill: 'transparent',
        strokeWidth: 0
      },
      chartArea: {
        'left': 16,
        'width': '100%',
        'height': '64%'
      },
      legend: 'none',
      legendTextStyle: {
        color: '#FFF'
      },
      colors: ['#1dbfe3', '#0097c7', '#137a40', '#0ba23f', '#00ca6b'],
      pieHole: 0.4,
      pieSliceBorderColor: "transparent"
    };

    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('monthOfficePieChart'));
    chart.draw(data, options);
  }

  //Year Top Office Pie Chart     
  function yearOfficePieChart() {

    var test = [
      ['Location', 'Revenue']
    ];

    var sortedData = sortByPreference($scope.yearOffice);

    for (i = 0; i < sortedData.length; i++) {
      test.push([sortedData[i].Name, {
        v: sortedData[i].TotalSales,
        f: '$' + parseFloat(sortedData[i].TotalSales).toFixed(2)
      }]);
    }

    // Create the data table.
    var data = new google.visualization.arrayToDataTable(test);

    // Set options for the pie chart.
    var options = {
      //                       title: 'My Daily Activities',
      height: 246,
      backgroundColor: {
        fill: 'transparent',
        strokeWidth: 0
      },
      chartArea: {
        'left': 16,
        'width': '100%',
        'height': '64%'
      },
      legend: 'none',
      legendTextStyle: {
        color: '#FFF'
      },
      colors: ['#1dbfe3', '#0097c7', '#137a40', '#0ba23f', '#00ca6b'],
      pieHole: 0.4,
      pieSliceBorderColor: "transparent"
    };

    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('yearOfficePieChart'));
    chart.draw(data, options);
  }

  /* CUSTOM APPLICATION FUNCTIONS*/

  //Random Number Function
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //Get Current Month Function
  function getCurrentMonth() {
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    var d = new Date();
    var n = month[d.getMonth()];
    $(".currentMonth").text(n);
  }

  //Get Current Year Function
  function getCurrentYear() {
    var d = new Date();
    var n = d.getFullYear();
    $(".currentYear").text(n);
  }

  //Date Parse Function    
  function dateParse(dateObj) {
    var mystring = dateObj;
    mystring = mystring.replace('/Date(', '');
    mystring = mystring.replace(')/', '');

    mystring = parseInt(mystring);

    var formattedDate = convertTime(mystring);
    return formattedDate;
  }

  //UNIX Timestamp Converter Function    
  function convertTime(timeVar) {
    var date = new Date(timeVar);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    // Will display time in 10:30:23 format
    var formattedTime = month + "/" + day + "/" + year;
    return formattedTime;
  }

  //USD Number Format Function    
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  //Sort by Preference Function      
  function sortByPreference(arr) {

    var sortedData = ["", "", "", ""]

    for (i = 0; i < arr.length; i++) {

      if (arr[i].Name == "Portland") {
        sortedData.splice(0, 1, arr[i]);
      } else if (arr[i].Name == "Chicago") {
        sortedData.splice(1, 1, arr[i]);
      } else if (arr[i].Name == "Henderson") {
        sortedData.splice(2, 1, arr[i]);
      } else if (arr[i].Name == "Austin") {
        sortedData.splice(3, 1, arr[i]);
      }

    }

    return sortedData;
  }

});