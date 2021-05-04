import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';

//import App from './App';
import { App, Head } from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Routemap from './components/Routemap';

ReactDOM.render(
  <React.Fragment>
    <Header />
  </React.Fragment>,
  document.getElementById('header')
);

ReactDOM.render(
  <React.StrictMode>
    <Routemap />
  </React.StrictMode>,
  document.getElementById('routemap')
);

//ReactDOM.render(<Map />, document.getElementById('app'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
