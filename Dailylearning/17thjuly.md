# 17.07.2026

# API Integration in React, Data Fetching, Loading & Error States

## Objective

Today's objective was to understand how React applications fetch data from external APIs and display it dynamically. I learned the concepts behind API integration, the purpose of the `fetch()` function, the role of `useEffect()` in making API calls, how to manage fetched data using `useState()`, and the importance of handling loading and error states.

---

## Topics Covered

### 1. What is an API?

I learned that an API (Application Programming Interface) acts as a bridge between a React application and a server. Instead of storing all the data inside the application, React requests data from an API whenever it is needed.

---

### 2. Why APIs are Used

I understood that hardcoding data is suitable only for small applications. Real-world applications fetch data from servers because it changes frequently and needs to stay up to date.

---

### 3. The `fetch()` Function

I learned that JavaScript provides the `fetch()` function to send HTTP requests to an API.

Example:

```tsx
fetch("https://jsonplaceholder.typicode.com/posts");
```

The server responds with data, usually in JSON format.

---

### 4. Why `useEffect()` is Used

I understood that API calls should be placed inside `useEffect()` with an empty dependency array so that the request is made only once when the component is first rendered.

```tsx
useEffect(() => {
  // API Call
}, []);
```

---

### 5. Managing API Data with `useState()`

I learned that the data received from an API is stored inside React state using `useState()`.

Example:

```tsx
const [posts, setPosts] = useState([]);
```

---

### 6. Converting the Response to JSON

I learned that the response returned by `fetch()` must be converted into JSON before it can be used.

```tsx
const data = await response.json();
```

---

### 7. Loading State

I understood why applications display a loading message while waiting for data from an API.

Example:

```tsx
const [loading, setLoading] = useState(true);
```

---

### 8. Error State

I learned the importance of handling errors that may occur due to network failures or server issues.

Example:

```tsx
const [error, setError] = useState("");
```

---

### 9. Displaying API Data

I understood that after storing the fetched data in state, it can be displayed dynamically using the `map()` function.

---

## Learning Summary

Today I focused on understanding the complete workflow of fetching data in React.

I learned:

- What an API is.
- Why APIs are used in React applications.
- How the `fetch()` function works.
- Why API calls are placed inside `useEffect()`.
- How `useState()` stores fetched data.
- The importance of converting responses into JSON.
- Why loading and error states improve user experience.
- How fetched data is displayed dynamically using `map()`.

---

## Key Takeaways

- APIs provide dynamic data to React applications.
- `fetch()` is used to send HTTP requests.
- `useEffect()` prevents unnecessary API calls during re-renders.
- `useState()` stores API responses.
- `response.json()` converts the response into usable data.
- Loading and error states improve the overall user experience.
- Understanding the API workflow is essential before implementing it in a project.

---

## Next Step

In the next session, I will implement API fetching in my React project by creating a new page, fetching data from an API, displaying the data, and handling loading and error states.