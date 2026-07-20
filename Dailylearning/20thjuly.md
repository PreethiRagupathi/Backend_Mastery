````md
# 20.07.2026

# API Integration in React – Fetching Data Using `fetch()`

## Objective

Today's objective was to understand how React applications fetch data from external APIs and display it dynamically. I learned how to use the `fetch()` API inside `useEffect()`, manage loading and error states using `useState()`, and render API data using the `map()` method.

---

## Topics Covered

### 1. Introduction to APIs

- Understood what an API (Application Programming Interface) is.
- Learned that APIs allow React applications to communicate with servers and retrieve data.
- Used the free JSONPlaceholder API for practice.

API Used:

```
https://jsonplaceholder.typicode.com/posts
```

---

### 2. Fetching Data

Learned how to fetch data from an API using the `fetch()` function.

```tsx
fetch("https://jsonplaceholder.typicode.com/posts")
```

Understood that `fetch()` returns a Promise and does not immediately return the actual data.

---

### 3. Using `useEffect()`

Learned why API calls should be placed inside `useEffect()`.

```tsx
useEffect(() => {
  // API Call
}, []);
```

Understood that the empty dependency array (`[]`) ensures the API is called only once when the component is first rendered.

---

### 4. Converting Response to JSON

Learned that the response received from `fetch()` is not directly usable.

```tsx
response.json()
```

This converts the response into JavaScript objects.

---

### 5. Managing Component State

Created separate state variables for:

- Posts data
- Loading state
- Error state

```tsx
const [posts, setPosts] = useState<Post[]>([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
```

---

### 6. Loading State

Displayed a loading message while waiting for the API response.

```tsx
if (loading) {
  return <h2>Loading...</h2>;
}
```

This improves the user experience by informing users that data is being fetched.

---

### 7. Error Handling

Handled possible API failures using `.catch()`.

```tsx
.catch((error: Error) => {
  setError(error.message);
});
```

Displayed the error message if the API request failed.

---

### 8. Displaying API Data

Used `map()` to iterate through the fetched posts and display them.

```tsx
posts.map((post) => (
  ...
))
```

Learned that React creates one UI element for every object inside the array.

---

### 9. Using `slice()`

Displayed only the first 10 posts.

```tsx
posts.slice(0, 10)
```

Understood that `slice(start, end)` returns only the selected portion of an array.

---

### 10. TypeScript Types

Created a custom type for API data.

```tsx
type Post = {
  id: number;
  title: string;
  body: string;
};
```

Used the type inside `useState()` for better type safety.

---

## Project Work Completed

- Created a new `Posts` page.
- Connected the page using React Router.
- Added a navigation link in the Navbar.
- Fetched posts from the JSONPlaceholder API.
- Implemented loading and error handling.
- Displayed the first 10 posts dynamically.
- Used TypeScript types for API data.
- Reviewed how `map()` and `slice()` work together to render lists.

---

## Mistakes Made and Corrections

### Mistake 1

Initially placed `useEffect()` outside the component.

**Correction:** Moved `useEffect()` inside the `Posts` component.

---

### Mistake 2

Forgot to stop the loading state after the API call.

**Correction:** Added:

```tsx
setLoading(false);
```

inside both success and error cases.

---

### Mistake 3

Did not define a TypeScript type for the fetched data.

**Correction:** Created a `Post` type and updated the state to:

```tsx
const [posts, setPosts] = useState<Post[]>([]);
```

---

### Mistake 4

Faced a routing issue where the `Posts` page was not displayed.

**Correction:** Reviewed the React Router configuration, verified the route and Navbar link, and debugged the routing setup.

---

## Key Takeaways

- APIs are used to retrieve external data.
- `fetch()` returns a Promise.
- `useEffect()` is the appropriate place for API calls.
- `response.json()` converts API responses into JavaScript objects.
- Separate state variables help manage data, loading, and errors.
- Conditional rendering improves user experience.
- `map()` converts arrays into React components.
- `slice()` limits the displayed data.
- TypeScript improves type safety when working with API responses.
- React Router routes and navigation must be configured correctly for new pages.
````
