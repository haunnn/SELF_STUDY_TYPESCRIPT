// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];               // assign type as string array
//     role: [number, string]           // assign type as tuple
// } = {
//     name: "yoojin",
//     age: 26,
//     hobbies: ["Sports", "Cooking"],
//     role: [2, "developer"]
// };

// person.role.push("author");
// person.role[1] = 10;                 // Error !!!!

// for (const hobby of person.hobbies) {
//     console.log(hobby.toUpperCase());
// }


// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
enum Role { ADMIN, READ_ONLY, AUTHOR};
const person = {
    name: "haun",
    age: 25,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};


console.log(person.name);