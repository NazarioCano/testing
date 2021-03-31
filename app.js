 google.charts.setOnLoadCallback(drawChart);
      google.charts.load('current', {packages: ['corechart', 'line']});
      google.charts.setOnLoadCallback(drawCurveTypes);
      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Agua ltrs', 80],
        ]);

        var options = {
          width: 200, height: 200,
          redFrom: 90, redTo: 100,
          yellowFrom:70, yellowTo: 90,
          minorTicks: 10
        };

        var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

        chart.draw(data, options);

        setInterval(function() {
          data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
          chart.draw(data, options);
      }, 1000);
      }


     function drawCurveTypes() {
     var data = new google.visualization.DataTable();
     data.addColumn('number', 'X');
     data.addColumn('number', 'Historial');


     setInterval(function() {
     data.addRows([
       [0 + Math.round(60 * Math.random()), 0 + Math.round(60 * Math.random())]]);
       chart.draw(data, options);
   }, 5000);

     var options = {
       hAxis: {
         title: 'Tiempo'
       },
       vAxis: {
         title: 'Nivel de Agua ltrs'
       },
       series: {
         1: {curveType: 'function'}
       }
     };

     var chart = new google.visualization.LineChart(document.getElementById('chart_div2'));
     chart.draw(data, options);
   }


//Comienza CILINDRO
   FusionCharts.ready(function(){
           var chartObj = new FusionCharts({
   type: 'cylinder',
   dataFormat: 'json',
   renderAt: 'chart-container',
   width: '200',
   height: '350',
  dataSource : {
  chart: {
    caption: "Level Indicator",
    lowerlimit: "0",
    upperlimit: "100",
    lowerlimitdisplay: "Vacio",
    upperlimitdisplay: "A tope",
    numbersuffix: " ltrs",
    cylfillcolor: "#5D62B5",
    cylfillhoveralpha: "85",
    theme: "candy"
  },
  value: "60"
},


      }
    );
           chartObj.render();
       });

