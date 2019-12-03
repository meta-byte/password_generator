//DOM Elements
var uppercaseElement = document.getElementById('uppercase');
var lowercaseElement = document.getElementById('lowercase');
var numbersElement = document.getElementById('numbers');
var symbolsElement = document.getElementById('symbols');
var outputElement = document.getElementById('passwordBox');
var generateElement = document.getElementById('generateButton');
var clipboardElement = document.getElementById('clipboardButton');

//Randomizing Functions Defined
function randomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomSymbol() {
    var symbol = '!@#$%^&*(){}[]=<>/'
    return symbol[Math.floor(Math.random() * symbol.length)];
}

console.log(randomLower())
console.log(randomUpper())
console.log(randomNumber())
console.log(randomSymbol())

//Generate Button Click Function




//Generate Password Function
