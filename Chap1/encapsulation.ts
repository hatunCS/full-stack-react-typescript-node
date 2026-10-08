
/*
class Encapsulator {
    private name: string;

    get getName(): string {
        return this.name;

    }
    set setName(name: string) {
        this.name = name;
    }

    constructor(name: string) {
        this.name = name;

    }
}

const encapsulator = new Encapsulator("John");
console.log(encapsulator.name);


- The Encapsulator class is the container that hides information.
- By default, a field will be public unless otherwise specified.
- Use getters and setters to INDIRECTLY expose access to the 'name' field outside the class.
- Trying to use console.log(encapsulator.name); in the above code yields an error because you're trying to access the private "name" field from outside the class.
*/

class Encapsulator {
    private name: string;
    get getName(): string {
        return this.name;
    }

    set setName(name: string) {
        this.name = name;
    }
}

const encapsulator = new Encapsulator("John");
console.log(encapsulator.getName);