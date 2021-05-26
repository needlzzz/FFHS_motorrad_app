//Willis Task

import React, {useContext} from 'react';
import '../css/style.css';
import { UserContext } from "./Context";

const TestBody = () => {
  const msg = useContext(UserContext);
  
  return (
    <div>
      <h2>Home</h2>
      <div>{msg}</div>

    </div>
  );
};

export default TestBody;
