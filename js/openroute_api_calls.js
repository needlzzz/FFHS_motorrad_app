//i must find a way to save the requested coordinates from the openrouteservice API
//into a variable, which can then be sent to our backend and to the DB

let routeBtn = document.getElementById("routeBtn");

routeBtn.addEventListener("click", () => {
  console.log("button pressed");
  //getRouteData();
  fetchDataFromAPI();
  sendAPIResponseToBackend(route1Zurich);
});

let URLroute1Zurich =
  "https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf6248b53c2e2b177c42258f8caf73f94745ae&start=8.681495,49.41461&end=8.687872,49.420318";

let route1Zurich = {};
let route2Zurich;
let route1Lucerne;
let route2Lucerne;

//this function makes the GET request to the external API
const fetchDataFromAPI = () => {
  fetch(URLroute1Zurich, { method: "GET" })
    .then((res) => {
      if (res.ok) {
        route1Zurich = res.json();

        console.log(route1Zurich.PromiseResult);
        return route1Zurich;
        console.log(route1Zurich);
        console.log("API call successful");
      }
    })
    .then(console.log(route1Zurich))
    .catch((error) => {
      console.log(`This is the error-message: ${error}`);
    });
};

const sendAPIResponseToBackend = (APIdata) => {
  setTimeout(
    (logStuff = () => {
      console.log(APIdata);
    }),
    1500
  );
  // here belongs the code that sends the POST request to the /bikeroute route in the backend
};

console.log(route1Zurich);

//XML http request
/*const getRouteData = () => {
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

      } else if (openrouteXHR.status >= 200) {
        reject(openrouteXHR.statusText);
        //console.log("not good");
      }
    };
  });
}; */
