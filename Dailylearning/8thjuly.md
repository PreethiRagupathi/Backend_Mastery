# 08.07.2026

## JSX, Multiple Components, Props, Component Composition and Practice

Today, I continued my React learning journey by exploring JSX in depth and understanding how React applications are structured using multiple reusable components. I also learned how to pass data between components using props and how component composition helps in building scalable applications.

---

# JSX (JavaScript XML)

JSX stands for JavaScript XML. It allows developers to write HTML-like syntax inside JavaScript and TypeScript code. JSX makes UI development more intuitive and readable because developers can design user interfaces using familiar HTML structures.

Example:

```tsx
function Welcome() {
  return (
    <div>
      <h2>Welcome to React</h2>
      <p>Let's start the learning journey</p>
    </div>
  );
}
```

Although JSX looks like HTML, it is actually converted into JavaScript by React before being rendered in the browser.

### Rules of JSX

- Components must return a single parent element.
- HTML attributes use camelCase naming.
- Component names must begin with an uppercase letter.
- JSX expressions can be written inside `{}`.

Example:

```tsx
const name = "Preethi";

function Welcome() {
  return <h2>Welcome {name}</h2>;
}
```

### Benefits of JSX

- Easy to read and write.
- Combines UI and logic together.
- Helps create dynamic interfaces.
- Improves maintainability.

---

# Multiple Components

React follows a component-based architecture. Instead of creating an entire webpage inside a single file, the application is divided into smaller reusable components.

For the Cycle Susa project, I created:

```text
App
├── Navbar
├── Hero
├── Features
└── Footer
```

Each component performs a specific task.

### Navbar.tsx

Responsible for navigation links.

```tsx
function Navbar() {
  return (
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>
  );
}
```

### Hero.tsx

Displays the welcome section.

```tsx
function Hero() {
  return (
    <div>
      <h2>Welcome to Cycle Susa</h2>
      <p>Your trusted cycling companion</p>
    </div>
  );
}
```

### Features.tsx

Displays important services and features.

```tsx
function Features() {
  return (
    <ul>
      <li>Wide Range of Cycles</li>
      <li>Affordable Prices</li>
      <li>Easy Online Booking</li>
    </ul>
  );
}
```

### Footer.tsx

Displays footer information.

```tsx
function Footer() {
  return (
    <div>
      <p>© 2026 Cycle Susa</p>
    </div>
  );
}
```

### Why Multiple Components?

- Better code organization.
- Easier debugging.
- Reusability.
- Improved maintainability.
- Scalable project structure.

---

# Props (Properties)

Props are used to pass data from a parent component to a child component.

Props work similarly to function parameters.

Example:

```tsx
function Welcome(props: { name: string }) {
  return <h2>Welcome {props.name}</h2>;
}
```

Usage:

```tsx
<Welcome name="Preethi" />
```

Output:

```text
Welcome Preethi
```

### Why Props Are Needed?

Suppose Cycle Susa provides multiple services.

Without props:

```tsx
function ServiceCard() {
  return <h3>General Service</h3>;
}
```

This component can only display one service.

With props:

```tsx
type ServiceProps = {
  servicename: string;
  description: string;
  price: number;
};
```

```tsx
function ShowServices({ servicename, description, price }: ServiceProps) {
  return (
    <div>
      <h3>{servicename}</h3>
      <p>{description}</p>
      <p>₹{price}</p>
    </div>
  );
}
```

Now the same component can display different services.

---

# Practice Task - Cycle Susa Services

To practice props, I created a service listing feature.

### Service Data

```tsx
const servicelist = [
  {
    id: 101,
    servicename: "General Service",
    description: "Complete cycle inspection and maintenance",
    price: 500,
  },
  {
    id: 102,
    servicename: "Brake Adjustment",
    description: "Improve braking performance",
    price: 200,
  },
  {
    id: 103,
    servicename: "Chain Replacement",
    description: "Replace worn-out chains",
    price: 300,
  },
  {
    id: 104,
    servicename: "Gear Tuning",
    description: "Smooth shifting adjustments",
    price: 150,
  },
];
```

---

# Rendering Multiple Components Using map()

The JavaScript `map()` method is used to loop through an array and create UI elements dynamically.

Example:

```tsx
{
  servicelist.map((service) => <ShowServices key={service.id} {...service} />);
}
```

### How map() Works

Iteration 1:

```text
General Service
```

Iteration 2:

```text
Brake Adjustment
```

Iteration 3:

```text
Chain Replacement
```

Iteration 4:

```text
Gear Tuning
```

React creates a component for each service object automatically.

### Benefits

- Avoids repetitive code.
- Makes applications dynamic.
- Easier to scale.

---

# Spread Operator (...)

The spread operator expands all properties of an object.

Without Spread Operator:

```tsx
<ShowServices
  id={service.id}
  servicename={service.servicename}
  description={service.description}
  price={service.price}
/>
```

With Spread Operator:

```tsx
<ShowServices {...service} />
```

React automatically converts it into:

```tsx
<ShowServices
  id={service.id}
  servicename={service.servicename}
  description={service.description}
  price={service.price}
/>
```

### Benefits

- Cleaner code.
- Less repetition.
- Easy maintenance.

---

# Component Composition

Component Composition means combining smaller components to build larger interfaces.

For the Cycle Susa project:

```text
App
├── Navbar
├── Services
│   ├── ShowServices
│   ├── ShowServices
│   ├── ShowServices
│   └── ShowServices
├── Hero
└── Footer
```

### App.tsx

```tsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
```

The App component acts as the parent component and combines all child components to create the complete user interface.

---

# Errors Faced and Solutions

## Error 1: Lowercase Component Name

Incorrect:

```tsx
<welcome />
```

Correct:

```tsx
<Welcome />
```

Reason:
React treats lowercase tags as HTML elements.

---

## Error 2: Incorrect HTML Tag

Incorrect:

```tsx
<P>Let's start the learning journey</P>
```

Correct:

```tsx
<p>Let's start the learning journey</p>
```

Reason:
HTML tags must follow standard naming conventions.

---

## Error 3: File Naming Mismatch

Incorrect:

```tsx
import welcome from "./components/welcome";
```

Correct:

```tsx
import Welcome from "./components/Welcome";
```

Reason:
React components follow PascalCase naming conventions.

---

## Error 4: Confusion About Running the Project

Incorrect assumption:

```bash
npm main.tsx
```

Correct command:

```bash
npm run dev
```

Reason:
Vite uses the development server started through `npm run dev`.

---

# Learning Outcome

By the end of this session, I gained a strong understanding of JSX, multiple components, props, map(), spread operator, and component composition. I learned how React applications are divided into reusable components, how data flows from parent to child components through props, and how arrays can be used to dynamically render UI elements. Through the Cycle Susa project, I practically applied these concepts and strengthened my understanding of React's component-based architecture, which forms the foundation for building scalable and maintainable web applications.
