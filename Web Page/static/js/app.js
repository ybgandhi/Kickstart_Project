// Indentify and set variables for html field tags
var tbody = d3.select("tbody");
//var button = d3.select("filter-btn")

d3.json("./static/data/Table.json", function(data){
    console.log(data);
    data.forEach(function(data){
        var row = tbody.append("tr");
        
        row.append("td").text(data.Season);
        row.append("td").text(data.Month);
        row.append("td").text(data.Week);
        row.append("td").text(data.Kickoff_Time);
        row.append("td").text(data.Winner);
        row.append("td").text(data.Home_Team);
        row.append("td").text(data.Kickoff_Temp);
        row.append("td").text(data.Weather_Element);
        row.append("td").text(data.Cloudiness);
        row.append("td").text(data.Stadium);
    });

});



