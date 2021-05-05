let routeBtn = document.getElementById("routeBtn");

routeBtn.addEventListener("click", () => {
  console.log("button pressed");
  getRouteData();
});

function getRouteData() {
  let request = new XMLHttpRequest();

  request.open(
    "POST",
    "https://api.openrouteservice.org/v2/directions/driving-car/geojson"
  );

  request.setRequestHeader(
    "Accept",
    "application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8"
  );
  request.setRequestHeader("Content-Type", "application/json");
  request.setRequestHeader(
    "Authorization",
    "5b3ce3597851110001cf6248b53c2e2b177c42258f8caf73f94745ae"
  );

  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      console.log("Status:", this.status);
      console.log("Headers:", this.getAllResponseHeaders());
      console.log("Body:", this.responseText);
    }
  };

  const body =
    '{"coordinates":[[8.681495,49.41461],[8.686507,49.41943],[8.687872,49.420318]]}';

  request.send(body);
}
