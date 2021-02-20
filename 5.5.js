

function initials(str) {
    arr = str.split(' ')
    return arr[0].charAt(0).toUpperCase() + '.' + arr[1].charAt(0).toUpperCase()
}

console.log("initials of Sam Harris: ", initials('Sam Harris'));

