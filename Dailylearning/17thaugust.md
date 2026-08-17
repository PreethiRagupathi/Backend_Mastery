# 17.08.2026 – KIOS, POS, KDS, PIMS, Certainty AI & Keycloak/JWT

## Objective

Today's objective was to understand the basic concepts of **KIOS/Kiosk systems, Point of Sale (POS), Kitchen Display Systems, PIMS, Access Control, Certainty AI**, and to continue the authentication setup for the **Student Management System** using **Keycloak and JWT**.

The main technical focus was to understand how authentication works using Keycloak, how a realm and client are configured, how users are created, and how a JWT access token can be generated and tested using Postman.

---

# 1. KIOS / Kiosk

## What is a Kiosk?

A **Kiosk** is a self-service system that allows customers to interact with an application through a dedicated device without requiring assistance from an employee.

A kiosk generally contains:

* Touchscreen interface
* Application software
* Payment integration
* Order management
* Receipt or order confirmation
* Backend API communication

### Basic Kiosk Flow

```text
Customer
    |
    v
Kiosk Interface
    |
    v
Select Products / Services
    |
    v
Create Order
    |
    v
Payment
    |
    v
Backend API
    |
    v
Order Processing
```

## Why Kiosks are Used

Kiosks can help organizations:

* Reduce waiting time
* Reduce manual work
* Improve order accuracy
* Provide self-service functionality
* Handle multiple customers simultaneously
* Improve the overall customer experience

---

# 2. Point of Sale (POS)

## What is POS?

**Point of Sale (POS)** is the system used to process customer transactions.

It is responsible for handling the process from selecting or entering an order to completing the payment.

### POS Responsibilities

A POS system can handle:

* Product selection
* Order creation
* Price calculation
* Discounts
* Tax calculation
* Payment processing
* Receipt generation
* Order status
* Transaction records

### POS Flow

```text
Customer
    |
    v
Select Product
    |
    v
Create Order
    |
    v
Calculate Total
    |
    v
Payment
    |
    v
Transaction Completed
```

### Example

If a customer purchases:

```text
Burger      ₹150
Fries       ₹80
Drink       ₹50
-----------------
Total       ₹280
```

The POS system is responsible for calculating and processing this transaction.

---

# 3. Kitchen Display System (KDS)

## What is KDS?

A **Kitchen Display System (KDS)** is a system used in restaurants or food-service environments to display customer orders directly to kitchen staff.

Instead of depending completely on printed order tickets, kitchen staff can view and manage orders digitally.

### KDS Flow

```text
Customer
    |
    v
Kiosk / POS
    |
    v
Order Created
    |
    v
Backend
    |
    v
Kitchen Display System
    |
    v
Kitchen Staff
    |
    v
Prepare Order
    |
    v
Update Order Status
```

### Typical Order Status

```text
NEW
 ↓
PREPARING
 ↓
READY
 ↓
COMPLETED
```

### Benefits

* Reduces communication errors
* Provides real-time order visibility
* Helps kitchen staff prioritize orders
* Tracks order status
* Improves coordination between POS and kitchen

---

# 4. PIMS

## Understanding PIMS

PIMS is another important component discussed as part of the overall system.

It can be used to manage and maintain information related to products/items and their associated operational data.

The system can work together with other components such as:

```text
KIOSK
   |
   v
POS
   |
   v
Backend
   |
   +----------> PIMS
   |
   +----------> KDS
   |
   +----------> Database
```

Understanding how these individual systems communicate is important when designing a larger application.

---

# 5. Access Control

## What is Access Control?

**Access Control** determines which users are allowed to access specific resources or perform specific operations.

Authentication answers:

> Who are you?

Authorization answers:

> What are you allowed to do?

### Authentication vs Authorization

| Authentication                | Authorization                        |
| ----------------------------- | ------------------------------------ |
| Identifies the user           | Determines permissions               |
| Login / identity verification | Access control                       |
| Uses credentials or tokens    | Uses roles/permissions               |
| Example: User is Preethi      | Example: Preethi can create students |

### Example

Consider a Student Management System:

```text
Admin
 ├── Create Student
 ├── Update Student
 ├── Delete Student
 └── View Student

Staff
 ├── Create Student
 ├── Update Student
 └── View Student

Viewer
 └── View Student
```

The authentication system identifies the user, while authorization determines what that user can do.

---

# 6. Introduction to Certainty AI

## What is Certainty AI?

Certainty AI was studied at a basic level to understand how a system can help organizations identify, document, assign, and track problems or quality-related issues.

The basic concept can be represented as:

```text
Problem / Mistake Identified
          |
          v
     Document Issue
          |
          v
     Assign Responsible Person
          |
          v
       Fix Issue
          |
          v
      Verify Fix
          |
          v
      Notify User
          |
          v
       Close Issue
```

## Basic Purpose

The system can support:

* Quality control
* Issue identification
* Issue documentation
* Responsibility assignment
* Problem resolution
* Tracking
* Notifications
* Verification

The main idea learned was that identifying a problem alone is not enough. The problem should also be **documented, assigned to the appropriate person, resolved, verified, and tracked until closure**.

---

# 7. Keycloak

## What is Keycloak?

**Keycloak** is an open-source identity and access management solution.

It can be used to manage:

* Users
* Authentication
* Roles
* Clients
* Sessions
* Access control
* OpenID Connect
* OAuth 2.0
* JWT-based authentication

For the Student Management System, Keycloak is being used as the **authentication server**.

---

# 8. Keycloak Setup

Keycloak was configured using Docker.

## Starting Keycloak

The following Docker command was used to start Keycloak:

```powershell
docker run -d `
  --name keycloak `
  -p 8080:8080 `
  -e KC_BOOTSTRAP_ADMIN_USERNAME=admin `
  -e KC_BOOTSTRAP_ADMIN_PASSWORD=admin `
  quay.io/keycloak/keycloak:latest `
  start-dev
```

### Verify Keycloak Container

```powershell
docker ps
```

The Keycloak container should show a running status and port mapping similar to:

```text
0.0.0.0:8080->8080/tcp
```

Keycloak Admin Console:

```text
http://localhost:8080
```

---

# 9. Creating a Realm

A **Realm** is an isolated authentication and authorization environment in Keycloak.

A realm contains its own:

* Users
* Clients
* Roles
* Authentication configuration
* Sessions
* Identity providers

### Realm Created

```text
student-management
```

The project uses:

```text
Keycloak
    |
    └── student-management
```

Instead of using the default `master` realm for the application, a separate project-specific realm was created.

---

# 10. Creating a Client

A **Client** represents an application or service that communicates with Keycloak.

The following client was created:

```text
Client ID:
student-management-api
```

### Client Configuration

```text
Client Type:
OpenID Connect

Client ID:
student-management-api

Authorization:
OFF

Standard Flow:
ON

Direct Access Grants:
ON

Implicit Flow:
OFF

Service Account Roles:
OFF

JWT Authorization Grant:
OFF
```

The client represents the authentication configuration for the Student Management API.

---

# 11. Creating a Test User

A test user was created inside the `student-management` realm.

```text
Username:
preethi
```

The user was configured with:

* Password
* No required user actions
* Email verification enabled
* User enabled

This user was used to test the authentication flow.

---

# 12. Understanding JWT

## What is JWT?

**JWT (JSON Web Token)** is a compact token format commonly used to securely transmit claims between systems.

A JWT has three main parts:

```text
HEADER.PAYLOAD.SIGNATURE
```

### 1. Header

The header contains information about the token, such as the signing algorithm.

Example:

```json
{
  "alg": "RS256",
  "typ": "JWT"
}
```

### 2. Payload

The payload contains claims about the authenticated user and token.

Important claims can include:

| Claim                | Purpose               |
| -------------------- | --------------------- |
| `sub`                | User identifier       |
| `preferred_username` | Username              |
| `email`              | User email            |
| `iss`                | Token issuer          |
| `aud`                | Intended audience     |
| `exp`                | Token expiration time |
| `realm_access`       | Realm-level roles     |

### 3. Signature

The signature helps the backend verify that:

* The token was issued by a trusted authority.
* The token has not been modified.

---

# 13. JWT Authentication Flow

The authentication flow tested today was:

```text
User
  |
  | Username + Password
  v
Keycloak
  |
  | Authentication
  v
JWT Access Token
  |
  v
Postman
  |
  | Authorization: Bearer <JWT>
  v
NestJS API
  |
  v
JWT Verification
  |
  v
Authenticated User
```

The important concept learned was:

> A JWT should not simply be decoded and trusted. The backend must verify the token before trusting its claims.

---

# 14. Generating a JWT using Postman

The Keycloak token endpoint used for testing was:

```text
POST
http://localhost:8080/realms/student-management/protocol/openid-connect/token
```

### Request Body

Postman was configured with:

```text
Body
    ↓
x-www-form-urlencoded
```

The following values were provided:

| Key          | Value                    |
| ------------ | ------------------------ |
| `client_id`  | `student-management-api` |
| `username`   | `preethi`                |
| `password`   | User password            |
| `grant_type` | `password`               |

### Successful Response

Keycloak returned an authentication response containing:

```json
{
  "access_token": "...",
  "expires_in": 300,
  "refresh_expires_in": 1800,
  "refresh_token": "...",
  "token_type": "Bearer"
}
```

The important value is:

```text
access_token
```

This access token is the JWT that will later be sent to the NestJS API.

---

# 15. Testing the JWT

The JWT was successfully generated and tested using Postman.

The expected authentication flow for the backend is:

```text
Postman
   |
   | Authorization: Bearer <JWT>
   v
NestJS API
   |
   v
Auth Guard
   |
   v
JWT Verification
   |
   +---- Invalid Token ----> 401 Unauthorized
   |
   +---- Expired Token ----> 401 Unauthorized
   |
   +---- Valid Token
              |
              v
        request.user
              |
              v
          Controller
```

---

# 16. Authentication Middleware / Guard – Next Step

The next implementation step is to integrate the JWT authentication into the existing NestJS project.

The project structure has been prepared with an authentication module:

```text
src/
│
├── auth/
│   ├── guards/
│   ├── middleware/
│   ├── decorators/
│   └── auth.module.ts
│
├── student/
├── tenant/
├── order/
├── prisma/
├── health/
│
├── app.controller.ts
├── app.module.ts
├── app.service.ts
└── main.ts
```

The next implementation will include:

1. JWT verification
2. Authentication Guard
3. Bearer token extraction
4. Keycloak token validation
5. Attaching authenticated user information to `request.user`
6. Protecting existing APIs
7. Testing valid and invalid tokens

---

# 17. Current Project Architecture

After today's learning, the overall architecture can be understood as:

```text
                     ┌─────────────────┐
                     │     Keycloak    │
                     │                 │
                     │ student-        │
                     │ management      │
                     └────────┬────────┘
                              │
                         JWT Token
                              │
                              v
┌───────────────┐      ┌─────────────────┐
│   Postman /   │─────>│   NestJS API    │
│    Client     │      │                 │
└───────────────┘      │   Auth Guard    │
                       │       │         │
                       │       v         │
                       │  JWT Verify     │
                       │       │         │
                       │       v         │
                       │ request.user    │
                       └────────┬────────┘
                                │
             ┌──────────────────┼──────────────────┐
             │                  │                  │
             v                  v                  v
        Student API        Tenant API         Order API
             │                  │                  │
             └──────────────────┼──────────────────┘
                                v
                         ┌──────────────┐
                         │  PostgreSQL  │
                         └──────────────┘
                                ▲
                                │
                           Prisma ORM
```

---

# 18. Key Learnings

### KIOS / Kiosk

* Understood the concept of self-service kiosks.
* Learned how kiosks communicate with backend systems.
* Understood their role in customer-facing applications.

### POS

* Learned how Point of Sale systems process orders and payments.
* Understood the relationship between POS and backend services.

### Kitchen Display System

* Learned how orders can be transferred from POS/Kiosk to the kitchen.
* Understood order status management.

### PIMS

* Understood the role of product/item-related management within the overall system.

### Access Control

* Understood the difference between authentication and authorization.
* Learned how roles can determine access to different operations.

### Certainty AI

* Learned the basic concept of identifying, documenting, assigning, resolving, and tracking problems.
* Understood its role in quality control and issue management.

### Keycloak

* Set up Keycloak using Docker.
* Created a project-specific realm.
* Created an OpenID Connect client.
* Created a test user.
* Configured authentication settings.
* Generated a JWT access token.
* Tested the token using Postman.

---

# 19. Today's Progress

| Task                                   | Status      |
| -------------------------------------- | ----------- |
| Understand KIOS / Kiosk                | ✅ Completed |
| Understand POS                         | ✅ Completed |
| Understand Kitchen Display System      | ✅ Completed |
| Understand PIMS                        | ✅ Completed |
| Understand Access Control              | ✅ Completed |
| Learn Certainty AI basics              | ✅ Completed |
| Set up Keycloak                        | ✅ Completed |
| Create `student-management` realm      | ✅ Completed |
| Create `student-management-api` client | ✅ Completed |
| Create Keycloak test user              | ✅ Completed |
| Generate JWT                           | ✅ Completed |
| Test JWT with Postman                  | ✅ Completed |
| Implement JWT verification in NestJS   | ⏳ Next      |
| Create Auth Guard                      | ⏳ Next      |
| Attach user to `request.user`          | ⏳ Next      |
| Protect existing APIs                  | ⏳ Next      |

---

# 20. Next Learning Objective

The next objective is to implement the authentication layer inside the NestJS Student Management System.

The planned flow is:

```text
Keycloak
   ↓
JWT Access Token
   ↓
NestJS Auth Guard
   ↓
Verify JWT
   ↓
Extract User Claims
   ↓
request.user
   ↓
Protected Controller
   ↓
Student / Tenant / Order APIs
```

This will connect the **Keycloak authentication server** with the existing **NestJS + Prisma + PostgreSQL application**.

---

## Summary

Today's session focused on understanding different components involved in a modern application ecosystem and implementing the initial authentication setup.

The major technical achievement was successfully setting up **Keycloak**, creating the required **realm, client, and test user**, and generating a valid **JWT access token through Postman**.

The next stage is to integrate this token-based authentication into the NestJS backend by implementing **JWT verification, authentication guards, user extraction, and protected APIs**.
