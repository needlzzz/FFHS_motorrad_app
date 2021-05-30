//Willis Task

import React, {useContext} from 'react'; // import hooks from React
import '../css/style.css'; // import CSS
import { AppContext } from "./Context"; // import Context component

const TestBody = () => {
  // access "global" state by useContext
  const myContext = useContext(AppContext);
  
  return (
    <div>
      <h2>Home</h2>
      <div>{myContext.user}</div>
      <button onClick={() => {myContext.setUser('hey')}}>change value</button>
      <div>{myContext.loggedin}</div>
      <button onClick={() => {myContext.setLoggedin(false)}}>change value</button>
      <div>{myContext.registered}</div>

    </div>
  );
};

export default TestBody;
