// 1. Literal Type is a type that represents a specific value or set of values.
type Code = "763";
type Status = "Pending";

const status: Status = "Pending";
const code: Code = "763";
console.log(`Status is ${status}. code is ${code}`);

// 2. basic Union Type
type Identity = string | number | boolean;
const id: Identity = "65";

// 3. Literal-union 
type Role = "admin" | "user" | "guest";
const userRole: Role = "admin";
console.log(`User role is ${userRole}`);

// 4. Object union
type Admin = { id: number, role: "admin", permissions: string[] };
type Member = { id: number, role: "user", plans: string[] };

type User = Admin | Member;
const user: User = { id: 1, role: "admin", permissions: ["read", "write"] };
console.log(user);

// union type is a type that represents a value that can be one of several types. It is denoted by the | (pipe) symbol.