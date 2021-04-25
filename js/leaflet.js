/* var map = L.map("leafletMapContainer", {
  center: [51.505, 0.09],
  zoom: 13,
}); */

let mapboxTiles = L.tileLayer();

let myMap = L.map("leafletMapContainer").setView(
  [47.398253091585815, 8.522810160908335],
  10
);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmVlZGx6enoiLCJhIjoiY2ttZmRuazByMHZlbDJwcDVic2l2ejlxayJ9.Et17UmFwk2GqHFiFTCUZow",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "ypk.eyJ1IjoibmVlZGx6enoiLCJhIjoiY2ttZmRuazByMHZlbDJwcDVic2l2ejlxayJ9.Et17UmFwk2GqHFiFTCUZow'",
  }
).addTo(myMap);
