// * Inheritance: a Manager is an employee with an additional responsibility.

class Employee {

constructor(
public name: string,
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

describe(): string {
    return `${this.name} earns ${this.baseSalary}`
}

}

class Manager extends Employee {
    teamMemberNumber: number;
    constructor(name: string, _baseSalary: number, teamMemberNumber: number) {
        super(name, _baseSalary)
        this.teamMemberNumber = teamMemberNumber
    }
}

const employee = new Employee("Mir", 27000);
console.log(employee);

const manager = new Manager("Musta", 8333, 30)
