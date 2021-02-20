function longest(str1, str2) {
    str = (str1 + str2).toLowerCase()

    unique = []
    for(var i = 0; i < str.length; i++) {
        if (!unique.includes(str[i])) {
            unique.push(str[i])
        }
    }
    return unique.sort().join('');
}

console.log("longest of xyaabbbccccdefww, xxxxyyyyabklmopq: ", longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
