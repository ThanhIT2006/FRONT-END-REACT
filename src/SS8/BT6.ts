function findElement<T>(arr: T[],value:T): T | undefined {
    return arr.find(item => item === value);
}
console.log(findElement([1, 2, 3, 4, 5], 3));
console.log(findElement([1, 2, 3, 4, 5], 6));

