"use strict";
class Encapsulator {
    name;
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
    constructor(name) {
        this.name = name;
    }
}
const encapsulator = new Encapsulator("John");
console.log(encapsulator.name);
/*
- The Encapsulator class is the container that hides information.
- By default, a field will be public unless otherwise specified.
- Use getters and setters to INDIRECTLY expose access to the 'name' field outside the class.
- U
*/ 
