// import
import React, {useState} from 'react';

// import CSS
import '../css/style.css';

// import
import RegisterForm from './RegisterForm';

// create hook
const RegisterBody = () => {

  // dummy-user ****delete afterwards****
  const adminUser = {
    name: "admin",
    email: "admin@admin.com",
    password: "admin123"
  }

  // create states
  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  // 
  const Login = (details) => {
    console.log(details);
    setUser({
      name: details.name,
      email: details.email
    })

    if(details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Logged in");
    } else {
      setError("Details do not match")
    }
  }


  //
  const Logout = () => {
    setUser({ name: "", email: ""});
  }

  // if user.email state is not empty show text and logout, else show login form
  return (
    <React.Fragment>
      <div className="App">
        {(user.email != "") ? (
          <div className = "welcome">
            <h2>Welcome, <span>{user.name}</span></h2>
            <button onClick={Logout}>Logout</button>
          </div>
        ) : (
          <RegisterForm Login={Login} error={error} />
        )}
      </div>
    </React.Fragment>
  );
};

export default RegisterBody;
