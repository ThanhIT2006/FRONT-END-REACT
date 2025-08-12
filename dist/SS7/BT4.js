class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        return `Name: ${this.name}`;
    }
}
class Student extends Person {
    id;
    constructor(id, name) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        return `ID: ${this.id}, ${super.displayInfo()}`;
    }
}
class Teacher extends Person {
    subject;
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        return `${super.displayInfo()}, Subject: ${this.subject}`;
    }
}
const student = new Student(1, "Thanh");
console.log(student.displayInfo());
const teacher = new Teacher("An", "Front-end");
console.log(teacher.displayInfo());
export {};
//# sourceMappingURL=BT4.js.map