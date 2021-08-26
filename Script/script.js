console.log("This is the Script");


function ctuppercase() {
    // Getting the Text
    let texte = document.getElementById("text");
    let text = document.getElementById("text").value;
    let texto = text.toUpperCase();
    texte.value = texto;
}

function ctlowercase() {
    // Getting the Text
    let texte = document.getElementById("text");
    let text = document.getElementById("text").value;
    let texto = text.toLowerCase();
    texte.value = texto;
}

function removepunc() {
    let texte = document.getElementById("text");
    let text = document.getElementById("text").value;
    rmovedpunctxt = text.replace(/[[.,\/#!$%\^&\*;:{}=\-_`~('")]/g, "")
    texte.value = rmovedpunctxt;
}


function cleartxt() {
    let texte = document.getElementById("text");
    texte.value = "";
}
