/*
Variable Definitions 
1. cardText: This is the Variable that Holds the Text of the Card div.
2. header: This is the Variable that Holds the Header of the Card div.
3. card: This is the Variable that Holds the Card div.
4. alert: This is the Variable that Holds the Alert div.
5.texto: This is the Variable that Holds the Output of the Functions.

Full Form of the Functions are given above the Function.
*/


// The Code

console.log("Welcome to TextUtils.\nTO  CONTRIBUTE OR KNOW MORE ABOUT THIS PROJECT GO TO:https://github.com/BGSharathChandra/TextUtils-GUI");

let card = document.getElementById("card1") //This is the Entire Card. This Will be manly be ude to change the visibility of the Card.
let header = document.getElementById("card-header1"); //This is the header of the Card.
let cardText = document.getElementById("card-text1");  //This is the div where we will put the the Modified Text.
alert = document.getElementById("alert");

// Function to Change the Text of the Card 
// changetextCardBody Full Form:- changetextCardBody
function changetextCardBody(util, converted, text) {
    // Clearing the Text and the Header
    cardText.innerText = ""; //This is the Value of the Card Text. This is Inside the Function Copy because we must get the Updated Text.
    header.innerText = "";
    card.style.visibility = "visible";
    header.innerText = `${util} ${converted} Text`;
    cardText.innerText = text;
}


// This Function Converts the Text to Upper Case
// ctUpperCase Full Form:- converttoUpperCase
function ctuppercase() {

    // Getting the Text and Converting it to Upper Case
    let text = document.getElementById("text").value;
    let texto = text.toUpperCase();
    
    changetextCardBody("UpperCase", "Converted", texto);
}

// This Function Converts the Text to Lower Case
// ctlowercase Full Form:- converttoLowerCase
function ctlowercase() {
    // Getting the Text
    let text = document.getElementById("text").value;
    let texto = text.toLowerCase();
    changetextCardBody("LowerCase", "Converted", texto);

}

// This Function Removes Puctuation's from the Text
// removepunc Full Form:- removepunctuation  
function removepunc() {
    let text = document.getElementById("text").value;
    rmovedpunctxt = text.replace(/[[.,\/#!$%\^&\*;:{}=\-_`~('")]/g, "")

    changetextCardBody("Punctuation", "Removed", rmovedpunctxt);
}

// This Function Removes all Lines in the Text
//removealines Full Form:- removeAllLines
function removealines() { 
    let text = document.getElementById("text").value;
    texto = text.split("\n");

    changetextCardBody("Lines", "Removed", texto);
}

// Function to Remove Numbers
// removenumbers Full Form:- removenumbers
function removenumbers() {
    let text = document.getElementById("text").value;
    texto = text.replace(/[0-9]/g, "");
    changetextCardBody("Numbers", "Removed", texto);
}

// This Function Removes Extra Spaces in the Text
function removeextraspac() {
    let text = document.getElementById("text").value;
    texto = text.replace(/\s/g, " ");

    changetextCardBody("Extra Spaces", "Removed", texto);
}


// This Function Clear's the Text
function cleartxt() {
    let texte = document.getElementById("text");
    texte.value = "";
}

function copy() {
    let cardTextv = cardText.innerText ; //This is the Value of the Card Text. This is Inside the Function Copy because we must get the Updated Text.
    navigator.clipboard.writeText(cardTextv);
    alert.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success</strong> Your Text has been Copied.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
}