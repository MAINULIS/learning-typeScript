// * typeof
// array, object, null --> ts treat as Object
let x = [45, 54];
console.log(typeof (x)); // object

// * type guard
const print = (value: string | number) => {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        return value;
    }
}

console.log(print('df'));

// * truthiness
type User = {
    name: string,
    address?: {
        street: string
    };
} | null;

const loggedUser: User = {
    name: "Mainul",
    address: {
        street: "33-road"
    },
}

const showAddress = (user: User) => {
    if (user && user.address) {
        console.log(user.address.street);
        return;
    }

    throw new Error("User not found!")
}

// * some caveat of type Guard

// const printAll = (x: string | string[] | null) => {
//     if (x && typeof x == "object") {
//         for( let str of x){
//             console.log(str);
//         }
//     } else if (typeof x == "string") {
//         console.log(x);
//     } else {
//         console.log("");
//     }
// };

// printAll(null)

// * equality

const compare = (x: number | string, y: number | boolean) => {
    if (x == y) {
        console.log(x, y);
    }
}

const printAll = (x: string | string[] | null) => {
    if (x !== null) {
        if (typeof x == "object") {
            for (let str of x) {
                console.log(str);
            }
            return;
        }
        console.log(x);
        return;
    }
    console.log("");
}

printAll("ddfd");

// * "in" operation
type Bird = { fly: () => void };
type Fish = { swim: () => void };

const move = (animal: Bird | Fish) => {
    if ("fly" in animal) {
        animal.fly();
        return;
    }
    animal.swim();
}

// * instanceOf check
// const date = new Date();
// const err = new Error();

// console.log(date instanceof Error);
// console.log(err instanceof Error);

const showDate = (x: Date | string) => {
    if(x instanceof Date) {
        console.log(x.toISOString());
        return;
    }

    const date = new Date(x);
    console.log(date.toISOString());

};

// showDate(new Date("12-15-1972"));
showDate("12-15-1972") 


//  * discrimination union
interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number;

}

const getArea = (shape: Circle | Square) => {
    if(shape.kind == "circle") {
        console.log(shape.radius);
    } else {
        console.log(shape.sideLength);
    }
}

