# 15.07.2026

# React Router & Programmatic Navigation

## Objective

Today's objective was to understand how navigation works in React applications using **React Router**. I learned how to configure routes, navigate between different pages programmatically using the `useNavigate()` hook, and connect buttons with different pages in my existing **Cycle Susa** project. I also understood the difference between **route paths** and **component names**.

---

# 1. Understanding React Router

React Router is a library that enables navigation between different pages in a React application **without refreshing the browser**.

Unlike traditional websites, React applications are **Single Page Applications (SPA)**, where only the required component changes while the entire page is not reloaded.

To enable routing, I defined different routes inside the `Routes` component.

### Example

```tsx
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/services" element={<Services />} />
    <Route path="/about" element={<About />} />
    <Route path="/community" element={<Handlepeople />} />
    <Route path="/booking" element={<ServiceBooking />} />
</Routes>
```

### Benefits of React Router

- Enables smooth page navigation.
- Prevents full page reloads.
- Improves user experience.
- Organizes applications into multiple pages.
- Makes large applications easier to manage.

---

# 2. Understanding the `useNavigate()` Hook

The `useNavigate()` hook is provided by React Router to navigate between pages programmatically.

Instead of clicking a navigation link, pages can be changed after a button click, form submission, or any JavaScript event.

### Example

```tsx
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
```

Once the hook is initialized, navigation can be performed by calling the `navigate()` function.

---

# 3. Navigating Between Pages

The `navigate()` function accepts the **route path** as its argument.

### Example

```tsx
navigate("/booking");
```

### Working

1. User clicks the button.
2. The click event executes the `navigate()` function.
3. React Router searches for the matching route.
4. The corresponding component is displayed.
5. The page changes without refreshing the browser.

---

# 4. Route Path vs Component Name

One important concept I learned today is that the value passed to `navigate()` should be the **route path**, not the component name.

### Route Definition

```tsx
<Route path="/booking" element={<ServiceBooking />} />
```

### ✅ Correct

```tsx
navigate("/booking");
```

### ❌ Incorrect

```tsx
navigate("/ServiceBooking");
```

The component name (`ServiceBooking`) and the route path (`/booking`) are different. React Router only recognizes the route path defined inside the `Route` component.

---

# 5. Button Navigation

I connected the **Book Service** button with the booking page using the `onClick` event.

### Example

```tsx
<button onClick={() => navigate("/booking")}>
    Book Service
</button>
```

When the button is clicked, the application navigates directly to the booking page without refreshing the browser.

---

# 6. Home Page Navigation

I also learned how to navigate back to the Home page.

If the Home page route is defined as:

```tsx
<Route path="/" element={<Home />} />
```

Then the homepage can be opened using:

```tsx
navigate("/");
```

This returns the user to the main page of the application.

---

# 7. Practical Implementation

During today's practice, I enhanced the existing **Cycle Susa** project.

## Home Page

### Implemented

- Connected the **Book Service** button.
- Navigated users to the Service Booking page.
- Tested navigation between different pages.

## Routing

### Implemented

- Verified all route paths.
- Matched navigation paths with route definitions.
- Improved the application's navigation flow.

---

# 8. Concepts Understood

Today I gained a clear understanding of:

- React Router
- Routes
- Route Paths
- `useNavigate()` Hook
- Programmatic Navigation
- Button Click Events
- Home Page Navigation
- Component Name vs Route Path
- Single Page Applications (SPA)

---

# 9. Mistakes I Made

## Mistake 1

Initially, I used the component name inside `navigate()`.

### ❌ Incorrect

```tsx
navigate("/ServiceBooking");
```

### ✅ Correct

```tsx
navigate("/booking");
```

I learned that React Router only recognizes the route path defined in the `Route` component.

---

## Mistake 2

I was confused about how to navigate back to the Home page.

After understanding the route configuration, I learned that:

```tsx
navigate("/");
```

takes the user to the Home page.

---

## Mistake 3

Initially, I assumed the route path and component name should always be the same.

Later, I understood that they can be different, but the path used inside `navigate()` must exactly match the route definition.

---

# 10. Key Learning Outcomes

Today's learning helped me understand:

- How React Router manages page navigation.
- How to use the `useNavigate()` hook.
- The difference between component names and route paths.
- Programmatic navigation using button clicks.
- Configuring routes in React applications.
- Building a better navigation experience without page refreshes.

---

# 11. Summary

Today's session strengthened my understanding of routing and navigation in React applications. I learned how React Router enables seamless page transitions using route definitions and how the `useNavigate()` hook allows programmatic navigation through events such as button clicks. I also understood the importance of using the correct route path instead of the component name when navigating between pages. By implementing these concepts in my **Cycle Susa** project, I successfully connected the Home page with the Service Booking page and improved the overall navigation flow of the application. These concepts provide a strong foundation for upcoming React topics such as nested routing, protected routes, passing data between pages, and state management.