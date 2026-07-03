# Daily Learning Update – TypeScript Interfaces and Object Types

# 03-07-2026

Today I explored one of the core concepts of TypeScript: **Interfaces and Object Types**. These features help define the structure of objects, making code more predictable, maintainable, and type-safe. Through multiple hands-on exercises, I learned how to create object contracts, implement methods, work with optional properties, pass typed objects to functions, and use inheritance to reuse existing definitions.

## Object Types

I started by learning how to create custom object types using the `type` keyword. Object types allow us to define the expected properties and their data types for an object.

### Example

```typescript
type Employee = {
  name: string;
  empid: number;
  salary: number;
};
```

This ensures that every employee object contains the required properties with the correct data types.

### Key Learning

- Object types help maintain consistency across objects.
- TypeScript validates objects at compile time and reports errors when properties are missing or have incorrect types.
- Primitive types such as `string` and `number` should be preferred over wrapper types like `String` and `Number`.

## Interfaces

Next, I learned about interfaces, which are another way to define the structure of objects.

### Example

```typescript
interface Employee {
  name: string;
  empid: number;
  designation: string;
  branch: string;
}
```

Interfaces act as contracts that specify what properties an object must contain.

### Key Learning

- Interfaces improve code readability and maintainability.
- They help enforce a consistent object structure.
- Interfaces are commonly used in large TypeScript applications.

## Interface Methods

I learned that interfaces can also define methods.

### Example

```typescript
interface Book {
  title: string;
  author: string;
  displayInfo(): void;
}
```

While implementing this exercise, I initially made mistakes in method declaration and later corrected them by defining the method directly inside the object.

### Key Learning

- Interfaces can describe both properties and behaviors.
- Methods can access object properties using `this`.
- Proper method implementation is important for maintaining object-oriented design.

## Optional Properties

I explored optional properties using the `?` operator.

### Example

```typescript
interface User {
  name: string;
  email: string;
  phonenumber?: number;
}
```

This allows certain properties to be omitted when creating objects.

### Key Learning

- Optional properties provide flexibility.
- They are useful when some information may not always be available.
- TypeScript does not throw errors when optional properties are omitted.

## Interfaces with Functions

I learned how interfaces can be used as function parameter types.

### Example

```typescript
interface Rectangle {
  width: number;
  height: number;
}

function calculateArea(rectangle: Rectangle) {
  return rectangle.width * rectangle.height;
}
```

Initially, I was confused about why the interface was specified again in the function parameter after already being used during object creation. After understanding the concept, I learned that the function parameter type ensures that any object passed to the function follows the required structure.

### Key Learning

- Interfaces can be reused across multiple functions.
- Function parameter typing improves type safety.
- The same function can work with multiple objects that follow the same interface.

## Interface Inheritance

I learned how interfaces can inherit properties from other interfaces using the `extends` keyword.

### Example

```typescript
interface Person {
  name: string;
  age: number;
}

interface Student extends Person {
  course: string;
}
```

This allows code reuse and reduces duplication.

### Key Learning

- Child interfaces inherit all properties from parent interfaces.
- Additional properties can be added in the child interface.
- Inheritance improves maintainability and scalability.

## Readonly Properties

Finally, I learned about readonly properties.

### Example

```typescript
interface User {
  readonly id: number;
  name: string;
}
```

Readonly properties cannot be modified after the object is created.

### Key Learning

- Protects important data from accidental modification.
- Useful for identifiers and values that should remain constant.
- TypeScript reports an error if a readonly property is reassigned.

## Challenges Faced and Corrections

- Used `String` and `Number` initially and learned that `string` and `number` are preferred in TypeScript.
- Faced issues while implementing methods inside interfaces and corrected the syntax.
- Understood the purpose of using interfaces in function parameters.
- Improved code readability by using template literals instead of string concatenation.

Interrface Program file
[interfaces.ts](./Typescript/interfaces.ts)

Object type program file
[objecttype.ts](./Typescript/objecttype.ts)
