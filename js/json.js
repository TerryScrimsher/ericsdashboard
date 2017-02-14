var app = angular.module('myApp', []);
        app.controller('customersCtrl', function($scope, $http) {
          $http.get("js/jsonresponse.json")
          .success(function (response) {$scope.names = response, 
                                        $scope.names1 = response[0].TopSalesReps, 
                                        $scope.names2 = response[1].TopSalesReps, 
                                        $scope.names3 = response[2].TopSalesReps,
                                        $scope.currentTopPro = response[0].TopSalesReps,
                                        $scope.currentTopMgr = response[0].Managers,
                                        $scope.monthTopPro = response[1].TopSalesReps,
                                        $scope.monthTopMgr = response[1].Managers,
                                        $scope.yearTopPro = response[2].TopSalesReps,
                                        $scope.yearTopMgr = response[2].Managers
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
          
          
          
});