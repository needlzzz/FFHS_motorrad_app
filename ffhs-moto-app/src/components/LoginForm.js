import React, {useState, useContext} from 'react' // import hooks from React
import { AppContext } from "./Context"; // import Context component
import '../css/style.css'; // import CSS
import { Link } from 'react-router-dom'; //import Link

// create hook, import Login and error props
function LoginForm({ Login, error}) {
    // access "global" state object by useContext
    const myContext = useContext(AppContext);

    // create state for details
    const [details, setDetails] = useState({email: "", password:""});
    
    // create function for handling submits
    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }

    return (
        <form onSubmit = {submitHandler}>
            <div className= "form-outer">
                <p className="form-title">Login </p>
                {(error === null) ? (<div id="form-error-none"></div>) : (<div id="form-login-error"> {error} </div>)}
                <div className= "form-inner">
                    <div className = "form-group">
                        <label className="form-label" htmlFor="email">Email: </label>
                        <input type="email" name="email" id="email" className="form-input" onChange={e => setDetails({...details, email: e.target.value })} value={details.email} />
                    </div>
                    <div className = "form-group">
                        <label className="form-label" htmlFor="password">Password: </label>
                        <input type="password" name="password" id="password" className="form-input" onChange={e => setDetails({...details, password: e.target.value })} value={details.password} />
                    </div>
                </div>
                <input className= "form-submit" type="submit" value="LOGIN" />
                {(myContext.registered !== null) ? (<div id="form-error-none"></div>) : (
                    <>
                        <p className="form-hint">Not registered yet?</p>
                        <Link to='/register'>
                            <button className="form-submit" type='button'>
                                Register here
                            </button>
                        </Link> 
                    </>
                    )
                }
                 
            </div>
        </form>
    )
}

export default LoginForm
