// * typeof
// array, object, null --> ts treat as Object
let x = [45, 54];
console.log(typeof(x)); // object

// * type guard
const print = (value: string | number) => {
    if(typeof value === "string"){
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

const loggedUser: User =  {
    name: "Mainul",
    address: {
        street: "33-road"
    },
}

const showAddress = (user:User) => {
    if (user && user.address) {
        console.log(user.address.street);
        return;
    }

    throw new Error("User not found!")
}

// * equality

// * "in" operation

// * instanceOf check

//  * discrimination union
