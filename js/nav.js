//TOPNAV RESPONSIVE
function myFunction() {
    const x = document.getElementById("myMenu");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}