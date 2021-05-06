// import
import React from 'react';

// import css
import '../css/style.css';
import { Link } from 'react-router-dom';

//import images
import motorbike2 from '../img/motorbike2.png';

// create Header component
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
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link className='current' to='/routes'>Route search</Link>
            
          </li>
          <li>
            <Link to='/contact'>Contact form</Link>
          </li>
          <li>
            <Link to='/profile'>MyProfile</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
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
