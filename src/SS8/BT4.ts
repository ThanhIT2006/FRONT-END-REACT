function generic<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}
const objA = { name: "Thanh", age: 18 };
const objB = { job: "student" };
const combined = generic(objA, objB);
console.log(combined);

