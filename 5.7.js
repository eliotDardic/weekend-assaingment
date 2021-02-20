function shortestWord(str) {
    words = str.split(" ").sort((a, b) => a.length - b.length);
    return words[0]
}

function shortestWordLength(str) {
    words = str.split(" ").sort((a, b) => a.length - b.length);
    return words[0].length
}

console.log("Shortest word of 'I study JavaScript':", shortestWord("I study JavaScript"));
console.log("Shortest word lenght of 'I study JavaScript':", shortestWordLength("I study JavaScript"));
