//DOM Elements
var uppercaseElement = document.querySelector('#uppercase');
var lowercaseElement = document.querySelector('#lowercase');
var numbersElement = document.querySelector('#numbers');
var symbolsElement = document.querySelector('#symbols');
var outputElement = document.querySelector('#passwordBox');
var generateElement = document.querySelector('#generateButton');
var clipboardElement = document.querySelector('#clipboardButton');

//Randomizing fuctions defined
function randomLowercase() {
    var lowers = 'abcdefghijklmnopqrstuvwxyz'

    if (lowercaseElement.checked == true) {
        return lowers[Math.floor(Math.random() * lowers.length)]
    }
    else {
        return ''
    }
}

function randomUppercase() {
    var uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    if (uppercaseElement.checked == true) {
        return uppers[Math.floor(Math.random() * uppers.length)]
    }

    else {
        return ''
    }
}

function randomNumber() {
    var numbers = '0123456789'

    if (numbersElement.checked == true) {
        return numbers[Math.floor(Math.random() * numbers.length)];
    }

    else {
        return ''
    }

}

function randomSymbol() {
    var symbols = '!@#$%^&*(){}[]=<>/'
    if (symbolsElement.checked == true) {
        return symbols[Math.floor(Math.random() * symbols.length)];
    }
    else {
        return ''
    }
}


//Generate Password Functions

function clear(outputElement) {
    outputElement.value = "";
}


var newPassword

function generatePassword() {
    var newPassword = ""
    var length = 10;

    for (var i = 0; i < length; i++) {
        newPassword += randomLowercase()
        newPassword += randomUppercase()
        newPassword += randomNumber()
        newPassword += randomSymbol()
    }

    newPassword = newPassword.slice(0, 10)
    outputElement.value = newPassword
    console.log(newPassword)
    console.log(randomLowercase())
    console.log(randomUppercase())
    console.log(randomNumber())
    console.log(randomSymbol())
}


//Generate Button Click Function
generateElement.addEventListener("click", function () {
    clear(outputElement);
    generatePassword();
})

// generatePassword()
//Copy to Clipboard
