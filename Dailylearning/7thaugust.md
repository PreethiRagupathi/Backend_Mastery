# 07.08.2026

# Full-Stack Slice using NestJS, Prisma & PostgreSQL

## Objective

Today's objective was to build a complete backend CRUD application using NestJS, Prisma ORM, and PostgreSQL. The goal was to understand how a request flows through the Controller, Service, Prisma, and Database layers while implementing Create, Read, Update, and Delete operations.

---

## NestJS Project Setup

I created a new NestJS project and generated the required module, controller, and service for the Student Management system using the Nest CLI. This provided a clean project structure following NestJS's modular architecture.

### Learned
- Purpose of Modules, Controllers, and Services.
- How NestJS organizes application logic using a modular structure.
- Importance of separating request handling from business logic.

---

## Prisma Integration with PostgreSQL

I integrated Prisma ORM with the NestJS application and connected it to a PostgreSQL database. I configured the Prisma schema, generated the Prisma Client, and created the database migration to synchronize the Student model with the database.

### Learned
- How Prisma acts as an ORM between NestJS and PostgreSQL.
- Configuring the datasource using the `DATABASE_URL` environment variable.
- Generating the Prisma Client.
- Creating database tables using Prisma Migrations.

---

## Student Model

I created the Student model with the following fields:
- id
- name
- department
- email

The `id` field is automatically generated, and the `email` field is unique to prevent duplicate student records.

### Learned
- Defining database models using Prisma Schema.
- Using primary keys and unique constraints.
- Mapping models to database tables.

---

## DTO (Data Transfer Object)

I created DTO classes to define the structure of incoming request data for creating and updating student records.

### Learned
- Purpose of DTOs in NestJS.
- How DTOs improve code organization.
- Difference between Create DTO and Update DTO.

---

## CRUD API Development

I implemented all CRUD operations using Prisma inside the Student Service.

### Create
Created a new student record and stored it in PostgreSQL.

### Read
Retrieved all student records and fetched individual students using their ID.

### Update
Modified existing student details using the student's unique ID.

### Delete
Removed a student record from the database.

### Learned
- Using Prisma methods such as `create()`, `findMany()`, `findUnique()`, `update()`, and `delete()`.
- Passing data from Controller to Service.
- Interacting with PostgreSQL through Prisma.

---

## API Testing

I tested every endpoint using Postman to verify the CRUD operations.

Endpoints Tested:
- POST /student
- GET /student
- GET /student/:id
- PATCH /student/:id
- DELETE /student/:id

### Learned
- Sending JSON request bodies.
- Testing REST APIs.
- Verifying database changes after each operation.

---

## Challenges Faced

During implementation, I initially used Prisma 7, which introduced driver adapter requirements that caused application startup errors. After identifying the issue, I switched to Prisma 6, corrected the Prisma configuration, updated the database connection string, regenerated the Prisma Client, and successfully completed the CRUD application.

### Key Learnings
- Difference between Prisma 6 and Prisma 7 configuration.
- Importance of correct environment variable configuration.
- Understanding Prisma migration and client generation.
- Debugging configuration and dependency-related errors.

---

## Overall Learning

Today's session helped me understand the complete backend request flow in a NestJS application:

**Client → Controller → Service → Prisma → PostgreSQL → Response**

I also learned how NestJS modules work together, how Prisma communicates with PostgreSQL, how REST APIs are implemented, and how CRUD operations are performed using an ORM. This practical implementation strengthened my understanding of backend architecture, database integration, and API development using NestJS and Prisma.