function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
const person = { name: "Alice" };
const job = { role: "Developer" };
const merged = mergeObjects(person, job);
console.log(merged);
export {};
//# sourceMappingURL=BT3.js.map