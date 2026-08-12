# 11.08.2026

# GraphQL/API Design – Catalogue & Orders

## Objective

Today's objective was to understand REST API conventions and design APIs for catalogue and order management. I learned how HTTP methods such as POST, GET, PATCH, and DELETE are used for different CRUD operations.

## Work Done

- Designed REST API endpoints for the Catalogue API.
- Designed REST API endpoints for the Orders API.
- Created the `Order` model in Prisma with fields such as `id`, `customerName`, `productId`, `quantity`, `totalAmount`, and `status`.
- Created and applied the Prisma migration using `npx prisma migrate dev --name add_orders`.
- Created the Order module, controller, and service in NestJS.
- Created `CreateOrderDto` with validation using `class-validator`.
- Implemented Order API operations for creating, retrieving, and deleting orders.
- Added error handling using `NotFoundException`.
- Tested the Order API using Postman.
- Tested validation and verified `400 Bad Request` responses for invalid input.
- Verified `404 Not Found` handling for non-existing orders.

## API Endpoints

### Catalogue API

- `POST /products` – Create a product
- `GET /products` – Get all products
- `GET /products/:id` – Get a specific product
- `PATCH /products/:id` – Update a product
- `DELETE /products/:id` – Delete a product

### Orders API

- `POST /orders` – Create an order
- `GET /orders` – Get all orders
- `GET /orders/:id` – Get a specific order
- `PATCH /orders/:id` – Update an order
- `DELETE /orders/:id` – Delete an order

## Key Learnings

- REST API conventions
- CRUD operations and HTTP methods
- DTO-based validation
- API error handling
- Prisma migration and database integration
- NestJS Controller-Service architecture
- API testing using Postman

## Outcome

Successfully designed and implemented the initial Orders API using NestJS, Prisma, and PostgreSQL and tested the implemented endpoints.