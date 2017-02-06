// Load Charts and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Draw the pie charts when Charts is loaded.
      currentCycleTopReps();
      google.charts.setOnLoadCallback(currentCyclePieChart);
      google.charts.setOnLoadCallback(currentCycleBarChart);

      google.charts.setOnLoadCallback(currentMonthPieChart);
      google.charts.setOnLoadCallback(currentMonthBarChart);

      google.charts.setOnLoadCallback(currentYearBarChart);

      



      // Callback that draws the pie chart.
      function currentCyclePieChart() {

        var test = [
          ['Location', 'Revenue']
        ];
          
        for (i = 0; i < obj[0].Office.length; i++) {
          test.push([obj[0].Office[i].Name, {v: obj[0].Office[i].TotalSales, f: '$' + parseFloat(obj[0].Office[i].TotalSales).toFixed(2)}]);
        }
        
        // Create the data table for Sarah's pizza.
        var data = new google.visualization.arrayToDataTable(test);

        // Set options for the pie chart.
        var options = {
//                       title: 'My Daily Activities',
                       height:250,
                       backgroundColor: { fill:'transparent', strokeWidth: 0 },
                       'chartArea': {'width': '100%', 'height': '80%'},
                       'legend': {'position': 'right'},
                       legendTextStyle: { color: '#FFF' },
                       colors: ['#1dbfe3', '#0097c7', '#137a40', '#0ba23f', '#00ca6b'],
                       pieHole: 0.4,
                       pieSliceBorderColor : "transparent" 
                      };

        // Instantiate and draw the chart.
        var chart = new google.visualization.PieChart(document.getElementById('Sarah_chart_div'));
        chart.draw(data, options);
      }

      function currentMonthPieChart() {

        var test = [
          ['Location', 'Revenue']
        ];
          
        for (i = 0; i < obj[1].Office.length; i++) {
          test.push([obj[1].Office[i].Name, {v: obj[1].Office[i].TotalSales, f: '$' + parseFloat(obj[1].Office[i].TotalSales).toFixed(2)}]);
        }
        
        // Create the data table.
        var data = new google.visualization.arrayToDataTable(test);


        // Set options for the pie chart.
        var options = {
                       height:250,
                       backgroundColor: { fill:'transparent', strokeWidth: 0 },
                       'chartArea': {'width': '100%', 'height': '80%'},
                       'legend': {'position': 'right'},
                       legendTextStyle: { color: '#FFF' },
                       colors: ['#1dbfe3', '#0097c7', '#137a40', '#0ba23f', '#00ca6b'],
                       pieHole: 0.4,
                       pieSliceBorderColor : "transparent" 
                      };

        // Instantiate and draw the chart.
        var chart = new google.visualization.PieChart(document.getElementById('Beth_chart_div'));
        chart.draw(data, options);
        
      }

      function redrawChart2() {
        
        var test = [
          ['Location', 'Revenue']
        ];
          
        for (i = 0; i < obj[0].Office.length; i++) {
          test.push([obj[0].Office[i].Name, getRandomInt(100, 10000)]);
        }
        
        // Create the data table for Sarah's pizza.
        var data = new google.visualization.arrayToDataTable(test);


        // Set options pie chart.
        var options = {
                       height:250,
                       backgroundColor: { fill:'transparent', strokeWidth: 0 },
                       'chartArea': {'width': '100%', 'height': '80%'},
                       'legend': {'position': 'right'},
                       legendTextStyle: { color: '#FFF' },
                       colors: ['#1dbfe3', '#0097c7', '#137a40', '#0ba23f', '#00ca6b'],
                       pieHole: 0.4,
                       pieSliceBorderColor : "transparent" 
                      };

        // Instantiate and draw the chart.
        var chart = new google.visualization.PieChart(document.getElementById('Beth_chart_div'));
        chart.draw(data, options);
      }

      function currentCycleBarChart() {

        var test = [
          ['Location', 'Revenue', { role: 'style' }]
        ];
          
        for (i = 0; i < 5; i++) {
          test.push([obj[0].Managers[i].Name, {v: obj[0].Managers[i].TotalSales, f: '$' + parseFloat(obj[0].Managers[i].TotalSales).toFixed(2)}, '#1dbfe3']);
        }
        
        //Create the data table
        var data = new google.visualization.arrayToDataTable(test);
        
        var options = {
          title: 'Management Total Sales',
          titleTextStyle: { color: '#FFF'},
          backgroundColor: { fill:'transparent', strokeWidth: 0 },
          height:250,
          chartArea: {'width': '60%'},
          legendTextStyle: { color: '#FFF' },
          'legend':'none',
          hAxis: {
            title: 'Total Sales',
            minValue: 0,
            textStyle: {
              color: '#FFF'
            }
          },
          vAxis: {
            title: 'Manager',
            textStyle: {
              color: '#FFF'
            }
          },
        };
        
        // Instantiate and draw the chart.
        var chart = new google.visualization.BarChart(document.getElementById('currentCycleBarChart'));
        chart.draw(data, options);
      }
      
      function currentMonthBarChart() {

        var test = [
          ['Location', 'Revenue', { role: 'style' }]
        ];
          
        for (i = 0; i < 5; i++) {
          test.push([obj[1].Managers[i].Name, {v: obj[1].Managers[i].TotalSales, f: '$' + parseFloat(obj[1].Managers[i].TotalSales).toFixed(2)}, '#1dbfe3']);
        }
        
        //Create the data table
        var data = new google.visualization.arrayToDataTable(test);
        
        var options = {
          title: 'Management Total Sales',
          titleTextStyle: { color: '#FFF'},
          backgroundColor: { fill:'transparent', strokeWidth: 0 },
          height:250,
          chartArea: {'width': '60%'},
          legendTextStyle: { color: '#FFF' },
          'legend':'none',
          hAxis: {
            title: 'Total Sales',
            minValue: 0,
            textStyle: {
              color: '#FFF'
            }
          },
          vAxis: {
            title: 'Manager',
            textStyle: {
              color: '#FFF'
            }
          },
        };
        
        // Instantiate and draw the chart for Sarah's pizza.
        var chart = new google.visualization.BarChart(document.getElementById('currentMonthBarChart'));
        chart.draw(data, options);
      }

      function currentYearBarChart() {

        var test = [
          ['Location', 'Revenue', { role: 'style' }]
        ];
          
        for (i = 0; i < 5; i++) {
          test.push([obj[2].Managers[i].Name, {v: obj[2].Managers[i].TotalSales, f: '$' + parseFloat(obj[2].Managers[i].TotalSales).toFixed(2)}, '#1dbfe3']);
        }
        
        //Create the data table
        var data = new google.visualization.arrayToDataTable(test);
        
        var options = {
          title: 'Management Total Sales',
          titleTextStyle: { color: '#FFF'},
          backgroundColor: { fill:'transparent', strokeWidth: 0 },
          height:250,
          chartArea: {'width': '50%'},
          legendTextStyle: { color: '#FFF' },
          'legend':'none',
          hAxis: {
            title: 'Total Sales',
            minValue: 0,
            textStyle: {
              color: '#FFF'
            }
          },
          vAxis: {
            title: 'Manager',
            textStyle: {
              color: '#FFF'
            }
          },
        };
        
        // Instantiate and draw the chart for Sarah's pizza.
        var chart = new google.visualization.BarChart(document.getElementById('currentYearBarChart'));
        chart.draw(data, options);
      }

        
      function currentCycleTopReps () {
        for (var i = 0; i < obj[0].TopSalesReps.length; i++) {

          var table = document.getElementById("currentManagersTable");
          var row = table.insertRow(-1);
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          var cell3 = row.insertCell(2);
          cell1.innerHTML = i + 1;
          cell2.innerHTML = obj[0].TopSalesReps[i].Name;
          cell3.innerHTML = parseFloat(obj[0].TopSalesReps[i].TotalSales).toFixed(2);

        }
      }

      for (var i = 0; i < obj[1].TopSalesReps.length; i++) {
        
        var table = document.getElementById("currentManagersTable2");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = i + 1;
        cell2.innerHTML = obj[1].TopSalesReps[i].Name;
        cell3.innerHTML = parseFloat(obj[1].TopSalesReps[i].TotalSales).toFixed(2);
        
      }

      for (var i = 0; i < obj[2].TopSalesReps.length; i++) {
        
        var table = document.getElementById("currentManagersTable3");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = i + 1;
        cell2.innerHTML = obj[2].TopSalesReps[i].Name;
        cell3.innerHTML = parseFloat(obj[2].TopSalesReps[i].TotalSales).toFixed(2);
        
      }
      
      //Random Number Function
      function getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
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
        document.getElementById("currentMonth").innerHTML = n;
      }

      function getCurrentYear() {
        var d = new Date();
        var n = d.getFullYear();
        document.getElementById("currentYear").innerHTML = n;
      }

      getCurrentMonth();
      getCurrentYear();

      var autoUpdate = setInterval(function(){
        redrawChart2();
      }, 3000);


      /* Sorting */
//      var currentSalesCycle = [];
//      for (var i = 0; i < obj[0].TopSalesReps.length; i++) {
//        var valueToPush = new Array();
//        valueToPush = [{name: obj[0].TopSalesReps[i].Name}, {value: parseFloat(obj[0].TopSalesReps[i].TotalSales).toFixed(2)}];
//                                                             
//        currentSalesCycle.push(valueToPush);
//      }
//
//      currentSalesCycle.sort(function (a,b) {
//          if (a[0] < b[0]) return  1;
//          if (a[0] > b[0]) return -1;
//          if (a[2] > b[2]) return  1;
//          if (a[2] < b[2]) return -1;
//          return 0;
//      });
//      
//      for (var i = 0, len = currentSalesCycle.length; i < len; i++) {
//        console.log(currentSalesCycle[i][0]);
//        console.log(currentSalesCycle[i][1]);
//      }
      



     