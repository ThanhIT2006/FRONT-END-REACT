function handleUniontype(value: string | number): void {
    if (typeof value === 'string') {
        console.log(`${value.length} ky tu`);
    } else if (typeof value === 'number' && value % 2 === 0) {
        console.log(`Day la so chan`);
    } else if (typeof value === 'number' && value % 2 !== 0) {
        console.log(`Day la so le`);
    } else {
        console.log('Unknown type');
    }
}
handleUniontype("demo123");
handleUniontype(10);