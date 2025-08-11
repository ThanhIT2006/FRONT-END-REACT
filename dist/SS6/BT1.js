class shape {
    name;
    constructor(name) {
        this.name = name;
    }
    getName() {
        console.log(`Ten Hinh: ${this.name}`);
    }
}
class Rectangle extends shape {
    width;
    height;
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        console.log(`Width: ${this.width}, Height: ${this.height}`);
    }
}
const rect = new Rectangle("Hinh chu nhat", 10, 5);
rect.getName();
rect.getSize();
export {};
//# sourceMappingURL=BT1.js.map