class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get widthValue() {
        return this.width;
    }
    get heightValue() {
        return this.height;
    }
    setWidth(width) {
        this.width = width;
    }
    setHeight(height) {
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}
const rectangle = new Rectangle(5, 10);
console.log(`Width: ${rectangle.widthValue}, Height: ${rectangle.heightValue}, Area: ${rectangle.getArea()}, Perimeter: ${rectangle.getPerimeter()}`);
rectangle.setWidth(7);
rectangle.setHeight(12);
console.log(`Sau khi cap nhat: Width: ${rectangle.widthValue}, Height: ${rectangle.heightValue}, Area: ${rectangle.getArea()}, Perimeter: ${rectangle.getPerimeter()}`);
export {};
//# sourceMappingURL=BT5.js.map