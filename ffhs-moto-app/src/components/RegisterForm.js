
import React, {useState, useContext} from 'react' // import hooks from React
import '../css/style.css'; // import CSS


// create hook, import Register and error props
function RegisterForm({ Register, error}) {
    
    // create state for details
    const [details, setDetails] = useState({name: "", email: "", password: ""});
    
    // create function for handling submits
    const submitHandler = e => {
        e.preventDefault();

        Register(details);
    }

    

    return (
        <form onSubmit = {submitHandler}>
            <div className= "form-outer">
                <p className="form-title">Register</p>
                <div className= "form-inner">
                    {(error !== "") ? (<div className="form-group" id="form-register-error"> {error} </div>) : ""}
                    <div className = "form-group">
                        <label className="form-label" htmlFor="name">Name: </label>
                        <input type="text" name="name" id="name" className="form-input" onChange={e => setDetails({...details, name: e.target.value })} value={details.name} />
                    </div>
                    <div className = "form-group">
                        <label className="form-label" htmlFor="email">Email: </label>
                        <input type="email" name="email" id="email" className="form-input" onChange={e => setDetails({...details, email: e.target.value })} value={details.email} />
                    </div>
                    <div className = "form-group">
                        <label className="form-label" htmlFor="password">Password: </label>
                        <input type="password" name="password" id="password" className="form-input" onChange={e => setDetails({...details, password: e.target.value })} value={details.password} />
                    </div>
                </div>
                <input className= "form-submit" type="submit" value="REGISTER" />
            </div>
        </form>
    )
}

export default RegisterForm
