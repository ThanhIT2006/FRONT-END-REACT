type person = {
    name: string,
    age: number,
}
type employee = {
    employeeId: string,
    department: string
}
const staffmember: person & employee = {
    name: "Nguyen Van A",
    age: 30,
    employeeId: "EMP001",
    department: "Ke toan"
};
function printStaffinfo(staffmember: person & employee): void {
    console.log(`${staffmember.name} (${staffmember.age}), Ma nhan vien ${staffmember.employeeId} - Phong:  ${staffmember.department}.`);
    
}
printStaffinfo(staffmember);