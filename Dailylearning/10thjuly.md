# 10.07.2026

# Building a Small React Application - Cycle Susa

Today, I focused on combining all the React concepts learned so far into a small real-world application named **Cycle Susa**. Instead of creating isolated practice programs, I started developing a project that can eventually become a complete bicycle service and community platform. During this session, I organized the project into multiple pages and reusable components, separated the styling into CSS files, and introduced routing using React Router to navigate between different pages of the application.

---

# Project Objective

The goal of the Cycle Susa application is to build a platform where users can:

- Learn about Cycle Susa.
- View available bicycle services.
- Book a bicycle service.
- Join the cycling community.
- View contact information.
- Extend the application in future with cycle sales, ride notifications, location tracking, and customer management.

---

# Organizing the Project Structure

As the project grows, keeping files organized becomes very important. I structured my project by separating components and styles into dedicated folders.

```
src
│
├── components
│   ├── Navbar.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── ServiceCard.tsx
│   ├── Community.tsx
│   ├── CustomerForm.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
│
├── styles
│   ├── Navbar.css
│   ├── Services.css
│   ├── ServiceCard.css
│   ├── Community.css
│   ├── CustomerForm.css
│   └── Footer.css
│
├── App.tsx
├── main.tsx
└── index.css
```

This structure improves readability, maintainability, and scalability.

---

# Understanding React Router

A React application is called a **Single Page Application (SPA)** because the browser loads only one HTML page. Instead of loading a new HTML file for every page, React dynamically changes the displayed component based on the URL.

To enable navigation between different pages, I learned to use **React Router**.

---

# Installing React Router

I installed React Router using npm.

```bash
npm install react-router-dom
```

### What this command does

- Downloads the React Router library.
- Stores it inside the `node_modules` folder.
- Updates the `package.json` file by adding the dependency.
- Updates the `package-lock.json` file with the installed version.

This package provides the tools required to navigate between pages without refreshing the browser.

---

# BrowserRouter

The first step in configuring routing is wrapping the application with `BrowserRouter`.

```tsx
import { BrowserRouter } from "react-router-dom";
```

```tsx
<BrowserRouter>
    <App />
</BrowserRouter>
```

### Purpose

`BrowserRouter` listens to changes in the browser's URL and tells React which component should be displayed.

Without `BrowserRouter`, routing cannot work.

---

# Routes and Route

Inside `App.tsx`, I defined different routes.

Example:

```tsx
<Routes>
    <Route path="/" element={<Services />} />
    <Route path="/about" element={<About />} />
    <Route path="/community" element={<Handlepeople />} />
    <Route path="/booking" element={<ServiceBooking />} />
</Routes>
```

Each `Route` maps a URL path to a React component.

Example:

| URL | Component Displayed |
|------|---------------------|
| `/` | Services |
| `/about` | About |
| `/community` | Community |
| `/booking` | Service Booking |

---

# Navigation using Link

Initially, I used HTML anchor tags.

```tsx
<a href="/about">About</a>
```

However, in React applications, navigation should be done using `Link`.

```tsx
import { Link } from "react-router-dom";

<Link to="/about">About</Link>
```

### Why Link?

Unlike HTML anchor tags, `Link` changes the page without refreshing the browser, making the application faster and providing a better user experience.

---

# About Component

I created an `About.tsx` component to display information about Cycle Susa.

The component explains:

- What Cycle Susa does.
- Its services.
- Community activities.
- Mission statement.

---

# Styling Components

Instead of writing all styles inline, I created a separate **styles** folder.

Each component has its own CSS file.

Example:

```
Navbar.tsx
Navbar.css

Community.tsx
Community.css

CustomerForm.tsx
CustomerForm.css
```

Benefits:

- Cleaner code.
- Easier maintenance.
- Reusable styles.
- Better project organization.

---

# Errors Faced and Solutions

## Error 1: CSS Import Path

Incorrect

```tsx
import "/.customerform.css";
```

Reason:

The CSS file path was incorrect.

Solution

```tsx
import "../styles/customerform.css";
```

React successfully located the stylesheet after correcting the relative path.

---

## Error 2: About Page Not Displaying

Incorrect

```tsx
function About() {
    <div>
        ...
    </div>;
}
```

Reason:

The component did not return JSX.

Solution

```tsx
function About() {
    return (
        <div>
            ...
        </div>
    );
}
```

React components must always return JSX.

---

## Error 3: Using Anchor Tags

Initially

```tsx
<a href="/about">About</a>
```

Correct approach

```tsx
<Link to="/about">About</Link>
```

`Link` enables client-side navigation without refreshing the page.

---

# Concepts Learned

- Planning a React application.
- Organizing a React project structure.
- Creating reusable components.
- Separating CSS into dedicated files.
- Installing external libraries using npm.
- Understanding the purpose of `react-router-dom`.
- Configuring `BrowserRouter`.
- Defining routes using `Routes` and `Route`.
- Navigating between pages using `Link`.
- Debugging common React errors.

---

# Learning Outcome

Today's session helped me understand how a real-world React application is structured. I learned to organize components and styles efficiently, configure page navigation using React Router, and build a multi-page application without reloading the browser. I also gained experience debugging routing issues, fixing incorrect CSS import paths, and correcting missing `return` statements in React components. These concepts strengthened my understanding of React application architecture and prepared me for developing larger and more scalable projects such as the Cycle Susa platform.