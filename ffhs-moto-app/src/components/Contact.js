//Willis Task

import React, {useContext} from 'react'; // import hooks from React
import '../css/style.css'; // import CSS
import { UserContext } from "./Context"; // import Context component

const TestBody = () => {
  // access "global" state by useContext
  const {user, setUser} = useContext(UserContext);
  
  return (
    <div>
      <h2>Home</h2>
      <div>{user}</div>
      <button onClick={() => setUser('hey')}>change value</button>

    </div>
  );
};

export default TestBody;
