function trimmer(str) {
    return str.slice(1, str.length - 1);
}

console.log("trimmer(abcd) -> ", trimmer("abcd"));
console.log("trimmer(RqaEzty) -> ", trimmer("RqaEzty"));
console.log("trimmer(cwAt) -> ", trimmer("cwAt"));
