/* 
TypeScript employs Structural typing.
Even though jill is never declared as a child of the "Person" class, they share the same fields.

*/
// "Person" class has the "name" field.
class Person {
    name: string = "";
}

// The variable "jill" is of type {name: string}
// Weird because this type declaration has no given name (more like a type definition).
const jill: {name:string} = {
    name: "jill"
};

const person: Person = jill;
console.log(person);