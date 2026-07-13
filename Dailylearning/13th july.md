# 13 th July 2026 – React `useEffect`, Rendering, Side Effects & Cleanup

## Objective

Today's objective was to understand React's `useEffect` Hook in depth, learn how React renders components, explore the concept of side effects, understand the importance of the dependency array, learn cleanup functions, and implement these concepts practically in the existing **Cycle Susa** project.

---

# 1. React Component Rendering

Before learning `useEffect`, I first understood the concept of **rendering** because `useEffect` depends on it.

A React application is built using **components**. Each component is usually created in a separate `.tsx` file and contains a function that returns JSX.

Example:

```tsx
function About() {
    return (
        <h1>About Cycle Susa</h1>
    );
}
```

Rendering **does not mean loading the JSX/TSX file**.

Rendering means:

- React executes the component function.
- React reads the returned JSX.
- React converts JSX into HTML.
- React displays or updates the UI in the browser.

### Initial Render

The first time React displays the component on the browser.

Flow:

```
Application Starts
        ↓
React Executes Component
        ↓
Reads JSX
        ↓
Displays UI
```

### Re-render

Whenever a component's **state** or **props** change, React executes the component again and updates the UI.

Example:

```
User Clicks Mountain Bike
        ↓
selectedCycle changes
        ↓
React Re-renders Component
        ↓
Browser Updates UI
```

---

# 2. Understanding React Hooks

React Hooks are special functions that allow functional components to use React features such as state and lifecycle methods.

Hooks learned so far:

- useState
- useEffect

---

# 3. Revising `useState`

`useState` is used to store and update data inside a component.

Syntax:

```tsx
const [selectedCycle, setSelectedCycle] = useState("No cycle selected");
```

- `selectedCycle` → Current value
- `setSelectedCycle()` → Updates the value

Whenever the value changes,

React automatically re-renders the component.

---

# 4. Understanding `useEffect`

`useEffect` is a built-in React Hook.

It is used to perform **side effects** after a component has rendered.

Syntax:

```tsx
useEffect(() => {

});
```

React always executes the component first.

Only after rendering is completed does `useEffect` execute.

Flow:

```
Component Executes
        ↓
Browser Displays UI
        ↓
useEffect Executes
```

---

# 5. What are Side Effects?

A side effect is any task that happens after rendering which is not directly responsible for displaying the UI.

Examples include:

- Fetching API data
- Updating browser title
- Showing alerts
- Logging values
- Starting timers
- Removing timers
- Adding event listeners
- Saving data to Local Storage
- Connecting to servers

---

# 6. Dependency Array

The dependency array tells React **when** the effect should execute.

## Without Dependency Array

```tsx
useEffect(() => {
    console.log(selectedCycle);
});
```

Behaviour:

- Runs after the first render.
- Runs after every re-render.
- Runs whenever any state changes.

---

## Empty Dependency Array

```tsx
useEffect(() => {
    console.log(selectedCycle);
}, []);
```

Behaviour:

- Runs only once.
- Executes after the initial render.

Commonly used for:

- API Fetching
- Initial setup
- Loading application data

---

## Dependency Array with Specific State

```tsx
useEffect(() => {
    console.log(selectedCycle);
}, [selectedCycle]);
```

Behaviour:

Runs:

- Initial render
- Whenever `selectedCycle` changes

Does not execute when unrelated state variables change.

---

# 7. Why Dependency Array is Important

Without the dependency array,

React executes the effect after every render.

This causes unnecessary execution.

By providing dependencies,

React runs the effect only when those values change.

This improves performance and avoids unnecessary operations.

---

# 8. Cleanup Function

Cleanup removes unnecessary work before a component is removed or before an effect runs again.

Syntax:

```tsx
useEffect(() => {

    // Start timer

    return () => {

        // Cleanup

    };

}, []);
```

Cleanup is useful for:

- Clearing timers
- Removing event listeners
- Closing WebSocket connections
- Preventing memory leaks

---

# 9. Practical Implementation

## CycleSelector Component

Implemented:

- Four cycle selection buttons
- Reset button
- State management using `useState`
- Browser title update
- Console logging
- `useEffect` with dependency array

Example:

```tsx
useEffect(() => {
    console.log(selectedCycle);
    document.title = selectedCycle;
}, [selectedCycle]);
```

---

## Community Component

Implemented:

- Member counter
- Join button
- Leave button
- Reset button
- Prevented negative values
- Triggered side effects whenever member count changed

---

## Customer Booking Component

Implemented:

- Booking form
- Controlled components
- Submit functionality
- Reset functionality
- Alerts
- State updates

---

# 10. Relationship Between `useState` and `useEffect`

`useState` stores data.

When data changes,

React re-renders the component.

After rendering,

`useEffect` executes.

Flow:

```
State Changes
        ↓
Component Re-renders
        ↓
Browser Updates UI
        ↓
useEffect Executes
```

---

# 11. Real-Life Uses of `useEffect`

- Fetching API data
- Updating page title
- Showing notifications
- Saving data automatically
- Running timers
- Listening to keyboard events
- Window resize events
- Theme switching
- Authentication checks

---

# 12. Mistakes I Made

### Mistake 1

Initially thought rendering meant loading a JSX or TSX file.

Correction:

Rendering means React executes the component and displays the returned JSX on the browser.

---

### Mistake 2

Thought every TSX file automatically becomes a React component.

Correction:

A TSX file is a React component only if it contains a component function that returns JSX.

---

### Mistake 3

Believed `useEffect` was only for API fetching.

Correction:

`useEffect` is used for all kinds of side effects, including:

- API fetching
- Alerts
- Console logs
- Browser title updates
- Timers
- Event listeners

---

### Mistake 4

Forgot the dependency array.

Result:

`useEffect` executed after every render.

Correction:

Used:

```tsx
[selectedCycle]
```

to execute the effect only when the selected cycle changes.

---

### Mistake 5

Expected `console.log()` output to appear on the webpage.

Correction:

`console.log()` output appears only in the browser's Developer Console (F12 → Console).

---

### Mistake 6

Ran npm commands outside the React project folder.

Result:

```
Could not read package.json
```

Correction:

Always navigate to the project folder containing `package.json` before running:

```bash
npm install
npm run dev
```

---

# 13. Key Learning Outcomes

Today I successfully understood:

- React Components
- Rendering
- Initial Render
- Re-render
- React Hooks
- useState
- useEffect
- Side Effects
- Dependency Array
- Cleanup Function
- Browser Title Manipulation
- Console Logging
- Alerts
- Component Lifecycle
- Relationship between useState and useEffect
- Practical implementation inside the Cycle Susa project
- Common beginner mistakes and their solutions

---

# 14. Summary

Today's learning strengthened my understanding of one of the most important concepts in React: **rendering** and the **`useEffect` Hook**. I learned that rendering is the process where React executes a component and displays the returned JSX in the browser. I understood that `useEffect` is used to perform side effects after rendering, such as fetching data, updating the browser title, logging information, handling timers, and responding to state changes. I also explored how dependency arrays control when an effect runs and why cleanup functions are necessary to prevent memory leaks. By implementing these concepts in my existing **Cycle Susa** project, I gained practical experience using `useState` and `useEffect` together, making my understanding of React much stronger and preparing me for upcoming topics like API integration and advanced state management.