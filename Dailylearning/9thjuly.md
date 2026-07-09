# 09.07.2026

## useState Basics, Event Handling, and Form Management

Today, I learned one of the most important concepts in React: **State Management using the `useState` Hook**. Until now, the React applications I built displayed static content. With `useState`, I learned how to create dynamic and interactive user interfaces that automatically update whenever data changes.

---

# Understanding State in React

State is used to store data that can change during the lifetime of a component. Whenever a state value changes, React automatically re-renders the component and updates the UI.

### Syntax

```tsx
const [state, setState] = useState(initialValue);
```

Example:

```tsx
const [count, setCount] = useState(0);
```

Here:

- `count` stores the current value.
- `setCount` updates the value.
- `0` is the initial value.

React automatically updates the UI whenever `setCount()` is called.

---

# Event Handling in React

Events allow users to interact with the application. React provides event handlers that respond to user actions such as clicking buttons, typing in input fields, or submitting forms.

Common React Events:

- `onClick`
- `onChange`
- `onSubmit`

Example:

```tsx
<button onClick={() => console.log("Clicked")}>
  Click Me
</button>
```

When the button is clicked, the event handler executes the specified function.

---

# Practice 1: Community Membership Counter

To understand state updates and button events, I created a Cycling Community membership counter for the Cycle Susa application.

### Features Implemented

- Join Community
- Leave Community
- Reset Count
- Conditional Messages

### State Declaration

```tsx
const [count, setCount] = useState(0);
```

### Join Community

```tsx
setCount(count + 1);
```

### Leave Community

```tsx
if (count > 0) {
  setCount(count - 1);
}
```

This condition prevents the count from becoming negative.

### Reset Count

```tsx
setCount(0);
```

### Conditional Rendering

```tsx
{
  count === 0
    ? "No members yet"
    : `${count} cyclists joined the community`;
}
```

This was my first experience using React's conditional rendering capabilities.

---

# Understanding Controlled Components

A controlled component is a form element whose value is controlled by React state.

Example:

```tsx
<input
  type="text"
  value={name}
  onChange={(event) =>
    setName(event.target.value)
  }
/>
```

Flow:

```text
User Types
      ↓
onChange Event
      ↓
State Updates
      ↓
React Re-renders
      ↓
Updated UI
```

Controlled components ensure that React always has access to the latest user input.

---

# Practice 2: Cycle Susa Service Booking Form

To apply useState and event handling concepts, I created a Service Booking Form for the Cycle Susa project.

The form collects:

- Customer Name
- Cycle Type
- Problem Description

### State Variables

```tsx
const [name, setName] = useState("");
const [cycleType, setCycleType] = useState("");
const [problem, setProblem] = useState("");
const [submitted, setSubmitted] = useState(false);
```

Each input field is connected to a state variable.

---

# Handling User Input

### Customer Name

```tsx
<input
  type="text"
  value={name}
  onChange={(event) =>
    setName(event.target.value)
  }
  required
/>
```

### Cycle Type

```tsx
<input
  type="text"
  value={cycleType}
  onChange={(event) =>
    setCycleType(event.target.value)
  }
  required
/>
```

### Problem Description

```tsx
<input
  type="text"
  value={problem}
  onChange={(event) =>
    setProblem(event.target.value)
  }
  required
/>
```

As users type, React updates the corresponding state variables.

---

# Form Submission

I learned how React handles form submissions using the `onSubmit` event.

### Form

```tsx
<form onSubmit={handleSubmit}>
```

### Submit Function

```tsx
const handleSubmit = (
  event: React.FormEvent<HTMLFormElement>
) => {
  event.preventDefault();
  setSubmitted(true);
  alert("Booking Submitted Successfully");
};
```

### Key Concepts

#### event.preventDefault()

```tsx
event.preventDefault();
```

Prevents the browser from refreshing the page after form submission.

#### setSubmitted(true)

```tsx
setSubmitted(true);
```

Updates the submission state and triggers conditional rendering.

#### Alert Message

```tsx
alert("Booking Submitted Successfully");
```

Displays a confirmation message to the user.

---

# Conditional Rendering

I learned how React can display content based on conditions.

Example:

```tsx
{submitted && (
  <div>
    <h2>Booking Details</h2>
  </div>
)}
```

If `submitted` is true, React displays the booking details. Otherwise, the section remains hidden.

This helped me understand how React dynamically controls what appears on the screen.

---

# Displaying Booking Details

After submission, the entered information is displayed.

```tsx
{submitted && (
  <div>
    <h2>Booking Details</h2>
    <p>Customer Name: {name}</p>
    <p>Cycle Type: {cycleType}</p>
    <p>Problem Description: {problem}</p>
  </div>
)}
```

This demonstrates how state values can be rendered dynamically in the UI.

---

# Clear Form Functionality

I also implemented a Clear Form button to reset the application state.

Example:

```tsx
setName("");
setCycleType("");
setProblem("");
setSubmitted(false);
```

This restores the form to its initial state and removes the booking details from the screen.

---

# Errors Faced and Solutions

## Issue 1: Negative Community Count

Problem:

```tsx
setCount(count - 1);
```

The count continued decreasing below zero.

Solution:

```tsx
if (count > 0) {
  setCount(count - 1);
}
```

This prevents invalid negative values.

---

## Issue 2: Trying to Render JSX Inside Event Handler

Incorrect:

```tsx
else {
  <h2>No Members Yet</h2>
}
```

Reason:

React only renders JSX returned from the component's `return()` method.

Solution:

Used conditional rendering:

```tsx
{
  count === 0
    ? "No members yet"
    : `${count} cyclists joined the community`;
}
```

---

## Issue 3: Submit Button Alignment

Initially, the button was not centered.

Solution:

Used a wrapper div with Flexbox or auto margins to center the button correctly.

---

# Learning Outcome

By the end of this session, I gained a strong understanding of React's `useState` hook, event handling, controlled components, form management, conditional rendering, and state-driven UI updates. Through practical implementation in the Cycle Susa project, I built a Community Membership Counter and a Service Booking Form, which helped me understand how React applications respond to user interactions and manage dynamic data. These concepts form the foundation for creating interactive and real-world React applications.