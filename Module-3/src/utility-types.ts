// * Utility types

// * partial

interface User {
    id: string;
    name: string;
    email: string;
}

type PartialUser = Partial<User>;
const updateProfile = (id:string, date: Partial<User>) => {
 // backend logic
};

updateProfile("j3d", {name: "Tanbin"});

// * Required

interface Config {
    apiKey?: string;
    timeout?: number;
}

const initialize = (config: Required<Config>) => {
  // logic
}

initialize({apiKey: "okk", timeout: 30000});

// * Pick

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

type ProductPreview = Pick<Product, "name" | "description">

const preview: ProductPreview = {
    name: "Lalu",
    description: "edjf"
};


// * Omit

interface Employee {
    id: number;
    name: string;
    salary: number;
    nid: string;
};

type PublicEmployee = Omit<Employee, "salary" | "nid">
const directoryEntry: PublicEmployee = {
    id: 32,
    name: "Joy",
}

// * Record
type Environment = "development" | "staging" | "Production";

const apiUrls: Record<Environment, string> = {
    development: "http://localhost:3000",
    staging: "http://staging.api.com",
    Production: "https://api.com",
}