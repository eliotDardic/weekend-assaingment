const { setDefaultOptions } = require("readline-sync");

function toWeirdCase(str) {
    arr = str.split('')
    for(var i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            arr[i] = arr[i].toUpperCase()
        } else {
            arr[i] = arr[i].toLowerCase()
        }
    }
    return arr.join('')  
}

console.log("toWeirdCase('String') => ", toWeirdCase('String'));    //=> returns "StRiNg"
console.log("toWeirdCase('Weird string case') => ", toWeirdCase('Weird string case'));  //=> returns "WeIrD StRiNg CaSe"

