# TypeScript Learning Notes – Union Types, Object Types and Generics

# 06/07/2026

# Union Types

A Union Type allows a variable, function parameter, or return value to hold more than one type of data. It is represented using the pipe (`|`) operator. Union types provide flexibility while maintaining type safety. Instead of creating separate variables or functions for different data types, a union type allows a single variable or function to work with multiple types.

### Why Use Union Types?

In real-world applications, data often comes in different formats. For example, an employee ID might be received as either a number or a string from different APIs. Using a union type allows us to handle both cases safely.

### Example

```typescript id="i1wnzh"
let id: string | number;

id = 101;
id = "EMP101";
```

The variable `id` can store either a number or a string, but TypeScript will not allow any other type such as a boolean.

### Union Types in Functions

Union types are commonly used in function parameters.

```typescript id="4nh6u7"
function formatPrice(price: number | string) {
  console.log(price);
}
```

This function can accept either a number or a string as an argument.

## Type Narrowing

When a variable can contain multiple types, TypeScript needs a way to determine which type it is currently working with. This process is called Type Narrowing.

Type narrowing helps TypeScript identify the exact type inside a specific block of code.

### Example

```typescript id="qvfrcw"
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}
```

In the first block, TypeScript understands that `id` is a string, so string methods such as `toUpperCase()` can be used safely.

In the second block, TypeScript understands that `id` is a number, so number methods such as `toFixed()` can be used safely.

Without type narrowing, TypeScript would not know which methods are available.

## Discriminated Unions

A Discriminated Union is a special type of union where multiple object types share a common property called a discriminator. The discriminator contains different literal values that help TypeScript identify the exact object type.

### Why Use Discriminated Unions?

They make code safer and easier to maintain when working with multiple object structures.

### Example

```typescript id="ezd8lb"
type Circle = {
  type: "circle";
  radius: number;
};

type Rectangle = {
  type: "rectangle";
  width: number;
  height: number;
};
```

Both objects contain a common property called `type`.

```typescript id="5qj4x6"
type Shape = Circle | Rectangle;
```

Now TypeScript can determine the exact type by checking the value of `type`.

```typescript id="rlyj8q"
function getArea(shape: Shape): number {
  if (shape.type === "circle") {
    return Math.PI * shape.radius * shape.radius;
  }

  return shape.width * shape.height;
}
```

If `type` is `"circle"`, TypeScript automatically knows that `radius` exists. If `type` is `"rectangle"`, it knows that `width` and `height` exist.

This is much safer than manually checking for properties.

## String Literal Unions

A String Literal Type restricts a variable to specific predefined string values.

### Example

```typescript id="ksmp7z"
type UserRole = "admin" | "user" | "guest";
```

Now a variable can contain only one of these values.

```typescript id="y6kkc8"
let role: UserRole = "admin";
```

Valid values:

```typescript id="zgz0vl"
role = "admin";
role = "user";
role = "guest";
```

Invalid value:

```typescript id="g1yb9s"
role = "manager";
```

TypeScript will show an error because `"manager"` is not part of the allowed values.

### Real-World Usage

String literal unions are commonly used for:

- User roles
- Theme settings
- API response statuses
- Payment methods
- Order statuses

Example:

```typescript id="l1jvh2"
type Status = "loading" | "success" | "error";
```

# Object Types

Object Types define the structure of JavaScript objects. They specify which properties an object should contain and the data type of each property.

Object types act as blueprints that help developers create consistent and predictable objects.

### Example

```typescript id="hqg2hz"
type Employee = {
  id: number | string;
  name: string;
  salary: number;
  department?: string;
};
```

### Explanation

- `id` can be a number or string.
- `name` must be a string.
- `salary` must be a number.
- `department` is optional because of the `?` symbol.

### Creating Objects

```typescript id="8zt5hh"
const employee: Employee = {
  id: 101,
  name: "Preethi",
  salary: 50000,
};
```

TypeScript ensures that the object follows the structure defined by the type.

### Ways to Define Object Types

#### 1. Inline Type Literal

```typescript id="zcs94z"
const user: {
  name: string;
  age: number;
} = {
  name: "Preethi",
  age: 20,
};
```

#### 2. Type Alias

```typescript id="e0lbcb"
type User = {
  name: string;
  age: number;
};
```

#### 3. Interface

```typescript id="ow13o8"
interface User {
  name: string;
  age: number;
}
```

Interfaces are often preferred for larger applications because they can be extended.

# Generics

Generics allow us to write reusable and type-safe code.

Without generics, we often use `any`, which removes TypeScript's type checking and can introduce bugs.

### Without Generics

```typescript id="sktb3z"
function getValue(value: any) {
  return value;
}
```

The function accepts anything, but TypeScript cannot verify the type.

### With Generics

```typescript id="5xqblw"
function getValue<T>(value: T): T {
  return value;
}
```

The type of the input and output remains consistent.

### Example

```typescript id="53xlh4"
getValue<string>("Hello");
getValue<number>(100);
getValue<boolean>(true);
```

The same function works for multiple data types while maintaining type safety.

### Generic Arrays

```typescript id="q2zrf5"
function getItems<T>(items: T[]): T[] {
  return items;
}
```

Usage:

```typescript id="jlwm1y"
const numbers = getItems([1, 2, 3]);
const names = getItems(["Preethi", "Deepika"]);
```

### Benefits of Generics

- Code Reusability
- Better Type Safety
- Reduced Duplication
- Improved Readability
- Better IntelliSense and Auto-Completion

### Generic Function Syntax

```typescript id="8j2gdt"
function functionName<T>(parameter: T): T {
  return parameter;
}
```

The type parameter `T` acts as a placeholder. TypeScript automatically replaces it with the actual type during function execution.
[EMS.ts](../Typescript/EMS.ts)
