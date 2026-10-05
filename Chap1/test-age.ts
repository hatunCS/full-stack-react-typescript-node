/*
---------------------------------------------------
function canDrive(usr) {
    console.log("user is", usr.name);

    if (usr.age >= 16) {
        console.log("Allowed to drive");

    } else {
console.log("Too young to drive");
    }
}

const tom = {
    name: "tom"
}

canDrive (tom);
---------------------------------------------------
JavaScript "falsy" behavior
The user's age property is undefined -> Default resolve to false

- Using a for loop to iterate through all user's property key names to check for "age".
 and throw an exception/error handling  to solve this problem is inefficient.
*/

interface User {
    name: string;
    age: number;
}

function canDrive(usr: User) {
    console.log("User's name is ", usr.name);

    if(usr.age >= 16) {
        console.log(usr.name, " is old enough to drive");
    } else {
        console.log(usr.name, " is too young to drive");
    }
}

const tom = {
    name: "tom",
    age: 25
}

canDrive (tom);

/*
Interface in TypeScript is a "contract".
A contract is a type declaration that defines what properties, 
property-types, and methods an object must have.
Contracts don't exist at runtime- it only serves as a guideline at compiling for types.
*/