import React, { useRef, useState } from 'react';
//import browserRouter, Route and Navlink from react-router-dom
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import App from './App';
// import { Map } from './App';
import reportWebVitals from './reportWebVitals';

//import Components
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import MapDirectionLayer, {
  fetchDataFromAPI,
} from './components/MapDirectionLayer';
import Profile from './components/Profile';
import Register from './components/Register';
import Routemap from './components/Routemap';

import { AppContext } from './components/Context';
import { MapDataContext } from './components/MapDataContext';

// provide routes and add header/footer component to Router
function AppRouter() {
  //store states at top level and share them with components in AppContext.Provider
  const [user, setUser] = useState(null); // define global var
  const [loggedin, setLoggedin] = useState(false); // define global var
  const [registered, setRegistered] = useState(null); // define global var
  const information = {
    // create object to hold global vars and methods
    user: user,
    setUser,
    loggedin: loggedin,
    setLoggedin,
    registered: registered,
    setRegistered,
  };

  const testinfo = 'testinfo';

  return (
    <Router>
      <div>
        <AppContext.Provider value={information}>
          <Header />
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />

          <Route exact path='/routes' component={Routemap} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Footer />
        </AppContext.Provider>
      </div>
    </Router>
  );
}

export default AppRouter;

// reportWebVitals();

// import { render } from 'react-dom';
// import Header from './components/Header';
// import Map from './components/Routemap';

// function Head() {
//   return <Header />;
// }

// function RouteMap() {
//   return <Map />;
// }

// export { RouteMap, Head };
