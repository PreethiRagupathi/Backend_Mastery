# JavaScript Arrays and Objects

## Arrays

An array is used to store multiple values in a single variable.

### Array Declaration

```javascript
let veges = [];
veges = ["carrot", "Beetroot"];
console.log(veges);
```

### Output

```javascript
["carrot", "Beetroot"];
```

### Other Ways to Create Arrays

```javascript
let veges = new Array();
let veges = [];
let veges = ["carrot", "Beetroot"];
```

### Accessing Array Elements

Arrays can be accessed using their index position.

```javascript
let veges = ["carrot", "Beetroot"];
console.log(veges[1]);
```

### Output

```javascript
Beetroot;
```

### Arrays with Different Data Types

```javascript
let veges = [
  "carrot",
  {
    name: "Preethi",
    age: 23,
  },
  function add(a, b) {
    return a + b;
  },
];

console.log(veges[1].name);
console.log(veges[2](1, 3));
```

### Output

```javascript
Preethi;
4;
```

### Array Methods

#### push()

Adds an element to the end of the array.

```javascript
veges.push("beans");
```

Example:

```javascript
let student = [
  { id: 1, name: "Preethi", marks: 85 },
  { id: 2, name: "Nithya", marks: 92 },
  { id: 3, name: "Deepika", marks: 78 },
];

function add(id, name, marks) {
  console.log(id + " added to the array");
  student.push({
    id: id,
    name: name,
    marks: marks,
  });
}
```

Output:

```javascript
4 added to the array
```

#### pop()

Removes the last element from the array.

#### shift()

Removes the first element from the array.

#### unshift()

Adds an element at the beginning of the array.

---

# Objects

Objects store collections of related data as key-value pairs, where each key is called a property.

```javascript
const user = {
  name: "Alice",
  age: 28,
  isAdmin: true,
};
```

## Accessing Object Properties

### Dot Notation

Read a property:

```javascript
user.name;
```

Output:

```javascript
Alice;
```

Update a property:

```javascript
user.age = 29;
```

Add a new property:

```javascript
user.country = "Canada";
```

### Bracket Notation

```javascript
const user = {
  name: "Alice",
  age: 28,
  isAdmin: true,
};

const query = "age";
console.log(user[query]);
```

### Output

```javascript
28;
```

---

## Files

### JavaScript Source File

[array.js](../Practicefolder/array.js)
