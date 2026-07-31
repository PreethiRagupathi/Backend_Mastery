# Day 5 – Building a Relational Database Schema

## Date
31 July 2026

## Objective

The objective of today's learning was to build a complete relational database schema by designing related tables, implementing them in PostgreSQL using pgAdmin, inserting sample data, and validating the relationships through SQL queries.

---

# Topics Covered

## Database Schema Implementation

Implemented a complete database schema based on a real-world product ordering system. Understood how a schema serves as the structural blueprint of a relational database by defining tables, columns, data types, constraints, and relationships.

---

## Creating Tables

Created the following tables in PostgreSQL using pgAdmin:

- Products
- Orders
- Order_Items

Defined appropriate data types and implemented Primary Key and Foreign Key constraints to establish relationships between the tables.

---

## Table Relationships

Established relationships between the tables as follows:

- `Products.product_id` → Primary Key
- `Orders.order_id` → Primary Key
- `Order_Items.order_item_id` → Primary Key
- `Order_Items.order_id` → Foreign Key referencing `Orders.order_id`
- `Order_Items.product_id` → Foreign Key referencing `Products.product_id`

This design models a many-to-many relationship between Products and Orders through the `Order_Items` table.

---

## Sample Data Insertion

Inserted sample records into all three tables to simulate an online shopping system and verify the integrity of the relationships.

---

## Query Testing

Executed SQL queries to validate the schema by:

- Retrieving data from individual tables.
- Performing JOIN operations across multiple tables.
- Verifying relationships using Foreign Keys.
- Confirming that data retrieval produced the expected results.

---

## Week 7 Review

Revised the concepts covered throughout the week:

- Relational Databases
- PostgreSQL & pgAdmin
- Creating Databases
- SQL Data Types
- CREATE TABLE
- INSERT
- SELECT
- WHERE
- UPDATE
- DELETE
- Primary Key
- Foreign Key
- INNER JOIN
- LEFT JOIN
- RIGHT JOIN
- FULL OUTER JOIN
- Database Schema Design
- Table Relationships
- Schema Implementation

---

## Practical Activities Completed

- Designed a relational database schema.
- Created Products, Orders, and Order_Items tables.
- Defined Primary Key and Foreign Key constraints.
- Inserted sample data into all tables.
- Tested the schema using SQL queries.
- Verified table relationships through JOIN operations.
- Reviewed all SQL concepts learned during Week 7.

---

## Key Concepts Learned

- Database Schema
- Primary Key
- Foreign Key
- One-to-Many Relationship
- Many-to-Many Relationship
- Junction Table
- Relational Database Design
- Schema Implementation
- Data Integrity
- SQL Query Validation

---

## Learning Outcome

By the end of today's session, I successfully implemented a complete relational database schema in PostgreSQL. I gained hands-on experience in designing related tables, defining relationships using Primary and Foreign Keys, inserting sample data, and validating the schema through SQL queries. This session consolidated my understanding of relational database design and completed my Week 7 SQL learning with practical implementation.

---

## Next Learning Plan

- Aggregate Functions
- GROUP BY
- HAVING
- DISTINCT
- ORDER BY
- SQL Constraints
- Views
- Indexes
- Database Normalization