import React, { useRef, useEffect, useState, useMemo } from 'react';
//import browserRouter, Route and Navlink from react-router-dom
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//import App from './App';
// import { Map } from './App';
import reportWebVitals from './reportWebVitals';



//import Components
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import Register from './components/Register';
import Routemap from './components/Routemap';

import {UserContext} from "./components/Context";

// provide routes and add header/footer component to Router
function AppRouter() {
  //store states at top level and share them with components in UserContext.Provider
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({user, setUser}), [user ,setUser]);
  
  return (
    <Router>
      <div>
        <UserContext.Provider value={value}>
          <Header />
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/routes' component={Routemap} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Footer />
        </UserContext.Provider>
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
