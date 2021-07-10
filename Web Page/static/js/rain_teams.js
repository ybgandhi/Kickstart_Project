google.charts.load('current', {'packages':['corechart']});
      // Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Top 5 Cities', 'Rainy Games Played'],
      ['Chicago',19],
      ['Oakland',19],
      ['Baltimore',17],
      ['New England',16],
      ['Tampa Bay',16]
    ]);

    var options = {
      title: 'Top 5 Cities with the most Rain games',
      is3D: true,
      width: 1160,
      height: 400
    };

    var chart = new google.visualization.PieChart(document.getElementById('rain-pie'));
    chart.draw(data, options);
  }