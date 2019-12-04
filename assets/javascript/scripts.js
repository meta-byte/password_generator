//DOM Elements
var uppercaseElement = document.querySelector('#uppercase');
var lowercaseElement = document.querySelector('#lowercase');
var numbersElement = document.querySelector('#numbers');
var symbolsElement = document.querySelector('#symbols');
var outputElement = document.querySelector('#passwordBox');
var generateElement = document.querySelector('#generateButton');
var clipboardElement = document.querySelector('#clipboardButton');

//Randomizing Functions Defined
function randomLowercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomSymbol() {
    var symbols = '!@#$%^&*(){}[]=<>/'
    return symbols[Math.floor(Math.random() * symbols.length)];
}


// Array for storing functions?
var randomFunctions = [randomLowercase(), randomUppercase(), randomNumber(), randomSymbol()]


//Generate Password Functions


function clear(outputElement) {
    outputElement.value = "";
}

var newPassword

function generatePassword() {
    var newPassword = ""
    var length = 10
    for (var i = 0; i < length; i++) {
        newPassword += randomLowercase()
        newPassword += randomUppercase()
        newPassword += randomNumber()
        newPassword += randomSymbol()

    }

    newPassword = newPassword.slice(30)
    outputElement.value = newPassword
    console.log(newPassword)
}


//Generate Button Click Function
generateElement.addEventListener("click", function () {
    clear(outputElement);
    generatePassword();
})

// generatePassword()
//Copy to Clipboard
