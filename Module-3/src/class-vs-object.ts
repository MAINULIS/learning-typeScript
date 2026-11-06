// ! Object-Oriented Programming (OOP) is a programming paradigm that organizes software design around objects and data rather than functions and logic. A class is a template or blueprint that defines what properties and behaviors an object will have.

// interface Employee {
//     name: string,
//     baseSalary: number,
// }
// const employee: Employee = {
//     name: "Mainul",
//     baseSalary: 3363,
// };

// const employee2:Employee = {
//     name: "Musab",
//     baseSalary: 3222,
// }

// OOP --> Class

class Employee {
name: string;
baseSalary: number;

constructor(name: string, baseSalary: number) {
this.name = name;
this.baseSalary = baseSalary
}
}


const employee = new Employee("mainul", 33033);
const employee2 = new Employee("Musta", 28653);

// console.log(employee, employee2);
// console.log(employee instanceof Employee);