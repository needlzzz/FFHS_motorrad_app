import React, {useState, useContext} from 'react'; // import hooks from React
import '../css/style.css'; // import CSS
import { AppContext } from "./Context"; // import Context component
import LoginForm from './LoginForm'; // import component
import Profile from './Profile'; // import component

// create hook
const LoginBody = () => {

  // access "global" state object by useContext
  const myContext = useContext(AppContext);
  
  // local state
  const [error, setError] = useState("");

  // create Login request, setStates with received data
  const Login = (data) => {
    fetch('http://localhost:3000/api/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include', // send a request with credentials included on same-origin and cross-origin calls
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(json => {
      setError(json.error)
      if(json.error === null) {
        myContext.setLoggedin(true);
        // myContext.setRegistered(null); 
      } 
    })
    .catch(err => console.log(err));
    }


  // if user.email state is not empty show text and logout, else show login form
  return (
    <React.Fragment>
      <div className="App">
        {(myContext.loggedin === true) ? (
          <div className = "loginsuccess">
            <Profile />
          </div>
        ) : (
          <>
            <LoginForm Login={Login} error={error} />
          </>
        )}
      </div>
    </React.Fragment>
  );
};

export default LoginBody;
