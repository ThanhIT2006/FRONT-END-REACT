"use strict";
function convertToNumber(value) {
    const num = Number(value);
    return isNaN(num) ? null : num;
}
function add(a, b) {
    const num1 = convertToNumber(a);
    const num2 = convertToNumber(b);
    if (num1 === null || num2 === null)
        return "Tham so khong hop le";
    return num1 + num2;
}
function subtract(a, b) {
    const num1 = convertToNumber(a);
    const num2 = convertToNumber(b);
    if (num1 === null || num2 === null)
        return "Tham so khong hop le";
    return num1 - num2;
}
function multiply(a, b) {
    const num1 = convertToNumber(a);
    const num2 = convertToNumber(b);
    if (num1 === null || num2 === null)
        return "Tham so khong hop le";
    return num1 * num2;
}
function divide(a, b) {
    const num1 = convertToNumber(a);
    const num2 = convertToNumber(b);
    if (num1 === null || num2 === null || num2 === 0)
        return "Tham so khong hop le";
    return num1 / num2;
}
console.log(add(5, "3"));
console.log(subtract("10", 4));
console.log(multiply("a", 2));
console.log(divide("12", "4"));
console.log(divide(10, 0));
//# sourceMappingURL=BT8.js.map