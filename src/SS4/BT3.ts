type A ={name:string, age:number, email:string};
type B = {name:string, age:number, email:string};
type C = {name:string, age:number, email:string};
type D=A&B&C;
const student:D = {
    name: "Nguyen Ngoc Thanh",
    age: 20,
    email: "nguyenngocthanh@gmail.com"
};
console.log(`Ten toi la: ${student.name}, toi ${student.age} tuoi va email cua toi la: ${student.email}`);
