function divisibleByTwo<T>(arr: T[]) {
    return arr.find((item) => typeof item === 'number' && item % 2 === 0);
}

console.log(divisibleByTwo([1, 2, 3, 4, 5]));

