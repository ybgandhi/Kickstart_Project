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
          //['Fair', 370, 5, 84, 332, 332, 262],
          ['Fog/Mist', 4,0,1,4,1,2],
          ['Rain - Heavy', 1,0,0,5,0,8],
          ['Rain - Light', 41,1,7,52,38,61],
          ['Rain - Normal', 5,0,11,10,15,15]
        ]);

        // Set chart options
        var options = {'title':'Inclement Weather By Month',
                       'width':700,
                       'height':700,
                       'isStacked': true,};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    }

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
            'width': 700,
            'height': 500,
            'isStacked': true};
        
        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div2'));
        chart.draw(data, options);
        }


    