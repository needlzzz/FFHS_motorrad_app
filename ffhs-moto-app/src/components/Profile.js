// import
import React, {useState} from 'react';

// import CSS
import '../css/style.css';

const Profile = () => {
  //create state for profile data
  const [profile, setProfile] = useState({userId: "", name: "", email: ""})
  const [error, setError] = useState("");
  
  //create get request on user's data
  const MyData = (data) => {
    fetch('http://localhost:3000/api/profile', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicm9iaW5obyIsImlkIjoiNjBhNzY4YzMzM2JjNGUzYTBjMTM0ZTFmIiwiaWF0IjoxNjIxNTg0MDkwfQ.x0S9JbzwQD791Oo5KiwjW-vXRom_l6rwhGGssw8WiNk'
        },
    })
    .then(response => response.json())
    .then(json => {
      setError(json.error)
      if(json.error === null) {setProfile({name: "funktioniert"}) }
      console.log(json)
    })
    .catch(err => alert(err));
    }

    
  
  return (
    <React.Fragment>
      <div>
        <h1>Profile</h1>
        <button onClick={MyData}>Show my data</button>
      </div>
    </React.Fragment>
  );
};

// // create hook
// const LoginBody = () => {

//   // create states
//   const [user, setUser] = useState({ token: "" });
//   const [error, setError] = useState("");

//   // create Login request, setStates with received data
//   const Login2 = (data) => {
//     fetch('http://localhost:3000/api/user/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     })
//     .then(response => response.json())
//     .then(json => {
//       setError(json.error)
//       if(json.error === null) {setUser({token: json.data.token}) }
//       console.log(json)
//     })
//     .catch(err => alert(err));
//     }


//   //
//   const Logout = () => {
//     setUser({ token: ""});
//   }

//   // if user.email state is not empty show text and logout, else show login form
//   return (
//     <React.Fragment>
//       <div className="App">
//         {(user.token != "") ? (
//           <div className = "loginsuccess">
//             <h2>Welcome, <span>{user.token}</span></h2>
//             <button onClick={Logout}>Logout</button>
//           </div>
//         ) : (
//           <LoginForm Login2={Login2} error={error} />
//         )}
//       </div>
//     </React.Fragment>
//   );
// };


export default Profile;

