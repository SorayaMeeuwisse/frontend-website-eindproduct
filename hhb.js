/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

//checken of het document goed gelinkt is.
console.log("Hello world");

/*Insturen en bedanken*/
//variabelen opstellen
var stuurIn;
stuurIn = document.querySelector("#insturen");

var h2;
h2 = document.querySelector("#bedankt");

var formulier;
formulier = document.querySelector("form");

//een opdracht aanmaken
function insturen() {
    h2.textContent = "Bedankt voor je inzending! We gaan er meteen naar kijken.";
    //console.log("DANKJE");
    formulier.classList.add("verwijder");
    //zorgt ervoor dat het formulier niet verstuurd wordt. https://www.w3schools.com/jsref/event_preventdefault.asp
    event.preventDefault();
}

//het uitvoeren van de opdracht, met gebruik van een click event. 
stuurIn.addEventListener("click", insturen);
