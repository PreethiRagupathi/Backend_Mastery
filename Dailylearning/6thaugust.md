# 06.08.2026

# Keycloak & MinIO Fundamentals

## Objective

Today's objective was to understand the fundamentals of **Keycloak** and **MinIO**, two essential technologies used in modern backend development. The goal was to learn how Keycloak manages authentication and authorization, how MinIO provides object storage for application files, and how both technologies work together in real-world applications. Along with understanding the concepts, I also performed hands-on practice by configuring and using MinIO.

---

# Keycloak

## Introduction to Keycloak

Keycloak is an open-source **Identity and Access Management (IAM)** solution that simplifies authentication and authorization for applications. Instead of implementing login functionality separately for every application, Keycloak provides a centralized authentication server where users, roles, permissions, and security policies are managed. It supports industry-standard protocols such as **OAuth 2.0**, **OpenID Connect (OIDC)**, and **SAML**, making it compatible with web, mobile, and enterprise applications. Keycloak enables developers to build secure applications without developing authentication mechanisms from scratch. :contentReference[oaicite:0]{index=0}

---

## Features of Keycloak

Keycloak provides several powerful features for secure identity management.

- **Single Sign-On (SSO):** Allows users to log in once and access multiple applications without repeated authentication.
- **Identity Brokering:** Enables login through external identity providers such as Google, GitHub, Facebook, and LinkedIn.
- **User Federation:** Connects existing user directories like LDAP or Active Directory with Keycloak.
- **Admin Console:** Provides centralized management of users, clients, realms, roles, and security settings.
- **Account Console:** Allows users to manage their own profiles, passwords, and two-factor authentication.
- **Password Policies:** Enforces password complexity and security requirements.
- **Clustering & Scalability:** Supports high availability for production deployments.
- **Theme Customization & Extensibility:** Enables customization of the user interface and supports custom plugins for extending functionality. :contentReference[oaicite:1]{index=1}

---

## Installing and Running Keycloak

Keycloak can be installed either as a standalone server or as a container. After downloading and extracting the server files, the Keycloak server is started using the startup script. During the first execution, a temporary administrator account is created to access the Admin Console. For security purposes, a permanent administrator account should then be created, assigned administrator privileges, and the temporary account should be removed. This ensures secure administration of the Keycloak server. :contentReference[oaicite:2]{index=2}

---

## Realms

A **Realm** is an isolated security and administrative domain within Keycloak. Every realm maintains its own users, clients, groups, roles, sessions, and authentication settings independently. Resources created in one realm are not visible to another realm, allowing multiple applications or organizations to share the same Keycloak server while remaining completely isolated. Creating a separate realm for each application or environment is considered a best practice because it improves security and resource management. :contentReference[oaicite:3]{index=3}

---

## Realm Settings

Realm Settings allow administrators to configure the overall behavior of a realm. These settings include general information, login configuration, email server settings, themes, localization, security defenses, session management, token lifespan, event logging, client policies, user profile customization, and default user roles. These configurations enable administrators to customize authentication workflows, improve security, and manage user sessions according to application requirements. :contentReference[oaicite:4]{index=4}

---

## Users

The **Users** section is responsible for creating and managing application users. Administrators can create new users, configure their credentials, assign temporary or permanent passwords, associate them with groups, and assign realm or client roles. Required user actions, such as forcing users to update their passwords during their first login, can also be configured. This centralized user management simplifies authentication and authorization across multiple applications. :contentReference[oaicite:5]{index=5}

---

# MinIO

## Introduction to MinIO

MinIO is an open-source, high-performance **Object Storage Server** that is compatible with the Amazon S3 API. It is designed to store unstructured data such as images, videos, documents, PDFs, backups, and application assets. Instead of storing large files directly in relational databases, applications store only the file metadata or object path in the database while the actual files are securely stored in MinIO. This approach improves scalability, storage efficiency, and application performance.

---

## Object Storage

Object Storage is a storage architecture where data is stored as **Objects** instead of tables or file system blocks. Every object contains the actual file, metadata describing the file, and a unique identifier. This model provides better scalability and flexibility for storing large amounts of unstructured data, making it ideal for cloud-native applications and enterprise systems.

---

## Buckets

A **Bucket** is the primary storage container in MinIO. It functions similarly to a folder in a traditional file system and is used to organize related files. Applications typically create separate buckets based on categories such as images, documents, backups, or user files. Proper bucket organization simplifies file management and improves maintainability.

---

## Objects

An **Object** is an individual file stored inside a bucket. Objects may include images, PDF files, videos, Word documents, or any other file type. Every object stores the file itself along with metadata such as its content type, file size, creation time, and storage path. Applications use these object paths whenever files need to be retrieved or managed.

---

## MinIO Setup

To understand MinIO practically, I installed Docker Desktop and pulled the official MinIO Docker image. I created a MinIO container with custom root user credentials, accessed the MinIO Web Console through the browser, and explored its user interface. This setup provided a practical understanding of how MinIO is deployed and managed in development environments.

---

## Hands-on Practice with MinIO

As part of the practical session, I created multiple buckets to organize application files and uploaded different documents as objects. Through this activity, I understood the relationship between buckets and objects and learned how MinIO stores files separately from relational databases. This hands-on experience provided a clear understanding of how object storage works in real-world backend applications.

---

## Keycloak and MinIO Integration

In modern backend architectures, Keycloak and MinIO work together to provide secure authentication and scalable file storage. Keycloak authenticates users and issues access tokens after successful login. The backend application verifies these tokens before allowing users to upload or download files. The uploaded files are stored in MinIO, while relational databases maintain metadata such as filenames, object paths, upload timestamps, and ownership information. This architecture separates authentication, data storage, and file management, resulting in a secure and scalable backend solution.

---

# Outcome

By the end of today's session, I developed a strong understanding of Keycloak's authentication and identity management capabilities, including its features, realms, realm settings, and user management. I also gained practical experience with MinIO by configuring the server, creating buckets, uploading objects, and understanding the principles of object storage. This learning established a solid foundation for integrating authentication and object storage into backend applications using technologies such as NestJS and Spring Boot.