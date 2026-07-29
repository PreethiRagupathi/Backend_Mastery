````markdown
# Primary Keys, Foreign Keys, and SQL Joins

## 29 July 2026

## Objective

The objective of today's learning was to understand how relational databases establish relationships between tables using Primary Keys and Foreign Keys, and how SQL Joins are used to retrieve related information from multiple tables.

---

# Topics Covered

## Primary Key

Learned that a Primary Key uniquely identifies each record in a table. Understood that it must contain unique values and cannot be NULL.

---

## Foreign Key

Learned that a Foreign Key creates a relationship between two tables by referencing the Primary Key of another table. Understood how Foreign Keys maintain referential integrity by ensuring that only valid references can be inserted into the child table.

---

## Creating Parent and Child Tables

Created the parent table **TNED** and the child table **KSRCT**, where the `roll_no` column in `KSRCT` references the `roll_no` column of `TNED`.

### Parent Table

```sql
CREATE TABLE TNED(
    roll_no INT PRIMARY KEY,
    coll_name VARCHAR(100),
    district VARCHAR(100),
    no_of_projects INT
);
```

### Child Table

```sql
CREATE TABLE KSRCT(
    std_roll_no INT PRIMARY KEY,
    std_name VARCHAR(100),
    roll_no INT,
    FOREIGN KEY (roll_no) REFERENCES TNED(roll_no)
);
```

---

## Inserting Records

### TNED Table

```sql
INSERT INTO TNED(roll_no, coll_name, district, no_of_projects)
VALUES
(1,'K S Rangasamy College of Technology','Namakkal',10),
(3,'KCET','Erode',6),
(4,'VET','Erode',3),
(5,'KPR','Coimbatore',8);
```

### KSRCT Table

```sql
INSERT INTO KSRCT(std_roll_no, std_name, roll_no)
VALUES
(48,'Nishanth',1),
(44,'Mithuna',1),
(49,'Preethi',1),
(50,'Nishanthini',3),
(55,'Krithika',5),
(57,'Sabareesha',4);
```

---

## SQL Joins

Learned how SQL Joins combine data from related tables using a common column.

### INNER JOIN

```sql
SELECT *
FROM KSRCT
INNER JOIN TNED
ON KSRCT.roll_no = TNED.roll_no;
```

Returns only the records that have matching `roll_no` values in both tables.

---

### LEFT JOIN

```sql
SELECT *
FROM KSRCT
LEFT JOIN TNED
ON KSRCT.roll_no = TNED.roll_no;
```

Returns all records from the `KSRCT` table and matching records from the `TNED` table.

---

### RIGHT JOIN

```sql
SELECT *
FROM KSRCT
RIGHT JOIN TNED
ON KSRCT.roll_no = TNED.roll_no;
```

Returns all records from the `TNED` table and matching records from the `KSRCT` table.

---

### FULL OUTER JOIN

```sql
SELECT *
FROM KSRCT
FULL OUTER JOIN TNED
ON KSRCT.roll_no = TNED.roll_no;
```

Returns all matching and non-matching records from both tables.

---

## Practical Activities Completed

- Created parent and child tables.
- Implemented Primary Key and Foreign Key constraints.
- Inserted data into both tables.
- Retrieved data from individual tables.
- Practiced INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN.
- Compared the outputs of different join operations.
- Understood why all joins initially returned the same result because every record had a matching value.
- Added additional records to understand the behavior of different join types.

---

## Key Concepts Learned

- Primary Key
- Foreign Key
- Parent Table
- Child Table
- Referential Integrity
- INNER JOIN
- LEFT JOIN
- RIGHT JOIN
- FULL OUTER JOIN
- Join Condition (`ON` clause)

---

## Next Learning Plan

- Aggregate Functions (`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`)
- GROUP BY
- HAVING
- DISTINCT
- ORDER BY
- SQL Constraints
- Database Design and Normalization
````
