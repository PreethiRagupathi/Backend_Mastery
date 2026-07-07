# Day Learning: Fetch API & HTTP Methods

# 01-07-2026

## Overview

Today, I learned about **Fetch API**, how it works, and why it is preferred over **XMLHttpRequest (XHR)** for making HTTP requests in JavaScript.

## XMLHTTPRequest (XHR)

### Drawbacks of XHR

- Requires multiple steps and event handlers for basic operations.
- Can lead to callback hell in complex applications.
- Error handling is less intuitive.
- Does not provide built-in Promise support.
- More verbose compared to modern alternatives.

## Fetch API

### Why Fetch API?

- Modern replacement for XMLHttpRequest.
- Built on Promises.
- Native to modern browsers.
- Part of the JavaScript standard.
- Cleaner and more readable syntax.
- Better error handling.
- Easier to work with asynchronous operations.

## How Network Requests Work

1. The client sends an HTTP request to the server.
2. The server processes the request.
3. The server returns a response to the client.
4. The client handles and displays the received data.

## HTTP Methods

### GET

Retrieves data from a specified URL.

### POST

Sends new data to the server.

### PUT

Updates an existing resource completely.

### PATCH

Partially updates an existing resource.

### DELETE

Removes a resource from the server.

## Problem Solved

### GitHub User Search Application

Built a GitHub User Search application using Fetch API to:

- Search for GitHub users.
- Fetch user information from the GitHub API.
- Display user details dynamically on the webpage.

## Errors Faced

1. Forgot to convert the response using `response.json()`.
2. Encountered issues due to incorrect API URL formatting.
3. Faced difficulties handling failed API requests.
4. Initially struggled to understand the flow of asynchronous operations.

## How I Fixed Them

- Used `response.json()` to parse JSON data correctly.
- Corrected API endpoint URLs.
- Added `.catch()` blocks for error handling.
- Used browser developer tools and console logs for debugging.

## Key Learnings

- Difference between XMLHttpRequest and Fetch API.
- Promise-based asynchronous programming.
- Importance of proper error handling.
- Understanding HTTP request-response lifecycle.
- Practical usage of HTTP methods such as GET, POST, PUT, PATCH, and DELETE.
- Debugging API-related issues using browser tools.

[Githubusersearch.html](../Practicefolder/Githubusersearch.html)
