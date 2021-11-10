console.log("Welcome to TextUtils.\nTO  CONTRIBUTE OR KNOW MORE ABOUT THIS PROJECT GO TO:https://github.com/BGSharathChandra/TextUtils-GUI");

// This Function Converts the Text to Upper Case
function ctuppercase() {
    // Getting the Text
    let texte = document.getElementById("text");
    let text = document.getElementById("text").value;
    let texto = text.toUpperCase();
    texte.value = texto;
}

// This Function Converts the Text to Lower Case
function ctlowercase() {
    // Getting the Text
    let texte = document.getElementById("text");
    let text = document.getElementById("text").value;
    let texto = text.toLowerCase();
    texte.value = texto;
}

// This Function Removes Puctuation's from the Text
function removepunc() {
    let texte = document.getElementById("text");
    let text = document.getElementById("text").value;
    rmovedpunctxt = text.replace(/[[.,\/#!$%\^&\*;:{}=\-_`~('")]/g, "")
    texte.value = rmovedpunctxt;
}

// This Function Removes all Lines in the Text
function removealines() {
    let texte = document.getElementById("text");
    let text = document.getElementById("text").value;
    texte.value = text.split("\n");
}

// This Function Removes Extra Spaces in the Text
function removeextraspac() {
    let texte = document.getElementById("text");
    let text = document.getElementById("text").value;
    texte.value = text.replace(/\s+/g, " ");
}


// This Function Clear's the Text
function cleartxt() {
    let texte = document.getElementById("text");
    texte.value = "";
}

