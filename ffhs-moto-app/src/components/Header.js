import React, {useContext} from 'react'; // import hooks from React
import '../css/style.css'; // import CSS
import { Link } from 'react-router-dom'; //import Link
import { AppContext } from "./Context"; // import Context component
import motorbike2 from '../img/motorbike2.png'; // import images

// create Header component
const Header = () => {
  
  // access "global" state object by useContext
  const myContext = useContext(AppContext);
    
  return (
    <React.Fragment>
      <div id='menu_top'>
        <img id='logo' img src={motorbike2} alt='Homepage logo'></img>
        
        {(myContext.loggedin != false) ? (
          <>
            <Link to='/login'>
              <button id='login' type='button'>
                Profile
              </button>
            </Link>
            
            <button id='login' type='button'>
            Logout
            </button>
          </>
        ) : (
          <button id='login' type='button'>
          Login
        </button>
        )}
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
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/register'>Register</Link>
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
