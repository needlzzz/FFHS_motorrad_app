import React, {useState} from 'react';
import '../css/style.css';
import LoginForm from './LoginForm';

const TestBody = () => {

  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
    setUser({
      name: details.name,
      email: details.email
    })

    if(details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Logged in");
    } else {
      console.log("Details do not match!");
      setError("Details do not match")
    }
  }

  const Logout = () => {
    setUser({ name: "", email: ""});
  }

  return (
    <React.Fragment>
      <div className="App">
        {(user.email != "") ? (
          <div className = "welcome">
            <h2>Welcome, <span>{user.name}</span></h2>
            <button onClick={Logout}>Logout</button>
          </div>
        ) : (
          <LoginForm Login={Login} error={error} />
        )}
      </div>
    </React.Fragment>
  );
};

export default TestBody;
