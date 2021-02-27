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
        if( t1.value.length === 0 ) { /*if no name has been entered, show message and add +1 to fehler variable*/
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


// //------------ 3 SEND FORM INPUT (POST) --------------//

// function sendfeedback( ) {
//     let likevalue;
//     for( let t = 0 ; t < likes.length ; t++ ) { /*retrieve checked radio button and assign to variable*/
//         if(likes[t].checked){
//             likevalue = likes[t].value;
//             break; /*only one radio button can be checked, break loop*/
//         }
//     }
//     let prizevalue;
//     for (let u = 0 ; u < prizes.length ; u++) { /*retrieve checked radio button and assign to variable*/
//         if(prizes[u].checked){
//             prizevalue = prizes[u].value;
//             break;
//         }
//     }


//     let obj             = { }; /*create string with form inputs, stringify and executre sendData function*/
//     obj["id"]           = 1;
//     obj["pizzaRating"]  = likevalue;
//     obj["prizeRating"]  = prizevalue;
//     obj["name"]         = t1.value;
//     obj["email"]        = t2.value;
//     obj["feedback"]     = ta1.value;
//     let data            = JSON.stringify( obj );
//     sendData( data );
// }


// function sendData( data ){ /*send data via POST*/
//     let xhr                 = new XMLHttpRequest( ) ;
//     const url               = "https://tonyspizzafactory.herokuapp.com/api/feedback";
//     xhr.onreadystatechange  = stateChange1 ;
//     xhr.ontimeout           = timeout ;
//     xhr.onerror             = error ;
//     xhr.open( "POST", url, true ) ;
//     xhr.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MQ.bYceSpllpyYQixgNzDt7dpCkEojdv3NKD-85XLXfdI4" );
//     xhr.setRequestHeader( 'Content-type',  'application/json; charset=utf-8' ) ;
//     xhr.send( data ) ;
// }
// function stateChange1( )
// {
//     if( this.readyState === 4 ) {
//         if( this.status     >= 200 && this.status < 300 ) {
//             console.log(JSON.parse(this.responseText));
//         }
//         else {
//             console.log( "Fehler: status " + this.status ) ;
//         }
//     }
// }
// function timeout( ) {
//     console.log( "Fehler: timeout" ) ;
// }
// function error( ) {
//     console.log( "Fehler: error" ) ;
// }



// //------------ 4 FEEDBACK STATISTICS AFTER SUBMISSION --------------//

// function getData( ) { /*retrieve all submitted form inputs*/
//     let xhr                 = new XMLHttpRequest( ) ;
//     const url               = "https://tonyspizzafactory.herokuapp.com/api/feedback" ;
//     xhr.onreadystatechange  = stateChange ;
//     xhr.ontimeout         = timeout ;
//     xhr.onerror           = error ;
//     xhr.open( "GET", url, true ) ;
//     xhr.setRequestHeader("Authorization","eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MQ.bYceSpllpyYQixgNzDt7dpCkEojdv3NKD-85XLXfdI4" );
//     xhr.setRequestHeader( 'Content-type', 'application/json; charset=utf-8' ) ;
//     xhr.send( null ) ;
// }

// function stateChange( ) { /*parse JSON data, assign to statistics variable and execute pieChart function*/
//     if( this.readyState === 4 ) {
//         if( this.status     >= 200 && this.status < 300 ) {
//             let statistics = JSON.parse( this.responseText );
//             pieChart ( statistics );
//         }
//         else {
//             console.log ( "Fehler: status " + this.status ) ;
//         }
//     }
// }


// function pieChart(statistics) { /*create new div element for pie chart*/
//     let div             = document.createElement("div");
//     div.id              = "chartContainer";
//     form.appendChild( div );


//     let counterFair         = 0; /*retrieve all prize ratings from JSON file and transform into target array pieChartData*/
//     let counterOkay         = 0;
//     let counterExpensive    = 0;
//     for (let i5 = 0; i5 < statistics.length; i5++) {
//         if ( statistics[i5].prizeRating === "fair" ) {
//             counterFair++;
//         } else if ( statistics[i5].prizeRating === "okay" ) {
//             counterOkay++;
//         } else if ( statistics[i5].prizeRating === "expensive" ) {
//             counterExpensive++;
//         }
//     }
//     let pieChartData = [
//         {"prize-opinion": "fair", "votes": counterFair},
//         {"prize-opinion": "okay", "votes": counterOkay},
//         {"prize-opinion": "expensive", "votes": counterExpensive}
//     ];


//     let svg         = dimple.newSvg ( "#chartContainer", 300, 300 ); /*create pieChart for prizeRatings with dimple js*/
//     let chart       = new dimple.chart( svg, pieChartData );
//     chart.addMeasureAxis( "p", "votes" );
//     chart.addSeries( "prize-opinion", dimple.plot.pie );
//     chart.addLegend(225, 10, 90, "100%", "left");
//     chart.draw( );


//     let counterAwesome      = 0; /*retrieve all like ratings from JSON file and transform into target array pieChartData*/
//     let counterGood         = 0;
//     let counterOk           = 0;
//     let counterPoor         = 0;
//     for (let i6 = 0; i6 < statistics.length; i6++) {
//         if ( statistics[i6].pizzaRating === "awesome" ) {
//             counterAwesome++;
//         } else if ( statistics[i6].pizzaRating === "good" ) {
//             counterGood++;
//         } else if ( statistics[i6].pizzaRating === "okay" ) {
//             counterOk++;
//         } else if ( statistics[i6].pizzaRating === "poor") {
//             counterPoor++;
//         }

//     }
//     let pieChartData2 = [
//         {"pizza-opinion": "awesome", "votes": counterAwesome},
//         {"pizza-opinion": "good", "votes": counterGood},
//         {"pizza-opinion": "okay", "votes": counterOk},
//         {"pizza-opinion": "poor", "votes": counterPoor}
//     ];


//     let svg2         = dimple.newSvg ( "#chartContainer", 300, 300 ); /*create pieChart for prizeRatings with dimple js*/
//     let chart2       = new dimple.chart( svg2, pieChartData2 );
//     chart2.addMeasureAxis( "p", "votes" );
//     chart2.addSeries( "pizza-opinion", dimple.plot.pie );
//     chart2.addLegend(235, 10, 90, "100%", "left");
//     chart2.draw( );
// }
