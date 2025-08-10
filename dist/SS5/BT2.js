class Student {
    id;
    age;
    email;
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
    speak() {
        console.log(`Student ID: ${this.id}, Age: ${this.age}, Email: ${this.email}`);
    }
}
let students = [new Student(1, 20, "student1@example.com")];
for (let student of students) {
    student.speak();
}
export {};
//# sourceMappingURL=BT2.js.map