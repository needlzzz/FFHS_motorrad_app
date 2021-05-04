import { render } from 'react-dom';
import Header from './components/Header';
import Map from './components/Routemap';

function Head() {
  return <Header />;
}

function RouteMap() {
  return <Map />;
}

export { RouteMap, Head };
