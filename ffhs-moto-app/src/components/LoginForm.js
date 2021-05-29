import React, {useState} from 'react' // import hooks from React
import '../css/style.css'; // import CSS
import { Link } from 'react-router-dom'; //import Link

// create hook, import Login and error props
function LoginForm({ Login, error}) {
    
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
                <div className= "form-inner">
                    {(error !== "") ? (<div className="form-group" id="form-login-error"> {error} </div>) : ""}
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
                <p className="form-hint">Not registered yet?</p>
                <Link to='/register'>
                    <button className="form-submit" type='button'>
                        Register here
                    </button>
                </Link>  
            </div>
        </form>
    )
}

export default LoginForm
