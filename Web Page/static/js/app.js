

var link = "./static/Table.json";
 //console.log(link);

var dataTable = JSON.parse(link);
    console.log(dataTable.count);



    function populateTable(){
    dataTable.localeCompare(data =>{
        var row = tbody.append("tr");
        row.append("td").text(data.Season);
        row.append("td").text(data.Month);
        row.append("td").text(data.Week);
        row.append("td").text(data.Kickoff_Time);
        row.append("td").text(data.Winner);
        row.append("td").text(data.Home_Team);
        row.append("td").text(data.Kickoff_Temp);
        row.append("td").text(data.Weahter_Element);
        row.append("td").text(data.Cloudiness);
        row.append("td").text(data.Stadium);
    });
    }
populateTable(data);


