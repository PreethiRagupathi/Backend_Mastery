# Today's Learning Update – TypeScript Fundamentals

Today I learned the fundamentals of **TypeScript**, a strongly typed, open-source programming language developed by Microsoft. TypeScript is designed to make JavaScript development easier and more reliable by adding static types and compile-time error checking.

## What is TypeScript?

TypeScript is a **superset of JavaScript**, which means every valid JavaScript program is also a valid TypeScript program. However, TypeScript provides additional features such as type annotations, interfaces, enums, and compile-time checking that are not available in plain JavaScript.

Since web browsers and Node.js understand only JavaScript, TypeScript code must first be compiled (transpiled) into JavaScript before it can be executed.

### Advantages of TypeScript

#### 1. Static Typing

TypeScript allows developers to specify the type of a variable. This helps catch mistakes early during development.

```ts
let age: number = 20;
```

If we try to assign a string value to `age`, TypeScript will show an error before the program runs.

#### 2. Compile-Time Checking

Errors are detected while compiling the code instead of during execution.

```ts
let age: number = "20"; // Error
```

This reduces runtime bugs and improves code quality.

#### 3. Rich Tooling

TypeScript provides better IDE support such as:

- Auto-completion
- Type hints
- Error highlighting
- Refactoring support
- Code navigation

These features improve developer productivity and code maintainability.

# Basic Data Types in TypeScript

## 1. Boolean

The `boolean` type is used to represent logical values: `true` or `false`.

```ts
let isDone: boolean = false;
```

### Use Case

Boolean values are commonly used for conditions and status flags.

```ts
let isLoggedIn: boolean = true;
```

## 2. Number

The `number` type represents all numeric values, including integers and floating-point numbers.

```ts
let decimal: number = 6;
```

### Examples

```ts
let age: number = 20;
let price: number = 99.99;
```

## 3. String

The `string` type represents textual data.

```ts
let color: string = "Preethi";
```

### Example

```ts
let message: string = "Welcome to TypeScript";
```

Strings can also use template literals.

```ts
let name: string = "Preethi";
console.log(`Hello ${name}`);
```

## 4. Tuple

A tuple allows storing multiple values of different types in a fixed order.

```ts
let x: [string, number];
x = ["Preethi", 101];
```

### Explanation

- First value must be a string.
- Second value must be a number.

Invalid example:

```ts
x = [101, "Preethi"]; // Error
```

## 5. Array

Arrays store multiple values of the same type.

```ts
let list: number[] = [1, 2, 3];
```

### Alternative Syntax

```ts
let list: Array<number> = [1, 2, 3];
```

### Example

```ts
let fruits: string[] = ["Apple", "Banana", "Orange"];
```

## 6. Any

The `any` type disables type checking.

```ts
let value: any = "hey";
value = 123;
value = true;
```

### Advantage

Provides flexibility when the type is unknown.

### Disadvantage

Removes TypeScript's safety features and can lead to runtime errors.

## 7. Unknown

The `unknown` type is similar to `any`, but it is safer.

```ts
let value: unknown = "hey";
```

Before using an `unknown` value, TypeScript requires type checking.

```ts
let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

### Difference Between Any and Unknown

| any                             | unknown                |
| ------------------------------- | ---------------------- |
| No type checking                | Requires type checking |
| Less safe                       | More safe              |
| Can perform operations directly | Must verify type first |

# Variable Declarations

TypeScript supports three ways to declare variables.

## let

Used when the value may change later.

```ts
let age: number = 20;
age = 21;
```

### Features

- Block scoped
- Can be reassigned
- Cannot be redeclared in the same scope

## const

Used when the value should not change.

```ts
const pi: number = 3.14;
```

### Features

- Block scoped
- Cannot be reassigned
- Preferred when the value is constant

## var

The traditional JavaScript way of declaring variables.

```ts
var name: string = "Preethi";
```

### Drawbacks

- Function scoped
- Can cause unexpected behavior due to hoisting

Modern TypeScript projects usually prefer `let` and `const`.

# Functions in TypeScript

Functions allow us to organize reusable blocks of code.

## Function Declaration

```ts
greet("Alice");

function greet(name: string): string {
  return `Hello, ${name}!`;
}
```

### Explanation

- Function declarations are hoisted.
- They can be called before their definition.
- `name` is a string parameter.
- The function returns a string.

Output:

```text
Hello, Alice!
```

## Function Expression

```ts
const add = function (a: number, b: number): number {
  return a + b;
};

console.log(add(5, 3));
```

### Explanation

- Function is stored inside a variable.
- Not hoisted like function declarations.
- Returns the sum of two numbers.

Output:

```text
8
```

# Practical Exercise Completed

Today I practiced:

- Creating interfaces
- Working with arrays
- Defining object structures
- Calculating average marks
- Using loops
- Applying conditional statements
- Generating grades based on average scores

This helped me understand how TypeScript combines JavaScript's flexibility with strong typing and compile-time error detection.

[StudentGradeCalculator.ts](../Typescript/StudentGradeCalculator.ts)
