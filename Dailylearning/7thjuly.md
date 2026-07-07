# React + TypeScript (Vite)

# 07.07.2026

## Introduction to React

Today, I started learning React with TypeScript using Vite. React is a JavaScript library developed by Meta for building fast, interactive, and reusable user interfaces. Unlike traditional web development, where developers manually update the DOM whenever data changes, React efficiently updates only the necessary parts of the page using its Virtual DOM mechanism. This improves application performance and provides a better user experience.

### Why React is Used

Before React, updating web pages dynamically required complex DOM manipulation. React simplifies this process by automatically handling UI updates whenever application data changes.

For example, in an e-commerce application:

- When a user adds a product to the cart,
- React updates only the cart count,
- Instead of reloading the entire page.

This makes web applications faster and more responsive.

### Main Concepts of React

#### Components

Components are reusable building blocks of a user interface. Instead of writing the same code repeatedly, developers can create a component once and use it multiple times.

Examples:

- Navbar
- Footer
- Login Form
- Product Card

```tsx
function Welcome() {
  return <h1>Hello React!</h1>;
}
```

#### JSX

JSX stands for JavaScript XML. It allows developers to write HTML-like syntax inside JavaScript or TypeScript.

```tsx
const element = <h1>Hello World</h1>;
```

JSX makes UI code easier to read and maintain.

#### Virtual DOM

React creates a lightweight copy of the real DOM known as the Virtual DOM. Whenever data changes, React compares the new Virtual DOM with the previous version and updates only the modified elements in the actual DOM.

#### State

State stores data that can change over time.

```tsx
const [count, setCount] = useState(0);
```

Whenever state changes, React automatically updates the user interface.

### React Flow

```text
Component
    ↓
JSX
    ↓
Virtual DOM
    ↓
Real DOM
    ↓
Browser UI
```

### In One Line

React is a JavaScript library used to build fast, interactive, and reusable user interfaces using components.

# Creating a React + TypeScript Application Using Vite

To start learning React, I created a new React project using Vite with TypeScript support.

## Create Project

```bash
npm create vite@latest
```

Selected:

```text
Framework: React
Variant: TypeScript
```

## Install Dependencies

```bash
npm install
```

## Run Application

```bash
npm run dev
```

Vite provides a fast development environment and automatically reflects code changes in the browser.

# Project Structure Tour

After creating the project, I explored the folder structure and understood the purpose of each important file.

```text
react-app
│
├── node_modules
├── public
├── src
│   ├── App.tsx
│   ├── main.tsx
│   ├── assets
│   └── index.css
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── index.html
```

## Important Files

### index.html

The root HTML file loaded by the browser.

### main.tsx

The entry point of the React application.

Responsibilities:

- Initializes React.
- Renders the root component.
- Connects React with the browser.

### App.tsx

The main component of the application.

Responsibilities:

- Acts as the parent component.
- Combines and renders other components.

### src Folder

Contains all React source code, components, styles, and assets.

### public Folder

Stores static resources such as images and icons.

### package.json

Contains project metadata, dependencies, and available scripts.

### tsconfig.json

TypeScript configuration file.

### vite.config.ts

Contains Vite-specific configuration settings.

# Creating the First Component

To understand component creation and rendering, I created a simple reusable component called `Welcome`.

## Welcome.tsx

```tsx
function Welcome() {
  return (
    <div>
      <h2>Welcome to React</h2>
      <p>Let's start the learning journey</p>
    </div>
  );
}

export default Welcome;
```

### Understanding the Component

- `function Welcome()` creates a React component.
- JSX is used to define the UI.
- `export default Welcome` makes the component available to other files.

# Rendering the First Component

The component was imported and rendered inside `App.tsx`.

## App.tsx

```tsx
import Welcome from "./components/Welcome";

function App() {
  return (
    <div>
      <h1>React App</h1>
      <Welcome />
    </div>
  );
}

export default App;
```

### Understanding the Flow

1. Browser loads `index.html`.
2. `main.tsx` starts the React application.
3. `App.tsx` is rendered.
4. `Welcome.tsx` is rendered inside App.
5. Output appears in the browser.

```text
index.html
    ↓
main.tsx
    ↓
App.tsx
    ↓
Welcome.tsx
    ↓
Browser Output
```

# Practical Task: Cycle Susa Landing Page

To strengthen my understanding of React components, I created a simple landing page for **Cycle Susa** by dividing the application into multiple reusable components.

## Application Structure

```text
App
├── Navbar
├── Hero
├── Features
└── Footer
```

This approach demonstrates how React applications are built using reusable and modular components.

## Navbar Component

```tsx
function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "15px",
        justifyContent: "center",
      }}
    >
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>
  );
}
export default Navbar;
```

Purpose:

- Displays navigation links.
- Can be reused across multiple pages.

## Hero Component

```tsx
function Hero() {
  return (
    <div>
      <h2>Welcome to Cycle Susa</h2>
      <p>"Your trusted cycling companion"</p>
      <button
        style={{
          padding: "10px",
          fontFamily: "sans-serif",
          borderRadius: "15px",
          marginTop: "15px",
        }}
      >
        Explores Cycles
      </button>
    </div>
  );
}
export default Hero;
```

Purpose:

- Introduces the application.
- Displays a call-to-action button.

## Features Component

```tsx
function Features() {
  return (
    <div>
      <h2>Features of Cycle Susa</h2>
      <ul
        style={{
          textAlign: "left",
          padding: "20px",
          listStylePosition: "outside",
        }}
      >
        <li>Wide Range of Cycles</li>
        <li>Affordable Prices</li>
        <li>Easy Online Booking</li>
      </ul>
    </div>
  );
}
export default Features;
```

Purpose:

- Highlights key services and features.

## Footer Component

```tsx
function Footer() {
  return (
    <div>
      <ul>© 2026 Cycle Susa</ul>
      <ul>Contact information</ul>
    </div>
  );
}
export default Footer;
```

Purpose:

- Displays footer information.

## App.tsx

```tsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <h1>React App</h1>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
```
