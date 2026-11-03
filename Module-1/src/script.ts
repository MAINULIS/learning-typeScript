/* tsc stands for TypeScript Compiler.
   1. tsc --init: Initializes a new TypeScript project.
   2.tsc
   3. stc --watch: Watches for changes in TypeScript files and automatically compiles them to JavaScript.
 */

// typeScript is a superset of JavaScript that adds static typing to the language. It allows developers to catch errors at compile time rather than at runtime, making it easier to write and maintain large codebases.
let myString: string = "Hello, TypeScript!";
let myNumber: number = 42;
let myBoolean: boolean = true;
let mySymbol: symbol = Symbol("mySymbol");
let myBigInt: bigint = 9007199254740991n;
let myArray: number[] = [1, 2, 3, 4, 5];
let myTuple: [string, number] = ["Hello", 42];
let myObject: { name: string; age: number } = { name: "John", age: 30 };


const addTwo = (a: number, b: number) => {
  return a + b;
};
console.log(addTwo(333, 43));

// Array and Tuple readonly modifier 

// const arr: Array<string> = ["programming","hero"];
const arr: string[] = ["programming","hero"];
const numArr: number[] = [3, 3, 5];

// tuple is a fixed-length array where each element can have a different type.
const rajLatLong: readonly [number, number] = [24.374, 88.6011];
// rajLatLong.push(34) // we cannot push new elements to a readonly tuple.

// Optional(?), default and rest parameters(...args) in TypeScript
// 1. Optional(?)
const concatName =(firstName:string, lastName?:string) => {
  if(!lastName){
    return firstName;
  }
  return firstName + " " + lastName;
};

console.log(concatName("Mainul"));

// 2. Default
const greetings = (fullName:string, greeting = "Hello")=> {
  console.log(`${greeting} ${fullName}`)
}

greetings("Mainul");

// 3. Rest parameters(...args)
// reduce 

const sumAll = (...numbers:number[]) => {
 return numbers.reduce((acc, current) => acc + current, 0);
}

console.log(sumAll(1, 2, 3, 4, 5)); // returns 15

const logUserInfo = (...args: [name: string, age: number, isActive: boolean]) => {
  const [name, age, isActive] = args;
  console.log(`Name: ${name}, Age: ${age}, Is Active: ${isActive}`);
}

logUserInfo("Mainul", 25, true); 


// Object type, type alias and interface in TypeScript

// const user: {
// name: string;
// age: number;
// isActive: boolean;
// action: () => void;
// badges: string[];
// } = {
// name: "Mainul",
// age: 25,
// isActive: true,
// action: () => console.log("User is active"),
// badges: ["Beginner", "Intermediate"]
// };

// type alias
type address = {
  streetName: string;
  holdingNumber: number;
}

type TUser = {
name: string;
age: number;
isActive: boolean;
action: () => void;
badges: string[];
address: address;
}

// interface: most of the time we use interface instead of type alias because interface can be extended and merged.
interface IUser {
name: string;
age: number;
isActive: boolean;
action: () => void;
badges: string[];
}

const user:TUser = {
name: "Mainul",
age: 25,
isActive: true,
action: () => console.log("User is active"),
badges: ["Beginner", "Intermediate"],
address: {
  holdingNumber: 123,
  streetName: "Main Street"
}
};