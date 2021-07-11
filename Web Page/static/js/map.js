// Create an initial map object
// Set the longitude, latitude, and the starting zoom level
var myMap = L.map("map", {
  center: [39.8283, -98.5795],
  zoom: 4
});

// Add a tile layer (the background map image) to our map
// Use the addTo method to add objects to our map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 513,
  maxZoom: 10,
  zoomOffset: -1,
  id: "mapbox/dark-v10",
  accessToken: API_KEY
}).addTo(myMap);
//console.log(myMap)
   // make table appear / disappear on click
//if (document.getElementById("tableinfoID").style.display === "none")
document.getElementById("tableinfoID").style.display = "block";
//else document.getElementById("tableinfoID").style.display = "none";

// insert markers and their functionalities
function markers () {

  for (var i = 0; i < stadiums.length; i++) {

    var marker = L.marker(stadiums[i].locations, {
      
      hometown: stadiums[i].city,
      team: stadiums[i].team,
      conf: stadiums[i].conf,
    })

    // bind popup to chow picture of stadium and name of stadium 
    .bindPopup("<p> <img src='./static/images/stadiums/"+ stadiums[i].city + ".jpg' alt='' width='300' height='150'></p><p>" + stadiums[i].name + "</p>")
    .addTo(myMap)

    // click event to populate table on the right side
    .on({
      click: function(e){
        console.log(e.target.options)
        var city = document.getElementById("city");
        city.innerHTML = e.target.options.hometown;
        var team = document.getElementById("team");
        team.innerHTML = e.target.options.team;
        var conf = document.getElementById("conf");
        conf.innerHTML = e.target.options.conf;
      }});
  };
};

markers();

