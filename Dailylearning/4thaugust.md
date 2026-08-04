# Day 8 – Building a Product CRUD API with NestJS, Prisma & PostgreSQL

## Date

04 August 2026

---

# Objective

The objective of today's learning was to develop a complete Product CRUD (Create, Read, Update, Delete) REST API using NestJS, integrate it with a PostgreSQL database through Prisma ORM, and verify each API endpoint using Postman. The session also focused on understanding how the different components of a NestJS application—including Modules, Controllers, Services, DTOs, and Prisma—work together to build a structured, scalable, and maintainable backend application.

---

# Topics Covered

## Prisma ORM Integration

Integrated Prisma ORM into the NestJS project to simplify communication with the PostgreSQL database. Learned that Prisma acts as an Object Relational Mapper (ORM), allowing database operations to be performed using TypeScript methods instead of manually writing SQL queries. Understood how Prisma automatically generates database queries based on the schema and provides type-safe methods for interacting with database tables.

---

## PostgreSQL Database Connection

Configured the application to communicate with PostgreSQL by defining the database connection string inside the `.env` file and referencing it through the Prisma configuration. Understood the importance of environment variables in securely storing sensitive information such as database credentials without exposing them inside the source code.

---

## Prisma Schema Design

Created the `Product` model inside the `schema.prisma` file by defining the table structure, columns, data types, and primary key.

The Product model contains:

- Product ID
- Product Name
- Product Price

Learned that the `schema.prisma` file acts as the blueprint of the database. Every table that needs to exist in PostgreSQL must first be defined inside this schema before Prisma can generate or update the database structure.

---

## Database Migration

Applied Prisma migrations to synchronize the Prisma schema with the PostgreSQL database. Learned that migrations automatically generate SQL scripts based on schema changes and create or update database tables while maintaining a migration history. Understood that migrations ensure the application's database structure remains synchronized across different development environments.

---

## Prisma Client Generation

Generated the Prisma Client after completing the database migration. Learned that Prisma Client is automatically generated based on the models defined inside the Prisma schema and provides type-safe methods for database operations such as:

- Create
- Read
- Update
- Delete

This eliminates the need to manually write SQL queries for common database operations.

---

## Prisma Module

Created a dedicated `PrismaModule` to manage database connectivity throughout the application. Learned that separating Prisma into its own module promotes code reusability and enables other modules to access the database through Dependency Injection instead of creating multiple database connections.

---

## Prisma Service

Implemented the `PrismaService` by extending the generated `PrismaClient`. Learned that this service is responsible for establishing the database connection and exposing Prisma's database methods throughout the application. Exporting the service from the Prisma Module allows other feature modules to reuse the same database connection.

---

## Product Module

Created a dedicated Product Module to organize all Product-related files into a single feature. Understood that NestJS follows a modular architecture where every feature is separated into its own module, improving scalability, readability, and maintainability of the application.

---

## Product Controller

Implemented the Product Controller to handle incoming HTTP requests. Learned that the Controller acts as the entry point of the application by receiving requests from clients, extracting request data, and forwarding the request to the appropriate Service for processing.

Implemented the following REST API endpoints:

- POST `/product`
- GET `/product`
- GET `/product/:id`
- PATCH `/product/:id`
- DELETE `/product/:id`

---

## Product Service

Implemented the Product Service to contain the application's business logic. Learned that the Service layer should contain all database-related operations while keeping Controllers responsible only for handling HTTP requests and responses.

Implemented the following operations:

- Create Product
- Retrieve All Products
- Retrieve Product by ID
- Update Product
- Delete Product

---

## Data Transfer Object (DTO)

Created a `CreateProductDto` to define the structure of incoming product data. Learned that DTOs establish a consistent data format between the client and server and improve code maintainability by centralizing the request structure in a dedicated file.

---

## Dependency Injection

Understood how Dependency Injection works in NestJS by injecting `PrismaService` into the Product Service. Learned that Dependency Injection allows services to reuse existing objects instead of manually creating new instances, improving modularity and reducing code duplication.

---

## API Testing with Postman

Validated every CRUD endpoint using Postman by sending HTTP requests with JSON data and verifying the responses received from PostgreSQL. Successfully confirmed that records were inserted, retrieved, updated, and deleted correctly through the REST API.

---

# Challenges Faced & Solutions

## Incorrect Prisma Configuration

Initially configured the Prisma datasource incorrectly, which prevented the application from connecting to PostgreSQL. Resolved the issue by correctly configuring the `DATABASE_URL` environment variable and referencing it properly in the Prisma configuration.

---

## Prisma Version Compatibility

Faced compatibility issues while using Prisma v7, which caused client generation and import errors. Resolved the problem by installing a compatible Prisma version and regenerating the Prisma Client.

---

## Incorrect Prisma Client Import

Initially imported the Prisma Client from an incorrect location, resulting in module resolution errors. Corrected the import by using the Prisma Client generated inside the project's `node_modules`.

---

## Dependency Injection Error

Encountered an error stating that `PrismaService` could not be resolved inside the Product Module. Resolved this by exporting `PrismaService` from `PrismaModule` and importing `PrismaModule` into `ProductModule`.

---

## Module Registration Issues

Faced compilation errors due to unnecessary controller and service imports inside `AppModule`. Fixed the issue by removing invalid imports and registering only the required modules.

---

## Internal Server Error

While testing APIs using Postman, received Internal Server Errors due to incorrect configuration. Identified the root cause through NestJS error messages, corrected the configuration, and successfully verified all CRUD operations.

---

# Practical Activities Completed

- Configured Prisma ORM with PostgreSQL.
- Connected NestJS to PostgreSQL.
- Designed the Product model.
- Applied database migrations.
- Generated Prisma Client.
- Created Prisma Module.
- Implemented Prisma Service.
- Built Product Module.
- Developed Product Controller.
- Implemented Product Service.
- Created Product DTO.
- Developed complete CRUD APIs.
- Connected CRUD operations to PostgreSQL.
- Tested APIs using Postman.
- Fixed configuration and dependency issues.
- Verified successful database operations.

---

# Mistakes to Remember

- Always verify that the project directory is correct before running npm or Prisma commands.
- Configure the database connection properly before running migrations.
- Every database table must first be defined inside `schema.prisma`.
- Run database migrations after modifying the schema.
- Generate the Prisma Client after every schema update.
- Import `PrismaModule` into every feature module that requires database access.
- Export `PrismaService` from `PrismaModule` to enable Dependency Injection.
- Carefully read compiler and runtime error messages before making changes.
- Test every endpoint immediately after implementation to detect issues early.
- Ensure package versions are compatible before upgrading dependencies.

---

# Key Concepts Learned

- NestJS Architecture
- Modular Development
- Prisma ORM
- PostgreSQL Integration
- Prisma Schema
- Database Migration
- Prisma Client
- CRUD Operations
- REST APIs
- Module
- Controller
- Service
- DTO
- Dependency Injection
- Environment Variables
- API Testing with Postman
- Backend Debugging
- Error Resolution

---

# Learning Outcome

By the end of today's session, I successfully developed a complete Product CRUD REST API using NestJS, Prisma ORM, and PostgreSQL. I gained practical experience in designing database models, configuring Prisma, applying migrations, generating the Prisma Client, organizing application features using modules, implementing business logic through services, handling HTTP requests through controllers, and testing APIs using Postman. Additionally, troubleshooting multiple configuration, dependency injection, and version compatibility issues significantly improved my understanding of NestJS architecture, Prisma integration, backend debugging techniques, and REST API development.

---

# Next Learning Plan

- Request Validation using `class-validator`
- Exception Filters
- Pipes
- Middleware
- Authentication using JWT
- Authorization
- Prisma Relationships
- Pagination
- Filtering
- File Uploads
- Advanced Prisma Queries
- Deployment of NestJS Applications