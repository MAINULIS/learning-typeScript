// * Inheritance: a Manager is an employee with an additional responsibility.

//* Private Modifier Vs Protected Modifier
//? 1. Private --> is strict. We cant access from other class weather it is child class
//? 2. Protected--> we can access the property from his (descendant) child class component also.


class Employee {

constructor(
public name: string,
protected _baseSalary: number) {}

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
    // teamMemberNumber: number;
    // constructor(name: string, _baseSalary: number, teamMemberNumber: number) {
    //     super(name, _baseSalary)
    //     this.teamMemberNumber = teamMemberNumber
    // 
    constructor(
        name: string, 
        _baseSalary: number, 
        public teamMemberNumber: number) {
        super(name, _baseSalary) 
    }

    describeWork(): string {
    return `${this.name} manages ${this.teamMemberNumber} people`
    }

    describeManager(): string {
        return `${this.name} earns ${this._baseSalary}`
    }
}

const employee = new Employee("Mir", 27000);
console.log(employee.describe());

const manager = new Manager("Musta", 8333, 30)
console.log(manager.describeWork());