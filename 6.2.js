function findDuplicates(str) {
    duplicates = 0
    strLowercase = str.toLowerCase()
    for(var i = 0; i < strLowercase.length; i++) {
        for(var j = i+1; j < strLowercase.length; j++) {
            if(strLowercase[j] == strLowercase[i]) {
                duplicates++;
                break;
            }
        }
    }
    return duplicates;
}

// console.log("duplicates of abcde: ", findDuplicates("abcde"));
console.log("duplicates of Indivisibilities: ", findDuplicates("Indivisibilities"));
