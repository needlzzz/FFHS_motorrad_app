let routeBtn = document.getElementById("routeBtn");

routeBtn.addEventListener("click", () => {
  console.log("button pressed");
  getRouteData();
});

const getRouteData = () => {
  return new Promise((resolve, reject) => {
    let openrouteXHR = new XMLHttpRequest();
    let url = "";
    let route1 =
      "https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf6248b53c2e2b177c42258f8caf73f94745ae&start=8.681495,49.41461&end=8.687872,49.420318";

    openrouteXHR.open("GET", route1);
    openrouteXHR.setRequestHeader(
      "Accept",
      "application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8"
    );
    openrouteXHR.send();

    openrouteXHR.onreadystatechange = () => {
      if (openrouteXHR.readyState === 4 && openrouteXHR.status === 200) {
        resolve(openrouteXHR.responseText);
        /*         console.log("Status: ", openrouteXHR.status);
        const responseText = JSON.parse(openrouteXHR.responseText);
        console.log("Body: ", responseText); */
      } else if (openrouteXHR.status >= 200) {
        reject(openrouteXHR.statusText);
        //console.log("not good");
      }
    };
  });
};
