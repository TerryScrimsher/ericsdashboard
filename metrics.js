// Load Charts and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Draw the pie chart for Sarah's pizza when Charts is loaded.
      google.charts.setOnLoadCallback(drawSarahChart);

      // Draw the pie chart for the Anthony's pizza when Charts is loaded.
      google.charts.setOnLoadCallback(drawBethChart);

      // Callback that draws the pie chart for Sarah's pizza.
      function drawSarahChart() {

        var test = [
          ['Location', 'Revenue']
        ];
          
        for (i = 0; i < obj[0].Office.length; i++) {
          test.push([obj[0].Office[i].Name, {v: obj[0].Office[i].TotalSales, f: '$' + parseFloat(obj[0].Office[i].TotalSales).toFixed(2)}]);
        }
        
        // Create the data table for Sarah's pizza.
        var data = new google.visualization.arrayToDataTable(test);


        // Set options for Sarah's pie chart.
        var options = {
                       height:300,
                       backgroundColor: { fill:'transparent', strokeWidth: 0 },
                       'chartArea': {'width': '100%', 'height': '80%'},
                       'legend': {'position': 'right'},
                       legendTextStyle: { color: '#FFF' },
                       colors: ['#1dbfe3', '#0097c7', '#137a40', '#0ba23f', '#00ca6b'],
                       pieHole: 0.4,
                       pieSliceBorderColor : "transparent" 
                      };

        // Instantiate and draw the chart for Sarah's pizza.
        var chart = new google.visualization.PieChart(document.getElementById('Sarah_chart_div'));
        chart.draw(data, options);
      }

      function drawBethChart() {

        // Create the data table for Anthony's pizza.
        // Create the data table for Anthony's pizza.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Mushrooms', 2],
          ['Onions', 2],
          ['Olives', 2],
          ['Zucchini', 0],
          ['Pepperoni', 3]
        ]);

        // Set options for Anthony's pie chart.
        var options = {title:'How Much Pizza Tim Ate Last Night',
                       width:400,
                       height:300};

        // Instantiate and draw the chart for Anthony's pizza.
        var chart = new google.visualization.PieChart(document.getElementById('Beth_chart_div'));
        chart.draw(data, options);
        
      }

      function drawBethChart2() {
        
        var rand1 = getRandomInt(0,10);
        var rand2 = getRandomInt(0,10);
        var rand3 = getRandomInt(0,10);
        var rand4 = getRandomInt(0,10);
        var rand5 = getRandomInt(0,10);

        // Create the data table for Anthony's pizza.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Mushrooms', rand1],
          ['Onions', rand2],
          ['Olives', rand3],
          ['Zucchini', rand4],
          ['Pepperoni', rand5]
        ]);

        // Set options for Anthony's pie chart.
        var options = {title:'How Much Pizza Beth Ate Last Night',
                       width:400,
                       height:300,
                       animation: {
                           duration: 1000,
                           easing: 'out'
                        },
                      };

        // Instantiate and draw the chart for Anthony's pizza.
        var chart = new google.visualization.PieChart(document.getElementById('Beth_chart_div'));
        chart.draw(data, options);
      }

      function getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      
//      var autoUpdate = setInterval(function(){
//        drawBethChart2();
//      }, 3000);





//
//google.charts.load('current', {'packages':['corechart']});
//      google.charts.setOnLoadCallback(drawChart);
////      function drawChart() {
//        
//        var test = [
//          ['Location', 'Revenue']
//        ];
//          
//        for (i = 0; i < obj[0].Office.length; i++) {
//          test.push([obj[0].Office[i].Name, {v: obj[0].Office[i].TotalSales, f: '$' + parseFloat(obj[0].Office[i].TotalSales).toFixed(2)}]);
//        }
//        
//        var data = google.visualization.arrayToDataTable(test);
//
//        var options = {
//          title: 'LP Sales Chart'
//        };
//
//        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
//
//        chart.draw(data, {colors: ['#147832', '#144678', '#5a1478', '#78141e', '#6e7814'], is3D: false});