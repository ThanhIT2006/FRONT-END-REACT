abstract class Person{
    public name:string;
    constructor(name:string){
        this.name = name;
    }
    displayInfo():string{
        return `Name: ${this.name}`;
    }
}
class Student extends Person{
    id:number;
    constructor( id:number, name:string){
        super(name);
        this.id = id;
    }
    displayInfo(): string {
        return `ID: ${this.id}, ${super.displayInfo()}`;
    }
}
class Teacher extends Person{
    subject:string;
    constructor(name:string, subject:string){
        super(name);
        this.subject = subject;
    }
    displayInfo(): string {
        return `${super.displayInfo()}, Subject: ${this.subject}`;
    }
}
const student = new Student(1, "Thanh");
console.log(student.displayInfo());

const teacher = new Teacher("An","Front-end");
console.log(teacher.displayInfo());
