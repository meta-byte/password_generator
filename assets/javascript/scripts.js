function randomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomSymbol() {
    var symbols = '!@#$%^&*(){}[]=<>/'
    return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(randomLower())
console.log(randomUpper())
console.log(randomNumber())
console.log(randomSymbol())