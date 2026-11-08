//* Abstraction: every employee must define how their pay is calculated.

abstract class Employee {

constructor(
public name: string,
protected _baseSalary: number) {}

get baseSalary(): number {
    return this._baseSalary
}

// set method: give me access to modify the private info
set baseSalary(newSalary: number) {
    if(newSalary < 0) {
        throw new Error("Salary cannot be negative value")
    }
    this._baseSalary = newSalary;
}

abstract calculatePay(taxRate: number): number;
// abstract entryTime(): string  //* we must have to implement this to its every child class 

}

class Manager extends Employee {
    calculatePay() {
        return this.baseSalary + 5000;
    }
}

class Developer extends Employee {
    calculatePay(taxRate: number) {
        return this.baseSalary + 3000 - this.baseSalary * taxRate;
    }
}

const developer = new Developer("Sagor", 30000);
console.log(developer.calculatePay(.03));
