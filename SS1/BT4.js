function checkParity(a) {
    if (typeof a !== 'number' || isNaN(a)) {
        return `${a} is not a number`;
    }

    if (a % 2 === 0) {
        return `${a} is an even number`;
    } else {
        return `${a} is odd`;
    }
}
console.log(checkParity("a"));
console.log(checkParity(10));
console.log(checkParity(7));