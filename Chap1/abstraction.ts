interface User { // User interface with empty canDrive function
    name: string;
    age: number;

    canDrive(); //canDrive function is part of the User type.
}

class Person implements User { //'implement' keyword tells TS that 'Person' defines and runs all the members of the 'User' interface.
    name: string;
    age: number;

    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }


    canDrive(){
        console.log("The user's name is ", this.name);

        if (this.age >= 16) {
            console.log(this.name, " is allowed to drive");
        } else {
            console.log(this.name, " is not old enough to drive");
        }
    }
}

const john: User = new Person("John", 15);
john.canDrive();