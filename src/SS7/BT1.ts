class Employee {
    public name: string;
    protected company: string;
    private phone: string;
    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo(): string {
        return `Name: ${this.name}, Company: ${this.company}, Phone: ${this.phone}`;
    }
}
class Manager extends Employee {
    teamSize: number; 
    constructor(name: string, company: string, phone: string, teamSize: number) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo(): string {
        return `${super.printInfo()}, Team Size: ${this.teamSize}`;
    }
}
const emp = new Employee("John Doe", "Tech Corp", "1234567890");
const manager = new Manager("Jane Smith", "Tech Corp", "0987654321", 5);
console.log(emp.printInfo());
console.log(manager.printInfo());