class Vehicle {
    public name:string;
    protected year: number;
    private company: string;
    readonly id:number;
    constructor(name:string, year:number, company:string, id:number) {
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