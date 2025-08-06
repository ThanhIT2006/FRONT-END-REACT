function checkElement(numbers=[1, 2, 3, 4, 5], element=3) {
    if (numbers.includes(element)) {
        return true;
    } else {
        return false;
    }
}
console.log(checkElement([1, 2, 3, 4, 5], 3));
console.log(checkElement([1, 2, 3, 4, 5], 6));