# 21.07.2026

# Introduction to Node.js, npm & NestJS

## Objective

Today's objective was to understand the fundamentals of backend development using Node.js and NestJS. I learned why backend development is necessary, how Node.js enables JavaScript to run outside the browser, how npm manages project dependencies, and how to set up and run a NestJS application. I also explored the core architecture of NestJS by understanding the roles of Modules, Controllers, and Services.

---

## Topics Covered

### 1. Introduction to Node.js

- Learned what Node.js is.
- Understood that Node.js allows JavaScript to run outside the browser.
- Learned why Node.js is widely used for backend development.
- Explored how Node.js handles server-side operations such as processing requests, interacting with databases, and creating APIs.

---

### 2. Frontend vs Backend

Understood the responsibilities of frontend and backend applications.

**Frontend**
- Builds the user interface.
- Handles user interactions.
- Runs inside the browser.

**Backend**
- Handles business logic.
- Processes requests from the frontend.
- Connects with databases.
- Sends responses back to the client.

---

### 3. npm (Node Package Manager)

Learned the purpose of npm.

- Installing packages.
- Managing project dependencies.
- Running project scripts.
- Understanding the importance of the `package.json` file.

Common commands practiced:

```bash
npm install
npm run start
npm run start:dev
```

---

### 4. Installing NestJS CLI

Installed the NestJS Command Line Interface globally.

```bash
npm install -g @nestjs/cli
```

Verified the installation using:

```bash
nest --version
```

---

### 5. Creating a NestJS Project

Created a new NestJS project using:

```bash
nest new cycle-susa-backend
```

Selected **npm** as the package manager and allowed NestJS to install all required dependencies automatically.

---

### 6. Running the Development Server

Started the NestJS application using:

```bash
npm run start:dev
```

Verified that the application was successfully running on:

```
http://localhost:3000
```

Observed the default **Hello World!** response in the browser.

---

### 7. Understanding the NestJS Project Structure

Explored the important files inside the `src` folder.

#### `main.ts`

- Entry point of the application.
- Creates the NestJS application.
- Starts the server.

#### `app.module.ts`

- Root module of the application.
- Registers controllers and providers.
- Acts as the central module.

#### `app.controller.ts`

- Handles incoming HTTP requests.
- Defines application routes.
- Calls the appropriate service methods.

#### `app.service.ts`

- Contains the application's business logic.
- Returns data requested by controllers.

---

### 8. Request Flow in NestJS

Learned how a client request is processed.

```
Browser
   ↓
main.ts
   ↓
AppModule
   ↓
AppController
   ↓
AppService
   ↓
Response
```

This helped me understand the overall architecture and execution flow of a NestJS application.

---

### 9. Creating a Custom Endpoint

Modified the default application by creating a custom API endpoint.

Implemented:

- A new method inside `AppService`.
- A corresponding route inside `AppController`.

Verified the endpoint successfully in the browser.

---

## Project Work Completed

- Installed Node.js and verified the environment.
- Learned the basics of npm and package management.
- Installed the NestJS CLI.
- Created the `cycle-susa-backend` project.
- Explored the NestJS folder structure.
- Ran the NestJS development server successfully.
- Understood the responsibilities of Modules, Controllers, and Services.
- Learned the complete request flow inside a NestJS application.
- Created and tested a custom API endpoint.

---

## Mistakes Made and Corrections

### Mistake 1

Initially confused the responsibilities of the frontend and backend.

**Correction:** Understood that the frontend manages the user interface while the backend handles business logic, APIs, and database interactions.

---

### Mistake 2

Initially assumed that NestJS works independently.

**Correction:** Learned that NestJS is a backend framework built on top of Node.js and uses Node.js as its runtime environment.

---

### Mistake 3

Initially viewed Modules, Controllers, and Services as unrelated files.

**Correction:** Understood how they work together to process incoming requests and generate responses.

---

## Key Takeaways

- Node.js allows JavaScript to execute outside the browser.
- npm simplifies dependency management and project scripting.
- Backend applications process business logic and communicate with databases.
- NestJS provides a structured architecture for backend development.
- `main.ts` starts the application.
- Modules organize application components.
- Controllers receive HTTP requests.
- Services contain business logic.
- Requests flow through Module → Controller → Service before sending a response.
- Creating custom endpoints is the foundation of building REST APIs in NestJS.
```