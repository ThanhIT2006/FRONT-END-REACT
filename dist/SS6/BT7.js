class Student {
    id;
    name;
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    setName(newName) {
        this.name = newName;
    }
}
class AllStudent {
    students;
    constructor() {
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    getAllStudents() {
        return [...this.students];
    }
    removeStudentById(id) {
        const idx = this.students.findIndex(s => s.getId() === id);
        if (idx !== -1) {
            return this.students.splice(idx, 1)[0];
        }
        return undefined;
    }
}
class Classroom {
    students;
    constructor() {
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    showStudents() {
        if (this.students.length === 0) {
            console.log("(Khong co hoc sinh)");
            return;
        }
        this.students.forEach(s => console.log(`Ma: ${s.getId()}, Ten: ${s.getName()}`));
    }
    addStudentInClass(id, allStudent) {
        const student = allStudent.removeStudentById(id);
        if (student) {
            this.addStudent(student);
        }
    }
    removeStudent(id, allStudent) {
        const idx = this.students.findIndex(s => s.getId() === id);
        if (idx !== -1) {
            const removed = this.students.splice(idx, 1)[0];
            if (removed !== undefined) {
                allStudent.addStudent(removed);
            }
        }
    }
    editStudent(id, newName) {
        const student = this.students.find(s => s.getId() === id);
        if (student) {
            student.setName(newName);
        }
    }
}
const s1 = new Student("Thanh", 1);
const s2 = new Student("Dung", 2);
const s3 = new Student("Phuong", 3);
const s4 = new Student("Khanh", 4);
const s5 = new Student("Chien", 5);
const s6 = new Student("Huy", 6);
const allStudent = new AllStudent();
[s1, s2, s3, s4, s5, s6].forEach(s => allStudent.addStudent(s));
const classA = new Classroom();
const classB = new Classroom();
classA.addStudentInClass(1, allStudent);
classA.addStudentInClass(2, allStudent);
classA.addStudentInClass(3, allStudent);
classB.addStudentInClass(4, allStudent);
classB.addStudentInClass(5, allStudent);
classB.addStudentInClass(6, allStudent);
console.log("\nLop A truoc khi thay doi:");
classA.showStudents();
classA.removeStudent(2, allStudent);
classA.editStudent(3, "Minh");
console.log("\nLop A sau khi thay doi:");
classA.showStudents();
export {};
//# sourceMappingURL=BT7.js.map