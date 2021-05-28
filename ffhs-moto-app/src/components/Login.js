// import
import React, {useState} from 'react';

// import CSS
import '../css/style.css';

// import
import LoginForm from './LoginForm';
import Profile from './Profile';

// create hook
const LoginBody = () => {

  // create states
  const [user, setUser] = useState({ token: "" });
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
      if(json.error === null) {setUser({token: json.data.token}) }
      console.log(json)   
    })
    .catch(err => console.log(err));
    }


  //
  const Logout = () => {
    setUser({ token: ""});
    
  }

  // if user.email state is not empty show text and logout, else show login form
  return (
    <React.Fragment>
      <div className="App">
        {(user.token != "") ? (
          <div className = "loginsuccess">
            <Profile />
            <button onClick={Logout}>Logout</button>
          </div>
        ) : (
          <LoginForm Login={Login} error={error} />
        )}
      </div>
    </React.Fragment>
  );
};

export default LoginBody;
