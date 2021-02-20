function maskify(str) {
    length = str.length
    if (length < 4) {
        return str
    }
    return '#'.repeat(length - 4) + str.slice(length - 4);
}

console.log("maskify(Dermatoglyphics) = ", maskify("Dermatoglyphics"));
console.log("maskify(aba)) = ", maskify("aba"));
console.log("maskify(moOse)) = ", maskify("moOse"));
