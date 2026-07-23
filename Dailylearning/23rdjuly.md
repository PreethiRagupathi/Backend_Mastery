# 23.07.2026

# REST API Design, HTTP Status Codes & DTOs

## Objective

Today's objective was to understand REST API design principles, HTTP methods, HTTP status codes, and the concept of Data Transfer Objects (DTOs) in NestJS. I learned how REST APIs are designed, why validation is important, and how DTOs help ensure that only valid data is accepted by the backend.

---

## Topics Covered

### 1. REST API Design

- Learned that REST stands for Representational State Transfer.
- Understood that APIs should be resource-based.
- Learned that endpoint names should use nouns instead of verbs.
- Understood that HTTP methods define the action performed on a resource.

Examples:

- GET /booking
- POST /booking
- PUT /booking/1
- DELETE /booking/1

---

### 2. HTTP Methods

Learned the purpose of common HTTP methods.

- GET – Retrieve data
- POST – Create new data
- PUT – Update existing data
- PATCH – Partially update data
- DELETE – Remove data

---

### 3. HTTP Status Codes

Learned the meaning of common status codes.

- 200 OK – Request completed successfully
- 201 Created – Resource created successfully
- 400 Bad Request – Invalid client request
- 404 Not Found – Requested resource does not exist
- 500 Internal Server Error – Unexpected server-side error

---

### 4. Data Transfer Object (DTO)

Learned that DTO stands for Data Transfer Object.

A DTO defines the structure and validation rules for data received from the client before it reaches the business logic.

It helps prevent invalid or incorrect data from entering the application.

---

### 5. Validation Packages

Learned the purpose of the following packages:

- class-validator – Validates incoming data using decorators.
- class-transformer – Converts incoming JSON into DTO objects so validation can be performed.

---

## Key Takeaways

- REST APIs should use resource-based URLs.
- HTTP methods determine the action performed on a resource.
- Status codes indicate whether a request was successful or failed.
- DTOs improve data validation and application reliability.
- Validation packages help ensure only valid data reaches the backend.