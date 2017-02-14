// Load Charts and the corechart package.
      google.charts.load('current', {'packages':['corechart']});



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
      
      //Random Number Function
      function getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
      } 



//      var autoUpdate = setInterval(function(){
//        redrawChart2();
//      }, 3000);     