import React, {useState, useEffect, useContext} from 'react'; // import hooks from React
import '../css/style.css'; // import CSS
import { AppContext } from "./Context"; // import Context component

const Profile = () => {
  // access "global" state object by useContext
  const myContext = useContext(AppContext);
  
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
      setProfile({name: json[0].name, email: json[0].email, date: json[0].date})
      
      //console.log(error)
      
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
      <div className="profile-outer">
        <h1 className="profile-title">Profile</h1>
        <div className= "profile-inner">
          <p className="profile-title2">User Data</p>
          <ul className="profile-group">
            <li><span className="profile-label">Name:</span> <span className="profile-value">{profile.name}</span></li>
            <li><span className="profile-label">Email:</span> <span className="profile-value">{profile.email}</span></li>
            <li><span className="profile-label">Date of registration:</span> <span className="profile-value">{profile.date}</span></li>
          </ul >
        </div>
        <div className="profile-inner" id="pt2">
          <p className="profile-title2">Search History</p>
          <ul className="profile-group">
            {
              history && history.length>0 && history.map((data) => <li key={data}>{data}</li>)
            }
          </ul>
        </div>
        
        
      </div>
    </React.Fragment>
  );
};

export default Profile;

