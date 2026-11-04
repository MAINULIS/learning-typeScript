// * 1. Top types (unknown, any) 
let anyValue: any = "Hello, World!";
anyValue.toUpperCase(); // No error, but may cause runtime issues
anyValue = 43; // No error, but may cause runtime issues

const unknownValue: unknown = "let me know";
// unknownValue.toUpperCase(); // Error: Object is of type 'unknown'
// unknownValue.length; // Error: Object is of type 'unknown'

// * 2. Core types (string, number, boolean)
let topValue: unknown; // top type

const num:number = 38;
topValue = num; // we can reassign to the top and same branch
let zero:void
topValue = zero;

type Status = "pending" | "success"
let someStatus: string;
let status: Status = "pending";
someStatus = status

// ! we can't reassign to other branches
// const str: string = "ddf";
// zero = str; // not assignable

//  * 2.1 Literal types (string literal, number literal)

// * 3. Unit type (void)
const greeting = () => {
    console.log("Okay");
}
 greeting();

// * 3.1. Sub-type of unit type( undefined)
const moreGreeting = () => {
    console.log("Hi");
    return undefined
}
const isGreeting = moreGreeting();
console.log(isGreeting);

// * 4. Nullish types (null)
interface User {
    name: string,
    email: string
}
type LoggedUser = User | null;
const currentUser:LoggedUser = null;


// * 5. Bottom type (never)

const showError = (msg: string) => {
    throw new Error(msg);
};

// const x:string = showError("password leak")