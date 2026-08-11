# 10.08.2026

# API Conventions, REST Conventions, Error Handling, DTOs & Validation Pipe

## Objective

Today's objective was to improve the Student Management API by following proper API and REST conventions, implementing error handling, creating and using DTOs, configuring the ValidationPipe, testing API validation, and pushing the completed changes to Git.

---

## 1. API Conventions

API conventions are rules and practices used to make APIs consistent, predictable, and easy to understand.

The Student Management API was structured using resource-based routes:

```text
POST   /students
GET    /students
GET    /students/:id
PATCH  /students/:id
DELETE /students/:id