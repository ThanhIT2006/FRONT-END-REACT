class Vehicle {
    protected name: string;
    protected speed: number;
    protected id: number;
    constructor(name: string, speed: number, id: number) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(): void {
        this.speed -= 7;
    }
    speedUp(): void {
        this.speed += 10;
    }
    showSpeed(): number {
        return this.speed;
    }
    showInfo(): string {
        return `Name: ${this.name}, Speed: ${this.speed}, ID: ${this.id}`;
    }
} 

class Bicycle extends Vehicle {
    private gear: number;
    constructor(name: string, speed: number, id: number, gear: number) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo(): string {
        return `${super.showInfo()}, Gear: ${this.gear}`;
    }
}

const bike = new Bicycle("Mountain Bike", 25, 1, 15);
console.log(bike.showInfo());
bike.speedUp();
console.log("After speed up:", bike.showSpeed());
bike.slowDown();
console.log("After slow down:", bike.showSpeed());
