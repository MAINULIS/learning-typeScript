//* Generic type

const wrapInArray = <T>(value: T) => {
    return [value];
}

const stringArr = wrapInArray<string>("ABC"); // best practice
const numberArr = wrapInArray(524);

stringArr.map((item) => item.toUpperCase());
// numberArr.map((item) => item.toUpperCase());


// 
interface User {
    name:string;
    role:string
}

interface Blog {
    title: string;
    description: string;
    date: string;
};

interface ApiResponse<T> {
    data: T;
    success: boolean;
    statusCode: number;
}

type UserResponse = ApiResponse<User>;
type BlogResponse = ApiResponse<Blog>;

const UserInfo: UserResponse = {
    data:{
        name: "Rana",
        role: "Admin"
    },
    statusCode: 434,
    success: true,
}

console.log(UserInfo);