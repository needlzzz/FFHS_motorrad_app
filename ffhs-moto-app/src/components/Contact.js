import React, { Fragment, useContext, useState } from 'react'; // import hooks from React
import '../css/style.css'; // import CSS
import { AppContext } from "./Context"; // import Context component

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const TestBody = () => {
  // access "global" state by useContext
  const myContext = useContext(AppContext);
}

const Contact = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [comments, setComments] = useState()

  const sendContact = () => {
    fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, emailAddress: email, comments }),
    })
      .then(response => response.json())
      .then(json => {
        if (json.error === null) {
          console.log(json, "contact created")
        }
      })
      .catch(err => alert(err));
  }

  const invalidForm = () => {
    return !name?.length || !comments?.length || !validateEmail(email)
  }


  return (
    <Fragment>
      <h1>Contact us</h1>

      <div className="displayflex">
        <form action="#" id="submit" className="contactform">
          <tr className="">
            <td className="textposition">
              <label for="t1">Your name? *&nbsp;</label>
            </td>

            <td>
              <input className="fixedwidth" type="text" name="name" id="t1" onChange={(event) => { setName(event.target.value) }} />
            </td>
          </tr>




          <tr className="">
            <td className="textposition">
              <label for="t2">Your e-mail address? *&nbsp;</label>
            </td>

            <td>
              <input className="fixedwidth" type="text" name="email" id="t2" onChange={(event) => { setEmail(event.target.value) }} />
            </td>
          </tr>

          <tr className=" verticalaligntop">
            <td className="textposition">
              <label for="ta1">What can we do better? *&nbsp;</label>
            </td>

            <td>
              <textarea className="fixedwidth" name="comments" rows="5" id="ta1" onChange={(event) => { setComments(event.target.value) }}></textarea>
            </td>
          </tr>

          <tr>
            <td></td>

            <td className="floatright">

              <input disabled={invalidForm()} type="submit" onClick={(event) => {
                event.preventDefault()
                event.stopPropagation()
                if (validateEmail(email)) {
                  sendContact()
                  console.log("SUBMIT", name, email, comments)
                }
                else {
                  console.log("email not valid")
                }
              }} />
            </td>
          </tr>
        </form>
      </div>
    </Fragment >
  )
}



export default Contact;




