# [Full-Stack React, TypeScript, and Node (Second Edition) by David Choi] Notes

## Overview:

The following Repo contains my workthrough of the textbook including my own personal notes.

## Chapter 1 - TypeScript:

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

### Object Oriented Programming

- JavaScript's implementation of OOP is limited.
- TS was created as an added layer ontop of JS that adds more functionality.

- OOP Review:
  - **Encapsulation** - (Information Hiding)
    - Data is put in a container-like Class to prevent anything outside that container from viewing/modifying the data.
    - Access the data

## Chapter 2:

## Chapter 3:

## Chapter 4:
