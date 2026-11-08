// * Polymorphism: difference employees respond differently to the same method call.

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

// set method: give me access to modify the private info
set baseSalary(newSalary: number) {
    if(newSalary < 0) {
        throw new Error("Salary cannot be negative value")
    }
    this._baseSalary = newSalary;
}

calculatePay(taxRate: number) {
    return this.baseSalary - this.baseSalary * taxRate
}

}

class Manager extends Employee {
    override calculatePay() {
        return this.baseSalary + 5000
    }
}

class Developer extends Employee {
constructor(
name: string,
_baseSalary: number,
public type: string,
) {
    super(name, _baseSalary)
}

override calculatePay(taxRate: number) {
        return this.baseSalary + 7000 - this.baseSalary * taxRate
    }
}

const employee = new Employee("Momin", 30000);
const manager = new Manager("Rana", 50000)
const developer = new Developer("Mainul", 70000, "Full-stack")


console.log(employee.calculatePay(.32));
console.log(manager.calculatePay());

console.log(`${developer.name} is a ${developer.type} developer. He earns ${developer.calculatePay(0.25)}`);