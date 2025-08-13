function generic(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
const objA = { name: "Thanh", age: 18 };
const objB = { job: "student" };
const combined = generic(objA, objB);
console.log(combined);
export {};
//# sourceMappingURL=BT4.js.map