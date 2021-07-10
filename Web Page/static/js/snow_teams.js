google.charts.load('current', {'packages':['corechart']});
      // Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Top 5 Cities', 'Snowy Games Played'],
      ['Seattle',3],
      ['Carolina',3],
      ['New York (Jets & Giants)',3],
      ['Washington',2],
      ['Green Bay',1]
    ]);

    var options = {
      title: 'Top 5 Cities with the most Snow games',
      is3D: true,
      width: 1160,
      height: 400
    };

    var chart = new google.visualization.PieChart(document.getElementById('snow-pie'));
    chart.draw(data, options);
  }