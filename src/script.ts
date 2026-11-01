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