// import
import React, {useState} from 'react';

// import CSS
import '../css/style.css';

const Profile = () => {
  //create state for profile data
  const [profile, setProfile] = useState({})
  const [error, setError] = useState("");
  
  //create get request on user's data
  const MyData = (data) => {
    fetch('http://localhost:3000/api/profile', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',            
        },
        credentials: 'include' // send a request with credentials included on same-origin and cross-origin calls
    })
    .then(response => response.json())
    .then(json => {
      setError(json.error)
      if(json.error === null) {setProfile({data: json}) }
      console.log('here comes the json')
      console.log(json)
      console.log(Object.entries(json[0]))
      //console.log(Object.entries(json[0]))
      console.log("funktioniert")
      console.log("here comes the profile")
      console.log(profile)
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

