class Vehicle {
    name;
    year;
    company;
    id;
    constructor(name, year, company, id) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    printInfo() {
        console.log(`Vehicle Name: ${this.name}, Year: ${this.year}, Company: ${this.company}, ID: ${this.id}`);
    }
}
const vehicle = new Vehicle("Toyota Camry", 2020, "Toyota", 101);
vehicle.printInfo();
export {};
//# sourceMappingURL=BT4.js.map