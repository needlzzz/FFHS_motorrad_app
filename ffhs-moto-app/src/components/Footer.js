import React, {useContext} from 'react'; // import hooks from React
import '../css/style.css'; // import CSS
import { Link } from 'react-router-dom'; //import Link 


import logoFb from '../img/logoFb.png'; // import images
import logoTw from '../img/logoTw.png'; // import images
import logoInsta from '../img/logoInsta.png'; // import images
import logoContact from '../img/logoContact.png'; // import images


// create Footer component
const Footer = () => {
  return (
    <React.Fragment>
        <footer>
            <div>
                <p className="ftitle">Follow us:</p>
                <div className="fbody">
                    <img src={logoFb} alt="Facebook" />
                    <img src={logoTw} alt="Twitter" />
                    <img src={logoInsta} alt="Instagram" />
                </div>
            </div>

            <div>
                <p className="ftitle">Copyright:</p>
                <div className="fbody">
                    <p>Project FFHS <br />(Wiliam, Marc, Roger)</p>
                </div>        
            </div>

            <div>
                <p className="ftitle">Contact us:</p>
                <div className="fbody">
                    <Link to='/contact'> <img src={logoContact} alt="Contact" />  </Link>
                </div>
            </div>
        </footer>
        
    </React.Fragment>
  );
};

export default Footer;
