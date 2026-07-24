# 📅 Day 1 – NestJS REST API Fundamentals

## 📖 Overview

Today I started learning **NestJS** by building a simple **REST API**. Since I already understood API concepts and had experience testing APIs using **Postman**, today's focus was on understanding how NestJS organizes APIs using controllers and endpoints.

---

## 🎯 Learning Objectives

* Understand the structure of a NestJS project.
* Learn what a REST API resource is.
* Design RESTful endpoints.
* Create API endpoints using NestJS decorators.
* Test endpoints using Postman.

---

## 📚 Topics Covered

### 1. REST API

A REST API is a set of endpoints that allows applications to communicate using HTTP methods such as **GET, POST, PUT, and DELETE**.

### 2. Resource Design

A resource represents the data managed by an API. For today's practice, I used a **Book** resource.

Example Resource:

```json
{
  "id": 1,
  "title": "Java Basics",
  "author": "Kunal"
}
```

---

### 3. CRUD Endpoints

| Method | Endpoint   | Description              |
| ------ | ---------- | ------------------------ |
| GET    | /books     | Retrieve all books       |
| GET    | /books/:id | Retrieve a specific book |
| POST   | /books     | Create a new book        |
| PUT    | /books/:id | Update an existing book  |
| DELETE | /books/:id | Delete a book            |

---

### 4. NestJS Controllers

A **Controller** handles incoming HTTP requests and returns responses to the client.

Example:

```ts
@Controller('books')
export class BooksController {}
```

---

### 5. NestJS Decorators

#### GET

```ts
@Get()
findAll() {
    return "All Books";
}
```

#### POST

```ts
@Post()
create() {
    return "Book Created";
}
```

#### PUT

```ts
@Put(':id')
update() {
    return "Book Updated";
}
```

#### DELETE

```ts
@Delete(':id')
remove() {
    return "Book Deleted";
}
```

---

### 6. Testing with Postman

I tested all API endpoints using Postman by sending different HTTP requests and verifying the responses.

---

## 💡 Key Learnings

* Understood the purpose of REST APIs.
* Learned how to design RESTful resources.
* Created CRUD endpoints using NestJS decorators.
* Learned the role of controllers in handling requests.
* Practiced testing APIs using Postman.
* Understood how HTTP methods map to CRUD operations.

---

## 🚀 Mini Practice

Built a simple **Book Management REST API** with the following endpoints:

* `GET /books`
* `GET /books/:id`
* `POST /books`
* `PUT /books/:id`
* `DELETE /books/:id`

(Currently returning simple responses without a database.)

---

## 📝 Summary

Today's session introduced the fundamentals of building REST APIs with NestJS. I learned how controllers define routes, how HTTP methods are mapped using decorators, and how to test API endpoints with Postman. This provides a strong foundation for building more structured backend applications.

---

## 🔜 Next Learning

* NestJS Services
* Dependency Injection
* Business Logic
* Connecting Controllers with Services
* Returning real data instead of static responses
