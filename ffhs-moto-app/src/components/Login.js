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
  const Login2 = (data) => {
    fetch('http://localhost:3000/api/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(json => {
      setError(json.error)
      if(json.error === null) {setUser({token: json.data.token}) }
      console.log(json)
      localStorage.setItem('token', json.data.token);
      
    

    })
    .catch(err => alert(err));
    }


  //
  const Logout = () => {
    setUser({ token: ""});
    //to delete afterwards
    const test= localStorage.getItem('token');
    console.log(test)
  }

  // if user.email state is not empty show text and logout, else show login form
  return (
    <React.Fragment>
      <div className="App">
        {(user.token != "") ? (
          <div className = "loginsuccess">
            <h2>Welcome, <span>{user.token}</span></h2>
            <button onClick={Logout}>Logout</button>
          </div>
        ) : (
          <LoginForm Login2={Login2} error={error} />
        )}
      </div>
    </React.Fragment>
  );
};

export default LoginBody;
