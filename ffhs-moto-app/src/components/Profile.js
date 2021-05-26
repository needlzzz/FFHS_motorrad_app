// import
import React, {useState, useEffect} from 'react';

// import CSS
import '../css/style.css';

const Profile = () => {
  //create state for profile data
  const [history, setHistory] = useState( [] );
  const [profile, setProfile] = useState( {name: "", email: "", date: "" } );
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
      setHistory(Object.entries(json[0]))
      console.log(json[0].name)
      setProfile({name: json[0].name, email: json[0].email, date: json[0].date})
      
      //console.log(error)
      
    })
    .then(() => {
      console.log(profile)
      console.log('test')
      console.log(history)
    })
    .catch(err => console.log(err));
  }
    
    
  
  // load once initially with useEffect   
  useEffect( () => {
    myData();
  }, []);
  

  // render data from fetch get call 
  return (
    <React.Fragment>
      <div>
        <h1>Profile</h1>
        <h2 className="profiletitle">User Data</h2>
        <ul>
          <li>Name: {profile.name}</li>
          <li>Email: {profile.email}</li>
          <li>Date of registration: {profile.date}</li>
        </ul>
        <h2 className="profiletitle">Search History</h2>
        <ul>
          {
            history && history.length>0 && history.map((data) => <li key={data}>{data}</li>)
          }
        </ul>
        
      </div>
    </React.Fragment>
  );
};

export default Profile;

