# [Full-Stack React, TypeScript, and Node Notes]

## Overview:

The following Repo contains my workthrough of the textbook including my own personal notes.

## 1. TypeScript:

### Dynamic vs. Static Typing

- By default, TS has the strictest type checks enabled. Example disable command:

```typescript
tsc test-age.ts --noImplicitAny false
```

- Disable strict type enforcement and trying to add a string and integer will concatenate.'
- Declare a variable's type:

```typescript
let a: number = 5;
```

- Leaving an undefined variable will default to false.'
- Interface in TypeScript is a "contract". Example:

```typescript
interface User {
  name: string;
  age: number;
}
```

- A contract is a type declaration that defines what properties, property-types, and methods an object must have.
- Contracts don't exist at runtime- it only serves as a guideline at compiling for types.
- Static typing removes ambiguity from code (both to compiler and other devs).

- JavaScript's implementation of OOP is limited.
- TS was created as an added layer ontop of JS that adds more functionality.

### Encapsulation - (Information Hiding)

- Data is put in a container-like **Class** to prevent anything outside that container from viewing/modifying the data.
- Access the data via class-provided methods.
- In TS, the syntax for controlling info access is called access **modifiers**.
- Private access modifiers only allow members to be access by code within the class
- Public modifiers allow any code (inside or out) to modify the class's modifiers.
- **It is (now) possible in JS to create accessors. This book prefers using JS to hide members instead of the TS method.**
- A field in a class will be public by default unless otherwise specified.
- The following code will throw an error because you're trying to access a class's private field:

```typescript
class Encapsulator {
  private name: string;
}
const encapsulator = new Encapsulator("John");
console.log(encapsulator.name);
```

- Use **accessors** (\* _getters and setters_ \*) to INDIRECTLY expose access to a class's private field - to code that exists outside the class.

```typescript
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
console.log(encapsulator.name);
```

- Instead of calling the private name variable with 'console.log(encapsulator.name);', call the setter accessor instead:

```typescript
const encapsulator = new Encapsulator("John");
console.log(encapsulator.setName);
```

### Abstraction

- Hide the "how" data is managed in a code and provide a simplified interface to outside code.
- **Loose Coupling** - Drawing boundaries between code to isolate chunks of data. Doing so makes it easy to change blocks of code without adversely affecting other blocks of code.
- **Interface/Abstract Class/Contract** - Provides access to an object without revealing the inner workings of that object.
- Interfaces have no working code.
- Abstract Classes are more flexible and you can have members both with and without implementation. They are a shell that only reveals names and object types (does not implement how they work). Important in creating loosely coupled code.

- **Implement** - A keyword that tells TS that XYZ class is intended to define the implementation and running the code of the members of a specific interface.

- Using the "interface-class" structure allows you to avoid writing code to a specific implementation.
- Able to write code to any implementation.

- Without an interface : The "playSound" function will only accept "Dog". A "cat" class would require rewriting a second function.

```typescript
class Dog {
  makeSound() {
    console.log("Woof!");
  }
}

function playSound(animal: Dog) {
  animal.makeSound();
}
```

- With an Interface (written to a shell): "Animal" is the shell. "playSound" is written to that shell.

```typescript
// animal is the shell.
interface Animal {
  makeSound();
}

// playSound is written against the shell. It was given something with the makeSound() function but it never mentions specific classes.
function playSound(animal: Animal) {
  animal.makeSound();
}

class Dog implements Animal {
  makeSound() {
    console.log("Woof!");
  }
}

class Cat implements Animal {
  makeSound() {
    console.log("Meow!");
  }
}
```

### Inheritance

- Allows a new class (child/subclass) to inherit attributes and methods from an existing class (parent/superclass)
- Promotes Code Reusability without having to rewrite code from scratch.
- Extensibility: A child class can add more logic to the base features inherited from its parent.
- Method Overriding: Child class can change implementation of an inherited method to fit its specific needs.

- **Class** is a type that stores a related set of fields and methods which act on those fields. It acts as a blueprint for creating objects (but is not an object itself).

- **Prototypical Inheritance** - In JS, every instance of a specific type shares the same instance of a single core object (The prototype). Any fields/methods created on the prototype are accessible across the various instances of that object. (Saves resources like memory, but not as flexible as TS inheritance).
- An object inherits properties and methods directly from another object through a hidden linking object called a prototype.
- In TS, Classes can inherit from other classes, interfaces, and abstract classes making it more flexible with inheritance than JavaScript- more ways to reuse code.
  -Prototypical Inheritance allows you to modify objects without having to reinstantiate objects created off of it. Additionally, it saves memory because methods live only once in the prototype instead of it being copied to each instance.

### Polymorphism

- Allows objects/methods to behave differently depending on the context.
- You can write a general method which can be overwritten per subclass.
- JS supports polymorphism through: dynamic typing, prototype chain, and class inheritance.
- JS lacks compile-time enforcement (If an object is missing a required method, you won't find out until runtime.) --> TS enforces compile-time safety so you can identify type constraints mismatches before runtime. z

## Chapter 2:

## Chapter 3:

## Chapter 4:
