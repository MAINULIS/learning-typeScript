// * Promise
interface User {
    name:string;
    role:string
}

interface ApiResponse<T> {
    data: T;
    success: boolean;
    statusCode: number;
    message: string
}

const fetchUser = async(): Promise <User | undefined> => {
   try {
     const res = await fetch("/api/v1/some-endpoint");
    const data = (await res.json()) as ApiResponse<User>;

    if(!res.ok || !data.success) {
        throw new Error(`Failed fetch user data: ${data.message}`)
    }
    return data.data;
   }
   catch (error) {
    if(error instanceof Error) {
        console.error(error.message);
    } else {
        console.log("something went wrong!");
    }
   }
}

const userData = await fetchUser();

if (userData) {
    console.log(userData.name);
}

// * The instanceof operator in TypeScript is a runtime operator adopted from JavaScript that checks if an object's prototype chain contains the prototype property of a specific class or constructor function.
class Dog {
  bark() { return "Woof!"; }
}

class Cat {
  meow() { return "Meow!"; }
}

function makeAnimalSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    // TypeScript automatically narrows 'animal' to the Dog class here
    return animal.bark(); 
  } else {
    // TypeScript knows it must be a Cat here
    return animal.meow();
  }
}

// const dogSound = makeAnimalSound(new Dog());
// console.log(dogSound);
