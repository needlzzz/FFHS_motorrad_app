import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
//import browserRouter, Route and Navlink from react-router-dom
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

//import App from './App';
import { Map } from './App';
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

// provide routes and add header/footer component to Router
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Route exact path='/' component={Home} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/routes' component={Routemap} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.Fragment>
//     <Header />
//   </React.Fragment>,
//   document.getElementById('header')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <Routemap />
//   </React.StrictMode>,
//   document.getElementById('routemap')
// );

//ReactDOM.render(<Map />, document.getElementById('app'));

reportWebVitals();
