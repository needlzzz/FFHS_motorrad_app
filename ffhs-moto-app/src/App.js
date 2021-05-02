import { render } from 'react-dom';
import Header from './components/Header';
import Map from './components/Routemap';

function App() {
  return (<Map />), (<Header />);
}

export { Map, Header };
