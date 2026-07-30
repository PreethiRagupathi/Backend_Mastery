# Day 4 – Database Schema Design and Table Relationships

## 30 July 2026

## Objective

The objective of today's learning was to understand the fundamentals of database schema design by modeling a real-world product ordering system. The session focused on designing relational tables, defining relationships, and creating a structured database schema using Primary Keys and Foreign Keys.

---

# Topics Covered

## Introduction to Database Schema

Learned that a database schema is the blueprint of a database that defines its overall structure. Understood how a schema organizes tables, columns, constraints, and relationships to ensure efficient data storage and retrieval.

---

## Schema Design

Studied the process of designing a database before implementation. Learned how to identify entities, define their attributes, and establish relationships between them to create a normalized and scalable database structure.

---

## Product and Order Modeling

Designed a simple e-commerce database by identifying the following entities:

- Products
- Orders
- Order_Items

Understood the responsibility of each table and how they work together to represent a real-world ordering system.

---

## Table Relationships

Learned how relationships are established using Primary Keys and Foreign Keys.

Implemented:

- One-to-Many relationship between **Orders** and **Order_Items**.
- One-to-Many relationship between **Products** and **Order_Items**.

Also understood how the **Order_Items** table acts as a junction table to establish a Many-to-Many relationship between Products and Orders.

---

## Database Schema Draft

Designed the database schema by defining:

- Tables
- Columns
- Data Types
- Primary Keys
- Foreign Keys

Created a structured model before writing SQL queries, following the database design process used in real-world applications.

---

## Practical Activities Completed

### Created the Products table

```sql
CREATE TABLE Products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(100),
    price DECIMAL(10,2),
    stock INT
);
```

---

### Created the Orders table

```sql
CREATE TABLE Orders (
    order_id INT PRIMARY KEY,
    customer_name VARCHAR(100),
    order_date DATE
);
```

---

### Created the Order_Items table

```sql
CREATE TABLE Order_Items (
    order_item_id INT PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT,
    FOREIGN KEY (order_id) REFERENCES Orders(order_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
);
```

---

### Designed Relationships

```
Products
---------
product_id (PK)
product_name
price
stock
        ▲
        │
        │
        ▼
Order_Items
-----------
order_item_id (PK)
order_id (FK)
product_id (FK)
quantity
        ▲
        │
        ▼
Orders
-------
order_id (PK)
customer_name
order_date
```

---

## Key Concepts Learned

- Database Schema
- Entity
- Attribute
- Primary Key
- Foreign Key
- One-to-Many Relationship
- Many-to-Many Relationship
- Junction Table
- Schema Design
- Relational Database Modeling

---

## Learning Outcome

By the end of today's session, I developed a clear understanding of database schema design and relational modeling. I learned how to identify entities from a real-world problem, design tables with appropriate attributes, establish relationships using Primary and Foreign Keys, and create a structured schema before implementation. This practice strengthened my ability to design scalable and maintainable relational databases following industry-standard practices.

---

## Next Learning Plan

- Database Normalization
- SQL Constraints
- Aggregate Functions (`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`)
- GROUP BY
- HAVING
- Views
- Indexes
- Database Design Best Practices