import React, {useState, useEffect} from 'react'; // import hooks from React
import '../css/style.css'; // import CSS

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
      setProfile({name: json[0].name, email: json[0].email, date: json[0].date})      
    })
    .catch(err => console.log(err));
  }

  const myData2 = () => {
    fetch('http://localhost:3000/api/profile/routes', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',            
        },
        credentials: 'include' // send a request with credentials included on same-origin and cross-origin calls
    })
    .then(response => response.json())
    .then(json => {
      let ty = []
      for (let i=0; i < json.length; i++) {
        ty.push(json[i]._id)
      }
      
      setHistory(ty)
          
    })
    .catch(err => console.log(err));
  }


  
  // load once initially with useEffect   
  useEffect( () => {
    myData();
    myData2();
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
              history && history.length>0 && history.map((data) => <li key={data}><span className="profile-label">Route:</span><span className="profile-value">{data}</span></li>)
            }
          </ul>
        </div>
        
        
      </div>
    </React.Fragment>
  );
};

export default Profile;

