function isIsogram(str) {
    strLowercase = str.toLowerCase()
    for(var i = 0; i < strLowercase.length; i++) {
        for(var j = i+1; j < strLowercase.length; j++) {
            if(strLowercase[j] == strLowercase[i]) {
                return false;
            }
        }
    }
    return true;
}

console.log("isIsogram(Dermatoglyphics) = ", isIsogram("Dermatoglyphics"));
console.log("isIsogram(aba)) = ", isIsogram("aba"));
console.log("isIsogram(moOse)) = ", isIsogram("moOse"));
