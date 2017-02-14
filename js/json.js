var app = angular.module('myApp', []);
        app.controller('customersCtrl', function($scope, $http) {     
          $http.get("js/jsonresponse.json")
          .success(function (response) {$scope.currentTopPro = response[0].TopSalesReps,
                                        $scope.currentTopMgr = response[0].Managers,
                                        $scope.currentStart = dateParse(response[0].StartDateFilter),
                                        $scope.currentEnd = dateParse(response[0].EndDateFilter),
                                        $scope.monthTopPro = response[1].TopSalesReps,
                                        $scope.monthTopMgr = response[1].Managers,
                                        $scope.monthStart = dateParse(response[1].StartDateFilter),
                                        $scope.monthEnd = dateParse(response[1].EndDateFilter),
                                        $scope.yearTopPro = response[2].TopSalesReps,
                                        $scope.yearTopMgr = response[2].Managers,
                                        $scope.yearStart = dateParse(response[2].StartDateFilter),
                                        $scope.yearEnd = dateParse(response[2].EndDateFilter)
                                       });   
          
      $(window).resize(function(){location.reload();});
          
      google.charts.setOnLoadCallback(currentTopMgrBarChart);    
      google.charts.setOnLoadCallback(monthTopMgrBarChart); 
          
           
      function currentTopMgrBarChart() {

        var test = [
          ['Location', 'Revenue', { role: 'style' }]
        ];
          
        for (i = 0; i < 8; i++) {
          test.push([$scope.currentTopMgr[i].Name, {v: $scope.currentTopMgr[i].TotalSales, f: '$' + parseFloat($scope.currentTopMgr[i].TotalSales).toFixed(2)}, '#1dbfe3']);
        }
        
        //Create the data table
        var data = new google.visualization.arrayToDataTable(test);
        
        var options = {
          titleTextStyle: { color: '#FFF'},
          backgroundColor: { fill:'transparent', strokeWidth: 0 },
          chartArea: {left: 100},
          legendTextStyle: { color: '#FFF' },
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
          
      function monthTopMgrBarChart() {

        var test = [
          ['Location', 'Revenue', { role: 'style' }]
        ];
          
        for (i = 0; i < 5; i++) {
          test.push([$scope.monthTopMgr[i].Name, {v: $scope.monthTopMgr[i].TotalSales, f: '$' + parseFloat($scope.monthTopMgr[i].TotalSales).toFixed(2)}, '#1dbfe3']);
        }
        
        //Create the data table
        var data = new google.visualization.arrayToDataTable(test);
        
        var options = {
          titleTextStyle: { color: '#FFF'},
          backgroundColor: { fill:'transparent', strokeWidth: 0 },
          chartArea: {left: 100},
          legendTextStyle: { color: '#FFF' },
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
          
      //Get Current Month
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
        $( ".currentMonth" ).text( n );
      }

      function getCurrentYear() {
        var d = new Date();
        var n = d.getFullYear();
        $( ".currentYear" ).text( n );
      }

      getCurrentMonth();
      getCurrentYear();    
          
          
      function dateParse (dateObj) {
        var mystring = dateObj;
        mystring = mystring.replace('/Date(','');
        mystring = mystring.replace(')/','');
        
        mystring = parseInt(mystring);
        
        var formattedDate = convertTime(mystring);
        return formattedDate;
      }        

      function convertTime (timeVar) {
        var date = new Date(timeVar);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds();
        var day = date.getDate();
        var month = 1 + date.getMonth();
        var year = "0" + date.getFullYear();

        // Will display time in 10:30:23 format
        var formattedTime = month + "/" +  day + "/" + year.substr(-4);    
        return formattedTime;
      }

});