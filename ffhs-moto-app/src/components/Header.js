import React from 'react';
import '../css/style.css';
import motorbike2 from '../img/motorbike2.png';

const Header = () => {
  return (
    <React.Fragment>
      <div id='menu_top'>
        <img id='logo' img src={motorbike2} alt='Homepage logo'></img>
        <button id='login' type='button'>
          Login
        </button>
      </div>
      <nav className='menu' id='myMenu'>
        <ul>
          <li>
            <a href='../html/index.html'>Home</a>
          </li>
          <li>
            <a className='current' href='../html/routesearch.html'>
              Route search
            </a>
          </li>
          <li>
            <a href='contact.html'>Contact form</a>
          </li>
          <li className='burger'>
            <a href='javascript:void(0);' onClick='myFunction()'>
              <i class='fa fa-bars'></i>
            </a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Header;
