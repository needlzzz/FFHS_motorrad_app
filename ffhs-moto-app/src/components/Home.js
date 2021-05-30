import React, { useState, useContext } from 'react'; // import hooks from React
import '../css/style.css'; // import CSS
import { AppContext } from './Context'; // import Context component
import LoginForm from './LoginForm'; // import component
import Profile from './Profile'; // import component
import { Link } from 'react-router-dom'; //import Link
import {
  asyncAPIandBackendCall,
  APIresponse,
  fetchDataFromAPI,
} from '../js/openroute_api_calls';

// create hook
const LoginBody = () => {
  // access "global" state object by useContext
  const myContext = useContext(AppContext);

  // local state
  const [error, setError] = useState('');

  import React from 'react'; // import hooks from React
  import '../css/style.css'; // import CSS

  // if user.email state is not empty show text and logout, else show login form
  return (
    <React.Fragment>
      <div className='App'>
        <button onClick={asyncAPIandBackendCall}>Click here</button>
      </div>
    </React.Fragment>
  );
};

export default LoginBody;
