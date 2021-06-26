// Create an initial map object
// Set the longitude, latitude, and the starting zoom level
var myMap = L.map("map").setView([39.8283, -98.5795], 5);

// Add a tile layer (the background map image) to our map
// Use the addTo method to add objects to our map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 513,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/dark-v10",
  accessToken: API_KEY
}).addTo(myMap);

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
    locations: [40.8135,-74.0745],
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
    team: "Bills"
  },
  {
    name: "Bank of America Stadium",
    locations: [35.2258,-80.8528],
    city: "Carolina",
    team: "Panthers"
  },
  {
    name: "Paul Brown Stadium",
    locations: [39.0955,-84.5161],
    city: "Cincinnati",
    team: "Bengals"
  },
  {
    name: "FirstEnergy Stadium",
    locations: [41.5061,-81.6995],
    city: "Cleveland",
    team: "Browns"
  },
  {
    name: "Empower Field at Mile High",
    locations: [39.7439,-105.0201],
    city: "Denver",
    team: "Broncos"
  },
  {
    name: "Lucas Oil Stadium",
    locations: [39.7601,-86.1639],
    city: "Indianapolis",
    team: "Colts"
  },
  {
    name: "TIAA Bank Field",
    locations: [30.3239,-81.6373],
    city: "Jacksonville",
    team: "Jaguars"
  },
  {
    name: "Arrowhead Stadium",
    locations: [39.0489,-94.4839],
    city: "Kansas City",
    team: "Cheifs"
  },
  {
    name: "Hard Rock Stadium",
    locations: [25.9580,-80.2359],
    city: "Miami",
    team: "Dolphins"
  },
  {
    name: "Gillette Stadium",
    locations: [42.0909,-71.2643],
    city: "New England",
    team: "Patriots"
  },
  {
    name: "Oakland Coliseum",
    locations: [37.7516,-122.2005],
    city: "Oakland",
    team: "Raiders"
  },
  {
    name: "Lincoln Financial Field",
    locations: [39.9001,-75.1679],
    city: "Philadelphia",
    team: "Eagles"
  },
  {
    name: "Heinz Field",
    locations: [40.4468,-80.0158],
    city: "Pitssburgh",
    team: "Steelers"
  },
  {
    name: "Edward Jones Dome",
    locations: [38.6263,-90.1865],
    city: "St. Louis",
    team: "Rams"
  },
  {
    name: "Qualcomm Stadium",
    locations: [32.7831,-117.1196],
    city: "San Diego",
    team: "Chargers"
  },
  {
    name: "Levis Stadium",
    locations: [37.4032,-121.9697],
    city: "San Francisco",
    team: "49ners"
  },
  {
    name: "Lumen Field",
    locations: [47.5952,-122.3316],
    city: "Seattle",
    team: "Seahawks"
  },
  {
    name: "Raymond James Stadium",
    locations: [27.9759,-82.5033],
    city: "Tampa Bay",
    team: "Bucs"
  },
  {
    name: "Nissan Stadium",
    locations: [36.1665,-86.7713],
    city: "Tennessee",
    team: "Titans"
  },
  {
    name: "FedEx Field",
    locations: [38.9076,-76.8645],
    city: "Washington",
    team: "Football Team"
  },

]

for (var i = 0; i < stadiums.length; i++) {
  L.marker(stadiums[i].locations, {
    title: stadiums[i].city,
  }).bindPopup("<h5> Welcome to "+stadiums[i].name + "</h5> <hr> <h5> Home of the </h5> <hr> <h3>" + stadiums[i].team + "</h3>").addTo(myMap);
}