class Employee {
    public name:string;
    protected company:string;
    private phone:number;
    constructor(name:string, company:string, phone:number) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Employee Name: ${this.name}, Company: ${this.company}, Phone: ${this.phone}`);
    }
}
const employees = (new Employee("John Doe", "Tech Corp", 1234567890));
employees.printInfo();