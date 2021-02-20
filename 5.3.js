function toCamelCase(str) {
    arr = str.split(/-|_/);

    for(var i = 1; i < arr.length; i++) {
        arr[i] = arr[i].first.toUpperCase() + arr[i].slice(1)
    }

    return arr.join('')
    
}

console.log("toCamelCase('the-stealth-warrior') = ", toCamelCase('the-stealth-warrior'));
console.log("toCamelCase('The_Stealth_Warrior') = ", toCamelCase('The_Stealth_Warrior'));
