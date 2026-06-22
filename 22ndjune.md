# JavaScript Basics

## Variables

### var

The `var` keyword allows both redeclaration and reassignment of variables.

```javascript
var x = 10;
var x = 20; // Allowed
console.log(x); // 20
```

### let

The `let` keyword does not allow redeclaration within the same scope, but it allows reassignment.

```javascript
let y = 10;
// let y = 20; // Error
y = 25;
console.log(y); // 25
```

### const

The `const` keyword is used for variables whose value should not change after initialization.

```javascript
const z = 40;
// z = 30; // Error
console.log(z); // 40
```

---

## Data Types

### Number

Used to store numeric values.

```javascript
let age = 20;
let price = 99.99;
```

### String

Used to store text values.

```javascript
let name = "Preethi";
let message = "Hello World";
```

### Boolean

Stores either `true` or `false`.

```javascript
let isStudent = true;
let isLoggedIn = false;
```

### Undefined

A variable declared without a value is `undefined`.

```javascript
let city;
console.log(city); // undefined
```

### BigInt

Used to store very large integers.

```javascript
let bigNumber = 123456789012345678901234567890n;
```

### Symbol

Used to create unique identifiers.

```javascript
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // false
```

### Object

Used to store data in key-value pairs.

```javascript
let student = {
  name: "Preethi",
  age: 20,
};
```

### Array

Used to store multiple values in a single variable.

```javascript
let colors = ["Red", "Green", "Blue"];
```

### Function

A reusable block of code that performs a specific task.

```javascript
function greet() {
  return "Hello";
}
```

---

## Operators

### Arithmetic Operators

Used to perform mathematical operations.

```javascript
let a = 10;
let b = 5;

console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0
```

### Comparison Operators

Used to compare values and return a Boolean result.

```javascript
console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 == "10"); // true
console.log(10 === "10"); // false
```

**Note:** `==` (loose equality) compares values after type conversion, while `===` (strict equality) compares both value and data type without type conversion.

### Logical Operators

Used to combine multiple conditions.

```javascript
let age = 20;

console.log(age > 18 && age < 25); // true
console.log(age > 18 || age > 30); // true
console.log(!(age > 18)); // false
```

### Assignment Operators

Used to assign values to variables.

```javascript
let x = 10;
x += 5; // x = x + 5

console.log(x); // 15
```

---

## Expressions

An expression is any piece of code that produces a value.

### Examples

```javascript
10 + 5; // 15
age > 18; // true
"Hello" + " World"; // "Hello World"
5 + 3; // 8
10 > 5; // true
"a" + "b"; // "ab"
true && false; // false
```

In an expression, operators act on values and return a result. For example, in `10 + 5`, `+` is the operator and `10 + 5` is the expression that evaluates to `15`.
