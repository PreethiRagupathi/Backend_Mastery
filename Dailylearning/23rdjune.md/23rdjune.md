# Day - 23|06|2026

# Today I Learned – JavaScript Expressions and Functions

In this session, I learned about expressions and different types of functions in JavaScript. I explored how functions accept input through parameters, return values, and how scope controls variable accessibility. I also practiced several function variations such as default parameters, rest parameters, anonymous functions, arrow functions, function expressions, IIFE, constructor functions, and a factorial function.

---

## Expressions

Expressions are combinations of values, variables, and operators that produce a result.

### Example

```javascript
let total = 10 + 20;
console.log(total);
```

Output:

```javascript
30;
```

---

## Functions

Functions are reusable blocks of code that perform a specific task.

### Example

```javascript
function greet() {
  console.log("Hello World");
}

greet();
```

Output:

```javascript
Hello World
```

---

## Parameters

Parameters allow functions to receive values when they are called.

### Example

```javascript
function greet(name) {
  console.log("Hello " + name);
}

greet("Preethi");
```

Output:

```javascript
Hello Preethi
```

---

## Return Values

The return statement sends a value back from a function.

### Example

```javascript
function add(a, b) {
  return a + b;
}

let result = add(10, 20);
console.log(result);
```

Output:

```javascript
30;
```

---

## Scope

Scope determines where a variable can be accessed.

### Example

```javascript
function display() {
  let message = "Hello";
  console.log(message);
}

display();
```

Output:

```javascript
Hello;
```

Trying to access `message` outside the function will produce an error because it exists only within the function scope.

---

## Default Parameters

Default parameters provide a fallback value when an argument is not passed.

### Example

```javascript
function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet();
```

Output:

```javascript
Hello Guest
```

---

## Rest Parameters

Rest parameters collect multiple arguments into a single array.

### Example

```javascript
function showNumbers(...numbers) {
  console.log(numbers);
}

showNumbers(10, 20, 30, 40);
```

Output:

```javascript
[10, 20, 30, 40];
```

---

## Anonymous Functions

Anonymous functions are functions without a name.

### Example

```javascript
let greet = function () {
  console.log("Hello");
};

greet();
```

Output:

```javascript
Hello;
```

---

## Arrow Functions

Arrow functions provide a shorter syntax for writing functions.

### Example

```javascript
const add = (a, b) => a + b;

console.log(add(10, 20));
```

Output:

```javascript
30;
```

---

## Function Expressions

A function expression stores a function inside a variable.

### Example

```javascript
const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(5, 4));
```

Output:

```javascript
20;
```

---

## IIFE (Immediately Invoked Function Expression)

An IIFE executes immediately after it is created.

### Example

```javascript
(function () {
  console.log("Executed Immediately");
})();
```

Output:

```javascript
Executed Immediately
```

---

## Constructor Functions

Constructor functions are used to create multiple objects with similar properties.

### Example

```javascript
function Student(name, age) {
  this.name = name;
  this.age = age;
}

const student1 = new Student("Preethi", 19);

console.log(student1);
```

Output:

```javascript
Student { name: 'Preethi', age: 19 }
```

---

## Factorial Function

A factorial function calculates the product of all positive integers from 1 to a given number.

### Example

```javascript
function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(5));
```

Output:

```javascript
120;
```

## Files Included

- [23re.js](./23re.js) - Regular Expression examples
- [23spa.js](./23spa.js) - Expressions and Functions examples
