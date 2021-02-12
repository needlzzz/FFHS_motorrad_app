//------------ 1 DEFINITION OF GLOBAL VARIABLES --------------//

let t1                  = document.getElementById("t1");
const t2                = document.getElementById("t2");
const ta1               = document.getElementById("ta1");

const formContainer     = document.getElementById("formcontainer");
const formAnchor1       = document.getElementById("formanchor1");
const formAnchor2       = document.getElementById("formanchor2");
const formAnchor3       = document.getElementById("formanchor3");

const emailRegex        = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9-]{2,}$/; //allow characters, require @sign, domain name dot sign and domain with at least 2 characters
const nameRegex         = /^[a-zA-ZäöüÄÖÜ ._-]+ [a-zA-ZäöüÄÖÜ ._-]+$/; //allow characters, require at least two names

const error1            = document.createElement("li");
const error2            = document.createElement("li");
const error3            = document.createElement("li");

const likes             = document.getElementsByName("like");
const prizes            = document.getElementsByName("priceopinion");

let form                = document.getElementById("submit");



//------------ 2 FORM VALIDATION --------------//

form.addEventListener("submit", checkform); /*when submitting, start validation function checkform*/
function checkform( event ) {
    let fehler = 0; /*fehler variable takes ++ if there is an invalidity in the form values*/


    if( t1.value.match(nameRegex) ) { /*validate entry of name with nameRegex*/
        error1.className    = "valid"; /*if name is valid, set error1 element class to valid*/
    }
    else{
        if( t1.vfalue.length === 0 ) { /*if no name has been entered, show message and add +1 to fehler variable*/
            error1.className    = "invalid";
            error1.innerHTML    = `This field is mandatory`;
            formContainer.insertBefore( error1, formAnchor1 );
            fehler++;
        }
        else { /*if name is not valid, set error1 element class to invalid, show error message and add +1 to fehler variable*/
            error1.className    = "invalid";
            error1.innerHTML    = `'${t1.value}' is not a valid name (surname and name)`;
            formContainer.insertBefore( error1, formAnchor1 );
            fehler++;
        }
    }

    if( t2.value.match(emailRegex) ) { /*validate entry of mail with emailRegex*/
        error2.className    = "valid" ;
    }
    else{
        if( t2.value.length === 0 ) {
            error2.className    = "invalid" ;
            error2.innerHTML    = `This field is mandatory`;
            formContainer.insertBefore( error2, formAnchor2 );
            fehler++;
        }
        else {
            error2.className    = "invalid";
            error2.innerHTML    = `'${t2.value}' is not a valid e-mail address`;
            formContainer.insertBefore( error2, formAnchor2 );
            fehler++;
        }
    }


    if( ta1.value.length >= 50 ) { /*validate textarea input*/
        error3.className    = "valid";
    }
    else{
        if( ta1.value.length === 0 ) { /*if no textarea input is available, show message and add 1 to fehler var*/
            error3.className    = "invalid";
            error3.innerHTML    = `This field is mandatory`;
            formContainer.insertBefore( error3, formAnchor3 );
            fehler++;
        }
        else{
            error3.className    = "invalid";
            error3.innerHTML    = `At least 50 characters are required`;
            formContainer.insertBefore( error3, formAnchor3 );
            fehler++;
        }
    }


    if( fehler !== 0 ) { /*if any form input is invalid, prevent data submission*/
        event.preventDefault( );
    }
    else { /*if all form inputs are valid, send form input to server, prevent default submit behavior, insert a text confirmation and execute getData*/
        sendfeedback( );
        event.preventDefault( );
        formContainer.className = "submitted"; /*display none for formContainer (CSS)*/
        let p                   = document.createElement("p" );
        p.className             = "response"; /*apply CSS Styles for response paragraph*/
        p.textContent           = "Your data has been sent successfully. See below the current overall ratings";
        form.appendChild( p );
        getData( );
    }

}


//------------ 3 SEND FORM INPUT (POST) --------------//

function sendfeedback( ) {
    let likevalue;
    for( let t = 0 ; t < likes.length ; t++ ) { /*retrieve checked radio button and assign to variable*/
        if(likes[t].checked){
            likevalue = likes[t].value;
            break; /*only one radio button can be checked, break loop*/
        }
    }
    let prizevalue;
    for (let u = 0 ; u < prizes.length ; u++) { /*retrieve checked radio button and assign to variable*/
        if(prizes[u].checked){
            prizevalue = prizes[u].value;
            break;
        }
    }


    let obj             = { }; /*create string with form inputs, stringify and executre sendData function*/
    obj["id"]           = 1;
    obj["pizzaRating"]  = likevalue;
    obj["prizeRating"]  = prizevalue;
    obj["name"]         = t1.value;
    obj["email"]        = t2.value;
    obj["feedback"]     = ta1.value;
    let data            = JSON.stringify( obj );
    sendData( data );
}


function sendData( data ){ /*send data via POST*/
    let xhr                 = new XMLHttpRequest( ) ;
    const url               = "https://tonyspizzafactory.herokuapp.com/api/feedback";
    xhr.onreadystatechange  = stateChange1 ;
    xhr.ontimeout           = timeout ;
    xhr.onerror             = error ;
    xhr.open( "POST", url, true ) ;
    xhr.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MQ.bYceSpllpyYQixgNzDt7dpCkEojdv3NKD-85XLXfdI4" );
    xhr.setRequestHeader( 'Content-type',  'application/json; charset=utf-8' ) ;
    xhr.send( data ) ;
}
function stateChange1( )
{
    if( this.readyState === 4 ) {
        if( this.status     >= 200 && this.status < 300 ) {
            console.log(JSON.parse(this.responseText));
        }
        else {
            console.log( "Fehler: status " + this.status ) ;
        }
    }
}
function timeout( ) {
    console.log( "Fehler: timeout" ) ;
}
function error( ) {
    console.log( "Fehler: error" ) ;
}