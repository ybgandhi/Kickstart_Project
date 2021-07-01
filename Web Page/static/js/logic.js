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
  id: "mapbox/navigation-night-v1",
  accessToken: API_KEY
}).addTo(myMap);
console.log(myMap)
// link to get the geojson data.
// var link = "locations.geojson";
// L.geoJson(link).addTo(myMap);

// d3.json(link).then(function(data) {
//    L.geoJson(data, {
//        onEachFeature: function(feature, layer) {
//            layer.on({
//               click: function(event) {
//                   myMap.fitBounds(event.target.getBounds()); 
//               }
//            });
//            layer.bindPopup(feature.properties.Stadium);
//        }
//    }).addTo(myMap);
// });

var stadiums = [
  {
    name: "Soldier Field",
    locations: [41.8135,-74.0745],
    city: "Chicago",
    team: "Bears",
    conf: "NFC"
  },
  {
    name: "MetLife Stadium",
    locations: [40.8135,-74.0745],
    city: "New York",
    team: "Jets",
    conf: "AFC"
  },
  {
    name: "MetLife Stadium",
    locations: [40.8135,-74.1745],
    city: "New York",
    team: "Giants",
    conf: "NFC",
  },
  {
    name: "Lambeau Field",
    locations: [44.5013,-88.0622],
    city: "Green Bay",
    team: "Packers",
    conf: "NFC"
  },
  {
    name: "State Farm Stadium",
    locations: [33.5276,-112.2626],
    city: "Arizona",
    team: "Cardinals",
    conf: "NFC"
  },
  {
    name: "M&T Bank Stadium",
    locations: [39.2780,-76.6227],
    city: "Baltimore",
    team: "Ravens",
    conf: "AFC"
  },
  {
    name: "New Era Field",
    locations: [42.7738,-78.7870],
    city: "Buffalo",
    team: "Bills",
    conf: "AFC"
  },
  {
    name: "Bank of America Stadium",
    locations: [35.2258,-80.8528],
    city: "Carolina",
    team: "Panthers",
    conf: "NFC"
  },
  {
    name: "Paul Brown Stadium",
    locations: [39.0955,-84.5161],
    city: "Cincinnati",
    team: "Bengals",
    conf: "AFC"
  },
  {
    name: "FirstEnergy Stadium",
    locations: [41.5061,-81.6995],
    city: "Cleveland",
    team: "Browns",
    conf: "AFC"
  },
  {
    name: "Empower Field at Mile High",
    locations: [39.7439,-105.0201],
    city: "Denver",
    team: "Broncos",
    conf: "AFC"
  },
  {
    name: "Lucas Oil Stadium",
    locations: [39.7601,-86.1639],
    city: "Indianapolis",
    team: "Colts",
    conf: "AFC"
  },
  {
    name: "TIAA Bank Field",
    locations: [30.3239,-81.6373],
    city: "Jacksonville",
    team: "Jaguars",
    conf: "AFC"
  },
  {
    name: "Arrowhead Stadium",
    locations: [39.0489,-94.4839],
    city: "Kansas City",
    team: "Cheifs",
    conf: "AFC"
  },
  {
    name: "Hard Rock Stadium",
    locations: [25.9580,-80.2359],
    city: "Miami",
    team: "Dolphins",
    conf: "AFC"
  },
  {
    name: "Gillette Stadium",
    locations: [42.0909,-71.2643],
    city: "New England",
    team: "Patriots",
    conf: "AFC"
  },
  {
    name: "Oakland Coliseum",
    locations: [37.7516,-122.2005],
    city: "Oakland",
    team: "Raiders",
    conf: "AFC"
  },
  {
    name: "Lincoln Financial Field",
    locations: [39.9001,-75.1679],
    city: "Philadelphia",
    team: "Eagles",
    conf: "NFC"
  },
  {
    name: "Heinz Field",
    locations: [40.4468,-80.0158],
    city: "Pittsburgh",
    team: "Steelers",
    conf: "AFC"
  },
  {
    name: "Edward Jones Dome",
    locations: [38.6263,-90.1865],
    city: "St. Louis",
    team: "Rams",
    conf: "NFC"
  },
  {
    name: "Qualcomm Stadium",
    locations: [32.7831,-117.1196],
    city: "San Diego",
    team: "Chargers",
    conf: "AFC"
  },
  {
    name: "Levis Stadium",
    locations: [37.4032,-121.9697],
    city: "San Francisco",
    team: "49ners",
    conf: "NFC"
  },
  {
    name: "Lumen Field",
    locations: [47.5952,-122.3316],
    city: "Seattle",
    team: "Seahawks",
    conf: "NFC"
  },
  {
    name: "Raymond James Stadium",
    locations: [27.9759,-82.5033],
    city: "Tampa Bay",
    team: "Bucs",
    conf: "NFC"
  },
  {
    name: "Nissan Stadium",
    locations: [36.1665,-86.7713],
    city: "Tennessee",
    team: "Titans",
    conf: "AFC"
  },
  {
    name: "FedEx Field",
    locations: [38.9076,-76.8645],
    city: "Washington",
    team: "Football Team",
    conf: "NFC"
  },

];

var Team = d3.select("#team").property("value");
var inputCity = d3.select("#hometown").property("value");
var inputConf = d3.select("#conf").property("value");

// insert pictures for pop - ups
function markers () {

  for (var i = 0; i < stadiums.length; i++) {

    var marker = L.marker(stadiums[i].locations, {
      title: stadiums[i].city
    })

    // bind popup to chow picture of stadium and name of stadium 
    .bindPopup("<p> <img src='./static/images/stadiums/"+ stadiums[i].city + ".jpg' alt='' width='300' height='150'></p><p>" + stadiums[i].name + "</p>").addTo(myMap);

    // click event to update table when maker clicked
    var inputTeam = stadiums[i].team;
    console.log(inputTeam);
    marker.on({
      click: function (e) {
        
        
        console.log("testing")
        if (document.getElementById("tableinfoID").style.display === "none")
          document.getElementById("tableinfoID").style.display = "block";
          else document.getElementById("tableinfoID").style.display = "none";
      }
    });
  };
};

markers();