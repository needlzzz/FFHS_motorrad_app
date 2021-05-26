// import
import React, {useState, useEffect} from 'react';

// import CSS
import '../css/style.css';

const Profile = () => {
  //create state for profile data
  const [profile, setProfile] = useState( [] );
  const [history, setHistory] = useState( {name: "", email: "", date: "" } );
  const [error, setError] = useState( "" );
  
  
  const myData = () => {
    fetch('http://localhost:3000/api/profile', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',            
        },
        credentials: 'include' // send a request with credentials included on same-origin and cross-origin calls
    })
    .then(response => response.json())
    .then(json => {
      // if(json.error !== null) {
      //   setError(json.error)
      // } else{
      //   setProfile(Object.entries(json[0]))
      // }
      setProfile(Object.entries(json[0]))
      console.log(json[0].name)
      setHistory({name: json[0].name, email: json[0].email, date: json[0].date})
      
      //console.log(error)
      
    })
    .then(() => {
      console.log(profile)
      console.log('test')
      console.log(history)
    })
    .catch(err => alert(err));
  }
    
    
  
  // // load once initially with useEffect   
  // useEffect( () => {
  //   MyData();
  // }, []);
  
  return (
    <React.Fragment>
      <div>
        <h1>Profile</h1>
        <button onClick={myData}>Show my data</button>
        
      </div>
    </React.Fragment>
  );
};

export default Profile;

