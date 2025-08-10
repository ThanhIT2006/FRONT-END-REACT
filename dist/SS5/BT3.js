class Employee {
    name;
    company;
    phone;
    constructor(name, company, phone) {
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
export {};
//# sourceMappingURL=BT3.js.map