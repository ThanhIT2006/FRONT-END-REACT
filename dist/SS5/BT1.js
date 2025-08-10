class Vehicle {
    name;
    year;
    company;
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    speak() {
        console.log(`Vehicle Name: ${this.name}, Year: ${this.year}, Company: ${this.company}`);
    }
}
const myCar = new Vehicle("Toyota", 2020, "Toyota Motor Corporation");
myCar.speak();
export {};
//# sourceMappingURL=BT1.js.map