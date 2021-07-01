// Indentify and set variables for html field tags
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputTeam = d3.select("#team");
var inputWeather = d3.select("#weather");
var inputCloud = d3.select("#cloud");
var inputMonth = d3.select("#month");

//var button = d3.select("filter-btn")

var tableData = d3.json("./static/data/Table.json", function(data){
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

var button1 = d3.select("#filter-btn");

function handleClick() {

    var inputSeason = d3.select("#season").property("value");
    var inputeam = d3.select("#team").property("value");
    var inputWeather = d3.select("#weather").property("value");
    var inputCloud = d3.select("#cloud").property("value");
    var inputMonth = d3.select("#month").propert("value");

    var filteredTeam = data.filter(data => data.Home_Team === inputTeam);
    var filteredWeather = data.filter(data => data.Weather_Element === inputWeather);
    var filteredCloud = data.filter(data => data.Cloudiness === inputCloud);
    var filteredMonth = data.filter(data => data.Month === inputMonth);
    var filteredSeason = data.filter(data => data.Month === inputSeason);

    //var filteredData = tableData.filter(data => data.)
};

