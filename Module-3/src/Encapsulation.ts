// * Encapsulation in Object-Oriented Programming (OOP) with TypeScript is the practice of bundling data (properties) and behavior (methods) into a single unit—such as a class—while restricting direct external access to the internal state

// Encapsulation: protect a state and change it through methods.

// * Access Modifier
//? public
//? private
//? protected
//? readonly

class Employee {

constructor(name: string,
private _baseSalary: number) {}

get baseSalary(): number {
    return this._baseSalary
}

get salaryWithBonus():number {
    return this._baseSalary + 5000
}

// set method give me access to modify the private info
set baseSalary(newSalary: number) {
    if(newSalary < 0) {
        throw new Error("Salary cannot be negative value")
    }
    this._baseSalary = newSalary;
}

}

const employee = new Employee("mainul", 33033);
const employee2 = new Employee("Musta", 28653);

// employee.baseSalary = 4 //* using get method i can only see the private info. can't modify
// employee.baseSalary = -33
console.log(employee.salaryWithBonus);

