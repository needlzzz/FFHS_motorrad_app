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
        },
        credentials: 'include'
    })
    .then(response => response.json())
    .then(json => {
      setError(json.error)
      if(json.error === null) {setProfile({name: "funktioniert"}) }
      console.log(json)
      console.log("funktioniert")
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

export default Profile;

