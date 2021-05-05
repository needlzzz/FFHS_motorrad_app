import { render } from 'react-dom';
import React from 'react';
import Header from './components/Header';
import RouteMap from './components/Routemap';

const Map = () => {
  return (
    <div className='container'>
      <RouteMap />
      <div></div>
    </div>
  );
};

const Head = () => {
  return (
    <React.Fragment>
      <Header />
    </React.Fragment>
  );
};

/* function Head() {
  return <Header />;
}

function RouteMap() {
  return <Map />;
}  */

export { Map, Head };
