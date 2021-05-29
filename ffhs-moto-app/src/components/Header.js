import React, {useContext, useState} from 'react'; // import hooks from React
import '../css/style.css'; // import CSS
import { Link } from 'react-router-dom'; //import Link
import { AppContext } from "./Context"; // import Context component
import motorbike2 from '../img/motorbike2.png'; // import images
import profileimg from '../img/profile.png'; // import images
import burgerimg from '../img/burgermenu.png'; // import images

// create Header component
const Header = () => {
  // access "global" state object by useContext
  const myContext = useContext(AppContext);
  // define burger state
  const [mobile, setMobile] = useState("");
  
  // burger-menu function for responsiveness
  const Burger = () => {
    if(mobile==="") {setMobile('mobile')}
    else {
      setMobile('')
    }

  }
  

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
        myContext.setRegistered(null)
      }   
    })
    .catch(err => console.log(err));
  }

  return (
    <React.Fragment>
      <div id='menu_top'>
        <Link id="logolink" to='/home'>
          <img id='logo' img src={motorbike2} alt='Homepage logo'></img>
        </Link>   
        {(myContext.loggedin !== false) ? (
          <>
            <Link to='/login'>
              <img id="profileimg" src={profileimg} alt="Profile" />
            </Link>
            
            <Link to='/login'>
              <button onClick={Logout}  className="login-btn" type='button'>
                Logout
              </button>
            </Link>
          </>
        ) : (
          <Link to='/login'>
              <button className="login-btn" type='button'>
                Login
              </button>
          </Link>        
        )}
      </div>
      <nav className='menu' id='myMenu'>
        <Link className={`menulink ${mobile}`} to='/home'>Home</Link>
        <Link className={`menulink ${mobile}`} to='/routes'>Route search</Link>
        <Link className={`menulink ${mobile}`} to='/contact'>Contact form</Link>
        <img id="burger" onClick={Burger} src={burgerimg} alt='Burgermenu'></img>
      </nav>
    </React.Fragment>
  );
};

export default Header;
