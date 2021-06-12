// Create an initial map object
// Set the longitude, latitude, and the starting zoom level
var myMap = L.map("map").setView([39.8283, -98.5795], 5);

// Add a tile layer (the background map image) to our map
// Use the addTo method to add objects to our map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 500,
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

L.marker([41.43,-87.38], {
    title: "Soldier Field"
}).addTo(myMap);