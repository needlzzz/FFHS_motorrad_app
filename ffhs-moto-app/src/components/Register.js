import React, {useState, useContext} from 'react'; // import hooks from React
import '../css/style.css'; // import CSS
import RegisterForm from './RegisterForm'; // import component
import LoginForm from './LoginForm'; // import component
import Login from './Login'; // import component

// create hook
const RegisterBody = () => {

  // create states (email not necessary probably)
  const [user, setUser] = useState({userId: ""});
  const [error, setError] = useState("");

  // create Register request, setStates with received data
  const Register = (data) => {
    fetch('http://localhost:3000/api/user/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(json => {
      setError(json.error)
      if(json.error === null) {setUser({userId: json.data.userId}) }
      console.log(json)
    })
    .catch(err => alert(err));
    }

  // if user.email state is not empty show text and logout, else show login form
  return (
    <React.Fragment>
      <div className="App">
        {(user.userId !== "") ? (
          <div className = "registersuccess">
            <p>You have been successfully registered, <span>{user.name}</span></p>
            <Login />
          </div>
        ) : (
          <RegisterForm Register={Register} error={error} />
        )}
      </div>
    </React.Fragment>
  );
};

export default RegisterBody;
