# 25.06.2026 - Loops & logic

# Today Learning

Today I learned looping concepts and conditional statements in JavaScript. I practiced different types of loops, worked with arrays and objects, performed CRUD operations on arrays of objects, and implemented decision-making programs using conditions.

## Looping Concepts

### Traditional `for` Loop

- Elements can be accessed using their index.
- Provides full control over the iteration process.
- Useful when both index and value are required.

### `for...of` Loop

- Used to iterate through values of an array.
- No need to use indexes explicitly.
- Simple and readable for array traversal.

### `forEach()` Method

- Executes a function for every element in an array.
- Provides a cleaner way to iterate through arrays.
- Commonly used when performing the same operation on each element.

### `for...in` Loop

- Used to iterate through keys or properties of an object.
- Can also be used with arrays to access indexes.
- Useful for working with object data.

## Arrays and Objects

### Arrays

- Used to store multiple values in a single variable.
- Elements are accessed using indexes.

### Objects

- Store data in key-value pairs.
- Useful for representing real-world entities such as students, employees, and products.

## CRUD Operations on Arrays of Objects

### Create

- Added new elements using `push()`.
- `push()` inserts elements at the end of an array.

### Read

- Retrieved data using loops and array traversal techniques.

### Update

- Updated specific records using `find()`.
- `find()` returns the first matching element based on a condition.

### Delete

- Removed elements using `filter()`.
- `filter()` creates and returns a new array containing only the matching elements.

## Conditional Statements

### `if`

- Executes a block of code when a condition is true.

### `else if`

- Checks multiple conditions sequentially.

### `else`

- Executes when none of the previous conditions are true.

### `switch`

- Used when multiple choices need to be handled based on a single value.
- Provides a cleaner alternative to multiple `if...else if` statements.
## User Input in Node.js

### `prompt-sync`

Installing prompt-sync

npm install prompt-sync
* Used to accept user input from the terminal.
* Makes console applications interactive.
* Returns input as a string by default.
* `Number()` can be used to convert numeric input into a number.
* Commonly used for practicing conditions, loops, and basic JavaScript programs in a Node.js environment.

## Programs Implemented

- Finding whether a number is Positive, Negative, or Zero.
- Finding whether a number is Even or Odd.
- Checking Voting Eligibility.
- Finding the Largest of Two Numbers.
- Calculating Student Grades based on marks.

Program files

- [lc.js](../lc.js)
