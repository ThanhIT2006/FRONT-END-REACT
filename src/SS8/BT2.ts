function printMessage<T extends boolean>(value: T): void {
    if (value) {
        console.log("Xin chào");
    } else {
        console.log("Tạm biệt");
    }
}

printMessage(true); 
printMessage(false);
