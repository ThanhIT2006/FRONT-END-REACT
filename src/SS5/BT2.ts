class Student {
    id:number;
    age:number;
    email:string;
    constructor(id:number, age:number, email:string) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
    speak() {
        console.log(`Student ID: ${this.id}, Age: ${this.age}, Email: ${this.email}`);
    }
}
let students: Student[] = [new Student(1, 20, "student1@example.com")];
for (let student of students) {
    student.speak();
}