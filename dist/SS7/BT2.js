class Vehicle {
    name;
    speed;
    id;
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown() {
        this.speed -= 7;
    }
    speedUp() {
        this.speed += 10;
    }
    showSpeed() {
        return this.speed;
    }
    showInfo() {
        return `Name: ${this.name}, Speed: ${this.speed}, ID: ${this.id}`;
    }
}
class Bicycle extends Vehicle {
    gear;
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo() {
        return `${super.showInfo()}, Gear: ${this.gear}`;
    }
}
const bike = new Bicycle("Mountain Bike", 25, 1, 15);
console.log(bike.showInfo());
bike.speedUp();
console.log("After speed up:", bike.showSpeed());
bike.slowDown();
console.log("After slow down:", bike.showSpeed());
export {};
//# sourceMappingURL=BT2.js.map