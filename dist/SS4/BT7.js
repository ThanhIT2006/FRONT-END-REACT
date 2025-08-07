function processInput(input) {
    if (typeof input === 'string') {
        let isNumber = true, letters = 0;
        for (let c of input) {
            if (c >= '0' && c <= '9')
                continue;
            isNumber = false;
            if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z'))
                letters++;
        }
        if (isNumber)
            console.log(Number(input) ** 2);
        else
            console.log(`${letters} ký tự chữ cái`);
    }
    else if (typeof input === 'number') {
        if (input < 2 || input % 1 !== 0) {
            return console.log("Không phải số nguyên tố");
        }
        for (let i = 2; i * i <= input; i++)
            if (input % i === 0) {
                return console.log("Không phải số nguyên tố");
            }
        console.log("Là số nguyên tố");
    }
    else {
        console.log(input ? "Giá trị là true - tiến hành xử lý" : "Giá trị là false - dừng xử lý");
    }
}
processInput("123");
processInput("abc123!");
processInput(7);
processInput(9);
processInput(true);
processInput(false);
export {};
//# sourceMappingURL=BT7.js.map