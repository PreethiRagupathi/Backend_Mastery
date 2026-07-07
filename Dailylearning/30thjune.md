# 30/06/2026-JavaScript Promises, Async & Await

## Topics Covered

- Promise Basics
- Promise States (Pending, Fulfilled, Rejected)
- Promise Methods:
  - `Promise.all()`
  - `Promise.allSettled()`
  - `Promise.race()`
  - `Promise.any()`
  - `Promise.resolve()`

- `async` and `await`
- Error Handling with `.catch()` and `try...catch`

## Promise Example

```javascript
let mark = 45;

let examResult = new Promise((resolve, reject) => {
  if (mark >= 35) {
    resolve("You have passed");
  } else {
    reject("You have failed");
  }
});

examResult
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
```

## Promise.all()

```javascript
Promise.all([
  Promise.resolve("Task 1 completed"),
  Promise.resolve("Task 2 completed"),
  Promise.resolve("Task 3 completed"),
])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log(error);
  });
```

## Promise.allSettled()

```javascript
Promise.allSettled([
  Promise.resolve("Task 1 completed"),
  Promise.reject("Task 2 failed"),
  Promise.resolve("Task 3 completed"),
]).then((results) => {
  console.log(results);
});
```

## Promise.race()

```javascript
Promise.race([
  new Promise((resolve) => setTimeout(() => resolve("Task 1 finished"), 1000)),
  new Promise((resolve) => setTimeout(() => resolve("Task 2 finished"), 500)),
])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
```

## Promise.any()

```javascript
Promise.any([
  Promise.reject("Task 1 failed"),
  Promise.resolve("Task 2 completed"),
  Promise.resolve("Task 3 completed"),
])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
```

## Promise.resolve()

```javascript
Promise.resolve("Immediate success").then((value) => {
  console.log(value);
});
```

## Async and Await

```javascript
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Loaded");
    }, 2000);
  });
}

async function displayData() {
  try {
    let result = await getData();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

displayData();
```

## Challenges Faced

- Used semicolons (`;`) instead of commas (`,`) inside the `Promise.all()` array.
- Misspelled variable name (`messagr` instead of `message`).
- Used `Promise.resolve()` and `Promise.reject()` inside a custom Promise instead of `resolve()` and `reject()`.
- Learned that `Promise.all()` fails when even one promise is rejected.

## Key Takeaways

- Promises help handle asynchronous operations.
- `Promise.all()` requires all promises to succeed.
- `Promise.allSettled()` returns the result of every promise.
- `Promise.race()` returns the first settled promise.
- `Promise.any()` returns the first successful promise.
- `Promise.resolve()` creates an already fulfilled promise.
- `async/await` provides a cleaner way to work with Promises.
- `try...catch` is used to handle errors with `async/await`
