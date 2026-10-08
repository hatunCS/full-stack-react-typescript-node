"use strict";
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    canDrive() {
        console.log("The user's name is ", this.name);
        if (this.age >= 16) {
            console.log(this.name, " is allowed to drive");
        }
        else {
            console.log(this.name, " is not old enough to drive");
        }
    }
}
const john = new Person("John", 15);
john.canDrive();
