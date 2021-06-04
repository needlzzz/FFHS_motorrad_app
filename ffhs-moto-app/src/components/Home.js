import React, { useContext } from 'react'; // import hooks from React
import '../css/style.css'; // import CSS
import { Link } from 'react-router-dom'; //import Link 
import gsr750 from '../img/gsr750.JPG'; // import images

const TestBody = () => {
  return (
    <React.Fragment>
      <div>
        <h1>Where biking becomes fun</h1>
        <p class="plp">The online map for bike routes</p>
        <Link to='register'><button id="btnRegister">Register Now</button> </Link>

        <tbody width="100%">

          <tr>
            <td width="40%" className="padding">
              <p>Save, share and get your optimal bike routes and get out there!</p><br></br>
              <Link to='/routes'> <p><br></br>Learn more</p> </Link>
            </td>
            <td width="60%" className="padding">
              <img src={gsr750} alt="motorbike" class="responsive"></img>
            </td>
          </tr>
        </tbody>



      </div>
    </React.Fragment>
  );
};

export default TestBody;


