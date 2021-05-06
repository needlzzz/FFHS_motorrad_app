// import
import React, {useState} from 'react'

// import CSS
import '../css/style.css';

// create hook, import Login and error props
function RegisterForm({ Login, error}) {
    
    // create state for details
    const [details, setDetails] = useState({name: "", email: "", password: ""});
    
    // create function for handling submits
    const submitHandler = e => {
        e.preventDefault();

        Login2(details);
    }

    //needs to be in login.js
    const Login2 = (data) => {
        fetch('http://localhost:3000/api/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(json => console.log(json));
        })
    }

    //register (delete afterwards)
    const test1 = {name: "Friday2", email: "friday2@gmail.com", password: "Test.1"}

    return (
        <form onSubmit = {submitHandler}>
            <div className= "form-inner">
                <h2>Register </h2>
                {(error != "") ? (<div className="error"> {error} </div>) : ""}
                <div className = "form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value })} value={details.name} />
                </div>
                <div className = "form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value })} value={details.email} />
                </div>
                <div className = "form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value })} value={details.password} />
                </div>
                <input type="submit" value="REGISTER" />
            </div>
        </form>
    )
}

export default RegisterForm
