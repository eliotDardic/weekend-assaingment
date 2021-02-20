function accum(str) {
    result = ""
    for(var i = 0; i < str.length; i++) {
        result += str[i].toUpperCase() + str[i].toLowerCase().repeat(i) + "-"
    }
    return result;
}

console.log("accum(abcd) -> ", accum("abcd")); // "A-Bb-Ccc-Dddd"
console.log("accum(RqaEzty) -> ", accum("RqaEzty"));
console.log("accum(cwAt) -> ", accum("cwAt"));
