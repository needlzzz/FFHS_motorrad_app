import React, {useContext} from 'react'; // import hooks from React
import '../css/style.css'; // import CSS
import { Link } from 'react-router-dom'; //import Link
import { AppContext } from "./Context"; // import Context component
import motorbike2 from '../img/motorbike2.png'; // import images

// create Header component
const Header = () => {
  // access "global" state object by useContext
  const myContext = useContext(AppContext);
  
  // create Login request, setStates with received data
  const Logout = () => {
    fetch('http://localhost:3000/api/user/logout', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include', // send a request with credentials included on same-origin and cross-origin calls
    })
    .then(response => response.json())
    .then(json => {
      if(json.error===null) {
        console.log(json);
        myContext.setLoggedin(false);
      }   
    })
    
  }


  return (
    <React.Fragment>
      <div id='menu_top'>
        <img id='logo' img src={motorbike2} alt='Homepage logo'></img>
        
        {(myContext.loggedin != false) ? (
          <>
            <Link to='/login'>
              <button id='profile' type='button'>
                Profile
              </button>
            </Link>
            
            <button onClick={Logout}  id='login' type='button'>
              Logout
            </button>
          </>
        ) : (
          <Link to='/login'>
              <button id='login' type='button'>
                Login
              </button>
          </Link>        
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
