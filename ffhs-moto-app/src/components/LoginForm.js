import React, {useState, useContext} from 'react' // import hooks from React
import '../css/style.css'; // import CSS
import { UserContext } from "./Context"; // import Context component

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
            <div className= "form-inner">
                <h2>Login </h2>
                {(error != "") ? (<div className="error"> {error} </div>) : ""}
                <div className = "form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value })} value={details.email} />
                </div>
                <div className = "form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value })} value={details.password} />
                </div>
                <input type="submit" value="LOGIN" />
            </div>
        </form>
    )
}

export default LoginForm
