// Type alias vs Interface in TypeScript

//? Interface: is generally used to define the shape of an object.To makes like Union Type is not possible. 

//? Type alias: can be used to define any type, including primitive types, union types, and intersection types.

// TODO: type alias
type ID = number;
//! interface id = number;

type Role = "admin" | "user" | "guest";
//! interface "admin" | "user" | "guest";

interface IUser {
    name: string;
    id: ID;
    role: "admin" | "user";
}

const user: IUser = {
    name: "Mainul",
    id: 33,
    role: "admin"
}

// type extension using "&"
type Vechile = {
    brand: string;
    model: string;
}

type Car = Vechile & {
    year: number;
}

const newCar: Car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2029
}
console.log(newCar);

//! merge is not possible in type alias.
// type IPhone = {
//     brand: string;
// }
// type IPhone = {
//     model: string;
//     year: number;
// }

// Todo: interface is generally used to define the shape of an object. It can be extended and merged.

interface Animal {
    name: string;
    breed: string;
}

interface Cat extends Animal {
    isIndoor: boolean;
}

const cat: Cat = {
    name: "Whiskers",
    breed: "Felix Catus",
    isIndoor: true
}

//* Interface merged

interface IPhone {
    brand: string;
}
interface IPhone {
    model: string;
    year: number;
}

const myPhone: IPhone = {
    brand: "Apple",
    model: "iPhone 14",
    year: 2029
}
console.log(myPhone);