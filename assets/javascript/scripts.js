//DOM Elements
var uppercaseElement = document.getElementById('uppercase');
var lowercaseElement = document.getElementById('lowercase');
var numbersElement = document.getElementById('numbers');
var symbolsElement = document.getElementById('symbols');
var outputElement = document.getElementById('passwordBox');
var generateElement = document.getElementById('generateButton');
var clipboardElement = document.getElementById('clipboardButton');

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


//For checking what is checked and what isnt?
// var settings = {
//     lower: uppercaseElement.checked,
//     upper: lowercaseElement.checked,
//     num: numbersElement.checked,
//     sym: symbolsElement.checked,
// }


//Generate Button Click Function
generateElement.onclick = function () {
    // outputElement.innerText = newPassword
}


//Generate Password Function
function generatePassword() {
    var length = 10
    var newPassword = ""
    for (var i = 0; i < length; i++) {
        newPassword += randomLowercase()
        newPassword += randomUppercase()
        newPassword += randomNumber()
        newPassword += randomSymbol()

        console.log(newPassword)
    }
}

generatePassword()
//Copy to Clipboard
