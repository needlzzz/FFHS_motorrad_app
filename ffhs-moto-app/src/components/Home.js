import React, { useState, useContext } from 'react'; // import hooks from React
import '../css/style.css'; // import CSS
import { AppContext } from './Context'; // import Context component
import LoginForm from './LoginForm'; // import component
import Profile from './Profile'; // import component
import { Link } from 'react-router-dom'; //import Link
import {
  asyncAPIandBackendCall,
  APIresponse,
  fetchDataFromAPI,
} from '../js/openroute_api_calls';

// create hook
const LoginBody = () => {
  // access "global" state object by useContext
  const myContext = useContext(AppContext);

  // local state
  const [error, setError] = useState('');

  // create Login request, setStates with received data
  require('dotenv').config();

  const mapboxAccessToken =
    'pk.eyJ1IjoibmVlZGx6enoiLCJhIjoiY2ttZmRrNzlhMzQwazJxa251eHQxYzU4MiJ9.pTqsaTuK9eOK-WluAgU0Eg';

  let APIresponse = {
    coordinates: [12232121.99, 123321.999],
  };
  let route2Zurich;
  let route1Lucerne;
  let route2Lucerne;
  let URLroute2Zurich;
  //const mapboxAccessToken = process.env.REACT_APP_MAPBOX_ACCESSTOKEN;

  // these are the route waypoints that will be sent in the URL to the mapbox API to get the route description
  let baseURL = 'https://api.mapbox.com/directions/v5/mapbox/driving/';
  let URLrouteZurichSporty =
    baseURL +
    '8.302545064505125%2C46.97634644704135%3B8.138109268361632%2C46.98345689840207%3B8.023467410485722%2C46.9281284624702%3B8.023467410485722%2C46.86482591028306%3B8.069787353061145%2C46.81492255056756%3B8.124213285588866%2C46.79589955467398%3B8.190219203759227%2C46.86561765341676%3B8.234223149206173%2C46.890947268190814%3B8.303703063070174%2C46.97555633851931?alternatives=true&geometries=geojson&steps=true&access_token=' +
    mapboxAccessToken;

  const sendDataToBackend = (APIresponse) => {
    //let backendURL = 'http://localhost:3000/api/bikeroutes/history'; // This is the backend URL for the userprofile route from roger 'http://localhost:3000/api/user';
    console.log('THIS IS SENDING IT!');
    fetch('http://localhost:3000/api/bikeroutes/history', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      credentials: 'include',

      body: JSON.stringify(APIresponse),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  async function asyncAPIandBackendCall() {
    try {
      //const routeEval = await whichRoute();
      const reponse1 = await fetchDataFromAPI();
      sendDataToBackend(reponse1);
    } catch (err) {
      console.log(err);
    }
  }

  // if user.email state is not empty show text and logout, else show login form
  return (
    <React.Fragment>
      <div className='App'>
        <button onClick={asyncAPIandBackendCall}>Click here</button>
      </div>
    </React.Fragment>
  );
};

export default LoginBody;
