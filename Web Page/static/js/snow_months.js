//<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

google.charts.load('current', {'packages':['corechart']});
      // Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
    

    function drawChart() {
        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Weather Element');
        data.addColumn('number', 'Dec');
        data.addColumn('number', 'Feb');
        data.addColumn('number', 'Jan');
        data.addColumn('number', 'Nov');
        data.addColumn('number', 'Oct');
        data.addColumn('number', 'Sep');

        data.addRows([
          ['Snow - Heavy', 6,0,2,2,0,0],
          ['Snow - Light', 2,0,0,0,0,0],
          ['Snow - Normal', 4,0,2,0,0,0]
        ]);

        var options = {
            'title': 'Snowy Weather by Months',
            'width': 500,
            'height': 550,
            'isStacked': true};
        
        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div2'));
        chart.draw(data, options);
        }


    