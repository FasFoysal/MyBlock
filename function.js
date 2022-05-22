"use strict"
// text pest copy
function functionText() {

    let popText = prompt("What is your text");

    return popTex(popText);
}

function popTex(popText) {
    // Store
    localStorage.lastname = popText;
    // Retrieve
    let stor = document.getElementById("textIs").innerHTML = localStorage.lastname;
    return stor;
}
let a = "";
document.getElementById("textIs").innerHTML = a + stor;