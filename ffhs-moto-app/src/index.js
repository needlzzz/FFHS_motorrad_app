import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { Header, Map } from './App';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Map />
  </React.StrictMode>,
  document.getElementById('root')
);

//ReactDOM.render(<Map />, document.getElementById('app'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
