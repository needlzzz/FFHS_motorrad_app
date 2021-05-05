import React from 'react';
import '../css/style.css';
import motorbike2 from '../img/motorbike2.png';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import RouteMap from './Routemap';
import myFunction from '../js/nav';

const Header = () => {
  return (
    <React.Fragment>
      <div id='menu_top'>
        <img id='logo' src={motorbike2} alt='Homepage logo'></img>
        <button id='login' type='button'>
          Login
        </button>
      </div>
      <Router>
        <Route path='/routesearch' exact component={RouteMap} />
        <nav className='menu' id='myMenu'>
          <ul>
            <li>
              <a href='../html/index.html'>Home</a>
            </li>

            <li>
              <a className='current' href='../html/routesearch.html'>
                <Link to='/routesearch'> Route search</Link>
              </a>
            </li>

            <li>
              <a href='contact.html'>Contact form</a>
            </li>
            <li className='burger'>
              <a href='javascript:void(0);' onClick={myFunction}>
                <i class='fa fa-bars'></i>
              </a>
            </li>
          </ul>
        </nav>
      </Router>
    </React.Fragment>
  );
};

export default Header;
