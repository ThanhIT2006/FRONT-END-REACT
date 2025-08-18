function withDefault(value) {
    if (value === undefined) {
        return "default";
    }
    return value;
}
console.log(withDefault());
console.log(withDefault(42));
console.log(withDefault(true));
console.log(withDefault("Hi"));
export {};
//# sourceMappingURL=BT4.js.map