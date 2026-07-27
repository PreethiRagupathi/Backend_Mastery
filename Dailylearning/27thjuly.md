# Day 1 – Introduction to Database Management Systems (DBMS) with PostgreSQL

## Date
27 July 2026

## Objective

The objective of today's learning was to understand the fundamentals of Database Management Systems (DBMS), explore the concept of relational databases, install PostgreSQL and pgAdmin, create a database, and become familiar with the PostgreSQL environment.

---

# Topics Covered

## Introduction to Database Management Systems (DBMS)

Studied the purpose of a Database Management System and its role in storing, organizing, and managing structured data efficiently. Learned how databases provide advantages over traditional file systems by ensuring data consistency, security, reduced redundancy, and easier data retrieval.

---

## Understanding Relational Databases

Learned that a Relational Database Management System (RDBMS) stores data in the form of tables consisting of rows and columns. Understood how multiple tables can be related using keys, enabling efficient data organization and retrieval. Also gained a basic understanding of records, attributes, and relationships between tables.

---

## PostgreSQL Installation

Successfully installed PostgreSQL 18 and understood its role as an open-source Relational Database Management System. Learned that PostgreSQL acts as the database server responsible for storing and managing application data securely and efficiently.

---

## pgAdmin Installation and Exploration

Installed pgAdmin 4 and connected it to the PostgreSQL server. Explored the graphical interface and understood the purpose of its major components, including:

- Servers
- Databases
- Schemas
- Tables
- Views
- Functions
- Query Tool

Gained familiarity with navigating the PostgreSQL environment using pgAdmin.

---

## Database Creation

Created a new database named **DemoDB** and understood how databases are organized under a PostgreSQL server. Explored the default **public** schema automatically created within every PostgreSQL database.

---

## Table Creation

Created the first table in the database to store student information. Initially created the table with a different name and later renamed it to **students**, understanding the importance of meaningful and standardized naming conventions for database objects.

---

## Basic SQL Operations

Practiced executing SQL commands using the Query Tool.

### Creating a Table

```sql
CREATE TABLE students (
    name VARCHAR(100),
    department VARCHAR(50),
    college VARCHAR(100)
);
```

### Inserting Data

```sql
INSERT INTO students(name, department, college)
VALUES ('Preethi', 'CSBS', 'KSRCT');
```

### Retrieving Data

```sql
SELECT * FROM students;
```

### Renaming a Table

```sql
ALTER TABLE preethi
RENAME TO students;
```

---

# Concepts Learned

- Database
- Database Management System (DBMS)
- Relational Database Management System (RDBMS)
- PostgreSQL
- pgAdmin
- Server
- Database
- Schema
- Table
- Row (Record)
- Column (Field)
- SQL
- Query Tool

---

# Practical Activities Completed

- Installed PostgreSQL 18.
- Installed pgAdmin 4.
- Connected pgAdmin to the PostgreSQL server.
- Created a new database named **DemoDB**.
- Explored the PostgreSQL object hierarchy within pgAdmin.
- Created a table to store student details.
- Inserted sample data into the table.
- Retrieved data using SQL queries.
- Renamed the table using the `ALTER TABLE` command.

---

# Learning Outcome

By the end of today's session, I developed a foundational understanding of database systems and relational databases. I learned how PostgreSQL functions as a database server and how pgAdmin can be used to manage databases through a graphical interface. Additionally, I gained hands-on experience in creating databases and tables, executing basic SQL statements, and managing database objects. This practical exposure establishes a strong foundation for learning SQL and backend development.

---

# Next Learning Plan

The next phase of learning will focus on SQL fundamentals, including:

- SQL syntax
- Data types
- INSERT statement
- SELECT statement
- WHERE clause
- UPDATE statement
- DELETE statement
- ORDER BY
- LIMIT
- Constraints (PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL)