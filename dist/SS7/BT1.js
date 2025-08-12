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
        return `Name: ${this.name}, Company: ${this.company}, Phone: ${this.phone}`;
    }
}
class Manager extends Employee {
    teamSize;
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        return `${super.printInfo()}, Team Size: ${this.teamSize}`;
    }
}
const emp = new Employee("John Doe", "Tech Corp", "1234567890");
const manager = new Manager("Jane Smith", "Tech Corp", "0987654321", 5);
console.log(emp.printInfo());
console.log(manager.printInfo());
export {};
//# sourceMappingURL=BT1.js.map