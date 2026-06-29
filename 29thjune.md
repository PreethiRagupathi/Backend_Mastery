# Today's Learning - ES Modules & Spread Operator

## ES Modules

ES Modules are used to split JavaScript code into multiple files and reuse them using `import` and `export`.

### Example: Default Export

### calculation.js

```js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

export default add;
```

### app.js

```js
import add from "./calculation.js";
import subtract from "./calculation.js";

console.log(add(7, 5));
console.log(subtract(7, 5));
```

### Output

```js
12;
12;
```

### Explanation

Since `add` is exported as the default export, both `add` and `subtract` imports point to the same function. Therefore both statements return `12`.

---

## Example: Named Export

### calculation.js

```js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiplication(a, b) {
  return a * b;
}
```

### app.js

```js
import { add } from "./calculation.js";
import { subtract } from "./calculation.js";
import { multiplication } from "./calculation.js";

console.log(add(7, 5));
console.log(subtract(13, 4));
console.log(multiplication(9, 17));
```

### Output

```js
12;
9;
153;
```

### Explanation

Named exports allow multiple functions to be exported from the same file. Curly braces `{}` are required while importing.

---

## Exporting All Functions Together

### calculation.js

```js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

export { add, subtract, multiplication };
```

### Explanation

Instead of adding `export` before every function, all functions can be exported together at the end of the file.

---

## Changing Names During Export

### calculation.js

```js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

export { add as a, subtract as s, multiplication as m };
```

### app.js

```js
import { a } from "./calculation.js";
import { s } from "./calculation.js";
import { m } from "./calculation.js";
```

### Explanation

The exported function names are changed before they are imported.

---

## Changing Names During Import

### app.js

```js
import { add as a } from "./calculation.js";
import { subtract as s } from "./calculation.js";
import { multiplication as m } from "./calculation.js";
```

### Explanation

The original function names remain unchanged in the source file, but different names can be used in the importing file.

---

## Import Using \*

### app.js

```js
import * as calc from "./calculation.js";

console.log(calc.add(7, 5));
console.log(calc.subtract(13, 4));
console.log(calc.multiplication(9, 17));
```

### Output

```js
12;
9;
153;
```

### Explanation

All exported members are stored inside the `calc` object and accessed using dot notation.

---

## import.meta.url

### Example

```js
console.log(import.meta.url);
```

### Output

```js
file:///project/modules/app.js
```

### Explanation

Returns the complete path/URL of the current module file.

---

## Spread Operator (...)

The spread operator expands arrays or objects into individual values.

### Example: Copying an Array

```js
let arr1 = [1, 2, 3];
let arr2 = [...arr1];
```

### Output

```js
[1, 2, 3];
```

### Explanation

Creates a copy of the array instead of assigning the same reference.

---

### Example: Merging Arrays

```js
let arr1 = [1, 2];
let arr2 = [3, 4];

let arr3 = [...arr1, ...arr2];
```

### Output

```js
[1, 2, 3, 4];
```

### Explanation

Combines multiple arrays into a single array.

---

### Example: Function Arguments

```js
function add(a, b, c) {
  return a + b + c;
}

let nums = [10, 20, 30];

console.log(add(...nums));
```

### Output

```js
60;
```

### Explanation

The spread operator passes array elements as individual arguments.

---

## Today's Key Learnings

- Learned how ES Modules work.
- Understood the difference between Default Export and Named Export.
- Practiced importing and exporting functions.
- Learned how to rename exports and imports using `as`.
- Learned how to import all functions using `* as`.
- Explored the use of `import.meta.url`.
- Learned how the Spread Operator is used for copying and merging arrays/objects and passing function arguments.
- Identified a common mistake where multiple default imports point to the same exported function.
