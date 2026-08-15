## 14.08.2026
REST API Design, Prisma PostgreSQL & Base APIs
Objective

Today's objective was to learn the complete backend flow for designing and implementing REST APIs using NestJS, connecting the application to PostgreSQL using Prisma, creating base entities, implementing CRUD operations, validating incoming data, handling errors, and testing the APIs using Swagger.

I continued from the previously learned concepts such as Controllers, Services, DTOs, and ValidationPipe and connected them with database operations.

I used Tenant as the main entity to understand the complete backend workflow instead of implementing the same logic separately for Tenant, Store, and User.

The complete flow I learned today was:

Client / Swagger / Postman
          ↓
       Controller
          ↓
    DTO + ValidationPipe
          ↓
        Service
          ↓
     PrismaService
          ↓
        Prisma
          ↓
     PostgreSQL
          ↓
       Response
<details> <summary><strong>1. Understanding REST API Design</strong></summary>
What I Learned

REST stands for Representational State Transfer.

It is an architectural style commonly used for designing web APIs.

In REST APIs, we generally design endpoints around resources instead of actions.

For example, instead of creating separate action-based URLs:

/createTenant
/getAllTenants
/deleteTenant

we use a resource:

/tenants

and use HTTP methods to define the operation.

HTTP Method	Purpose	Example
POST	Create	POST /tenants
GET	Read	GET /tenants
PATCH	Update	PATCH /tenants/1
DELETE	Delete	DELETE /tenants/1

Therefore, the Tenant API can be designed as:

POST   /tenants
GET    /tenants
GET    /tenants/:id
PATCH  /tenants/:id
DELETE /tenants/:id
Example

If I want to create a Tenant:

POST /tenants

If I want to get all Tenants:

GET /tenants

If I want to get Tenant with ID 1:

GET /tenants/1

If I want to update Tenant with ID 1:

PATCH /tenants/1

If I want to delete Tenant with ID 1:

DELETE /tenants/1

This makes the API predictable and easier to understand.

Outcome

I understood how REST APIs use resources and HTTP methods to represent CRUD operations.

</details>
<details> <summary><strong>2. Understanding the Backend Architecture</strong></summary>
What I Learned

I learned that a NestJS backend is divided into different layers, where each layer has a specific responsibility.

The basic architecture is:

Controller
    ↓
Service
    ↓
PrismaService
    ↓
Prisma Client
    ↓
PostgreSQL
Controller

The Controller receives HTTP requests.

Service

The Service contains the application logic and performs the required operations.

PrismaService

PrismaService provides access to Prisma Client.

Prisma

Prisma communicates with the PostgreSQL database.

PostgreSQL

PostgreSQL stores the actual application data.

This separation prevents all the logic from being written inside one file.

Example Flow

When a client sends:

POST /tenants

the request flows like this:

Client
  ↓
TenantController
  ↓
TenantService
  ↓
PrismaService
  ↓
Prisma
  ↓
PostgreSQL

The response then travels back through the same layers.

PostgreSQL
  ↓
Prisma
  ↓
PrismaService
  ↓
TenantService
  ↓
TenantController
  ↓
Client
Outcome

I understood the responsibility of each backend layer and how they work together.

</details>
<details> <summary><strong>3. Understanding Prisma and PostgreSQL</strong></summary>
What I Learned

Prisma is an ORM (Object-Relational Mapper) that allows the NestJS application to communicate with the PostgreSQL database using TypeScript/JavaScript.

Instead of writing SQL queries for every database operation, Prisma provides methods such as:

prisma.tenant.create()
prisma.tenant.findMany()
prisma.tenant.findUnique()
prisma.tenant.update()
prisma.tenant.delete()

The database architecture is:

NestJS Application
       ↓
   PrismaService
       ↓
   Prisma Client
       ↓
   PostgreSQL

The Prisma datasource is configured as:

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

The important point I learned is that:

DATABASE_URL

is the environment variable name, not the actual database URL.

The actual PostgreSQL connection string is stored in the environment configuration.

Outcome

I understood how Prisma acts as the bridge between the NestJS application and PostgreSQL.

</details>
<details> <summary><strong>4. Understanding Prisma Schema</strong></summary>
What I Learned

The Prisma schema defines how the database models should look.

For example, a Tenant model can be defined as:

model Tenant {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
Understanding the Fields
id Int

The id stores the unique identifier.

@id

Marks the field as the primary key.

@default(autoincrement())

Automatically generates increasing IDs.

For example:

1
2
3
4
name String

Stores the Tenant name.

email String @unique

Stores the email and prevents duplicate email values.

createdAt DateTime @default(now())

Automatically stores when the record was created.

updatedAt DateTime @updatedAt

Automatically updates the timestamp whenever the record is modified.

Outcome

I learned how Prisma models represent database tables and how Prisma attributes define primary keys, unique fields, and automatic values.

</details>
<details> <summary><strong>5. Prisma Migration</strong></summary>
What I Learned

Whenever I make changes to the Prisma schema, those changes need to be reflected in the actual PostgreSQL database.

Prisma migrations are used for this purpose.

The command I used was:

npx prisma migrate dev --name add_orders

The migration flow is:

schema.prisma
     ↓
Prisma Migration
     ↓
Migration SQL
     ↓
PostgreSQL

After the migration was successfully applied, Prisma generated the updated Prisma Client.

The successful output indicated:

Your database is now in sync with your schema.

This means the Prisma schema and PostgreSQL database were synchronized.

Outcome

I understood why migrations are required and how Prisma applies schema changes to the PostgreSQL database.

</details>
<details> <summary><strong>6. Creating the Tenant API</strong></summary>
What I Learned

I created the Tenant API to understand how a real backend resource is implemented.

I used Tenant as the main example because Store and User would follow the same basic CRUD structure.

The API structure is:

Tenant
 ├── Controller
 ├── Service
 ├── DTO
 └── Prisma Model

The Controller handles requests.

The DTO validates incoming data.

The Service performs the operations.

Prisma communicates with PostgreSQL.

Outcome

I understood how one complete backend entity is structured across different NestJS layers.

</details>
<details> <summary><strong>7. Create Tenant API</strong></summary>
What I Learned

The POST method is used to create a new Tenant.

Controller:

@Post()
create(@Body() createTenantDto: CreateTenantDto) {
  return this.tenantService.create(createTenantDto);
}

The request body is received using:

@Body()

The DTO is then passed to the Service.

The Service contains:

create(createTenantDto: CreateTenantDto) {
  return this.prisma.tenant.create({
    data: createTenantDto,
  });
}

The data then goes to PostgreSQL through Prisma.

Example Request
{
  "name": "CycleSusa",
  "email": "admin@cyclesusa.com"
}
Example Response
{
  "id": 1,
  "name": "CycleSusa",
  "email": "admin@cyclesusa.com",
  "createdAt": "2026-08-15T13:22:21.200Z",
  "updatedAt": "2026-08-15T13:22:21.200Z"
}
Outcome

Successfully understood how a POST request moves from the Controller to the Service and finally into PostgreSQL through Prisma.

</details>
<details> <summary><strong>8. Get All Tenants</strong></summary>
What I Learned

The GET method without an ID is used to retrieve all Tenant records.

Controller:

@Get()
findAll() {
  return this.tenantService.findAll();
}

Service:

findAll() {
  return this.prisma.tenant.findMany();
}

The Prisma method:

findMany()

retrieves multiple records from the Tenant table.

The flow is:

GET /tenants
     ↓
Controller
     ↓
Service
     ↓
findMany()
     ↓
PostgreSQL
     ↓
All Tenant records
Outcome

I learned how to retrieve multiple records from PostgreSQL using Prisma's findMany() method.

</details>
<details> <summary><strong>9. Get One Tenant</strong></summary>
What I Learned

To retrieve one specific Tenant, I use the Tenant ID.

Example:

GET /tenants/1

Controller:

@Get(':id')
findOne(@Param('id') id: string) {
  return this.tenantService.findOne(Number(id));
}

Here:

@Param('id')

extracts the ID from the URL.

The ID initially comes as a string, so I convert it into a number:

Number(id)

The Service uses:

async findOne(id: number) {
  const tenant = await this.prisma.tenant.findUnique({
    where: { id },
  });


  if (!tenant) {
    throw new NotFoundException(
      `Tenant with ID ${id} not found`,
    );
  }


  return tenant;
}

The Prisma method:

findUnique()

searches for one unique record.

Outcome

I understood how route parameters are received using @Param() and how Prisma retrieves a specific database record.

</details>
<details> <summary><strong>10. Update Tenant</strong></summary>
What I Learned

The PATCH method is used to update an existing Tenant.

Example:

PATCH /tenants/1

Controller:

@Patch(':id')
update(
  @Param('id') id: string,
  @Body() updateTenantDto: UpdateTenantDto,
) {
  return this.tenantService.update(
    Number(id),
    updateTenantDto,
  );
}

Service:

update(
  id: number,
  updateTenantDto: UpdateTenantDto,
) {
  return this.prisma.tenant.update({
    where: { id },
    data: updateTenantDto,
  });
}

The where identifies the record.

The data contains the new values.

Example
PATCH /tenants/1

Request:

{
  "name": "CycleSusa India"
}

The Tenant with ID 1 will be updated.

Outcome

I understood how PATCH requests are used to modify existing database records.

</details>
<details> <summary><strong>11. Delete Tenant</strong></summary>
What I Learned

The DELETE method is used to remove a Tenant.

Example:

DELETE /tenants/1

Controller:

@Delete(':id')
remove(@Param('id') id: string) {
  return this.tenantService.remove(Number(id));
}

Service:

remove(id: number) {
  return this.prisma.tenant.delete({
    where: { id },
  });
}

The ID identifies which record needs to be deleted.

Outcome

I understood how DELETE requests remove records from PostgreSQL using Prisma.

</details>
<details> <summary><strong>12. Understanding CRUD Operations</strong></summary>
What I Learned

CRUD represents the four basic database operations:

Operation	HTTP Method	Prisma Method
Create	POST	create()
Read All	GET	findMany()
Read One	GET /:id	findUnique()
Update	PATCH	update()
Delete	DELETE	delete()

The complete flow is:

Create
POST
  ↓
create()


Read
GET
  ↓
findMany()
findUnique()


Update
PATCH
  ↓
update()


Delete
DELETE
  ↓
delete()
Outcome

I understood how REST API methods map to Prisma database operations.

</details>
<details> <summary><strong>13. Understanding Validation in Base APIs</strong></summary>
What I Learned

I connected the DTO and ValidationPipe concepts I had already learned with the new CRUD APIs.

For example:

export class CreateTenantDto {
  @IsString()
  @IsNotEmpty()
  name: string;


  @IsEmail()
  email: string;
}

When a request is sent:

{
  "name": "",
  "email": "hello"
}

the ValidationPipe checks the data before the Service is executed.

The invalid request returns:

{
  "message": [
    "name should not be empty",
    "email must be an email"
  ],
  "error": "Bad Request",
  "statusCode": 400
}

Therefore:

Request
   ↓
DTO
   ↓
ValidationPipe
   ↓
Valid?
 ↙     ↘
No      Yes
↓        ↓
400   Controller
         ↓
       Service
Outcome

I understood how validation protects the CRUD APIs from invalid incoming data.

</details>
<details> <summary><strong>14. Error Handling with NotFoundException</strong></summary>
What I Learned

When requesting a Tenant that does not exist, Prisma may return null.

Instead of returning null directly, I added an explicit check.

const tenant = await this.prisma.tenant.findUnique({
  where: { id },
});


if (!tenant) {
  throw new NotFoundException(
    `Tenant with ID ${id} not found`,
  );
}

For example:

GET /tenants/999

If Tenant 999 does not exist, the API returns a 404 Not Found response.

This gives the API consumer a meaningful error message.

Outcome

I learned how to handle missing resources properly instead of returning unclear or empty responses.

</details>
<details> <summary><strong>15. Understanding Swagger</strong></summary>
What I Learned

I learned that Swagger is used for API documentation and interactive API testing.

Swagger is not an AI tool.

It provides a UI where I can see the APIs created in my NestJS application.

For example:

Tenant


POST   /tenants
GET    /tenants
GET    /tenants/{id}
PATCH  /tenants/{id}
DELETE /tenants/{id}

Swagger allows me to select an endpoint and use:

Try it out

to send an actual HTTP request.

The request then enters my NestJS application.

The flow is:

Swagger
   ↓
HTTP Request
   ↓
Controller
   ↓
ValidationPipe
   ↓
Service
   ↓
Prisma
   ↓
PostgreSQL
   ↓
Response
   ↓
Swagger

Swagger does not directly connect to PostgreSQL.

It only provides an interface to interact with my API.

Outcome

I understood the actual role of Swagger and how it helps developers document and test APIs.

</details>
<details> <summary><strong>16. Testing APIs Using Swagger / Postman</strong></summary>
What I Learned

I tested the APIs using API testing tools such as Swagger and Postman.

Create
POST /tenants
Read All
GET /tenants
Read One
GET /tenants/1
Update
PATCH /tenants/1
Delete
DELETE /tenants/1

I tested both valid and invalid requests.

For invalid requests, I verified that the ValidationPipe returned 400 Bad Request.

For non-existing records, I verified that NotFoundException returned 404 Not Found.

Outcome

I gained practical experience testing backend APIs instead of only writing the code.

</details>
<details> <summary><strong>17. Issue I Faced – Prisma Datasource Configuration</strong></summary>
Problem

While running the migration command, I initially received:

Error: Argument "url" is missing in data source block "db".

I had accidentally written:

uurl = env(...)

instead of:

url = env(...)

After correcting it, I made another mistake by writing the actual database URL inside env():

url = env("postgresql://postgres:4563@localhost:5432/studentdb?schema=public")

Prisma then reported:

Environment variable not found:
postgresql://postgres:4563@localhost:5432/studentdb?schema=public
Solution

I understood that env() expects the name of an environment variable.

Therefore, the correct configuration is:

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

The actual database URL is stored in the environment configuration.

After correcting this, the migration succeeded.

Outcome

This error helped me clearly understand the difference between an environment variable name and its actual value.

</details>
<details> <summary><strong>18. Issue I Faced – PrismaService Dependency Injection</strong></summary>
Problem

While creating the Order module, NestJS displayed:

Nest can't resolve dependencies of the OrderService (?).

The error indicated that PrismaService was not available inside the OrderModule.

What I Learned

NestJS uses dependency injection to provide services to other classes.

If OrderService requires:

constructor(
  private readonly prisma: PrismaService,
) {}

then NestJS must know where PrismaService comes from.

If PrismaService belongs to another module, that module needs to export it and the OrderModule needs to import that module.

The basic concept is:

PrismaModule
     ↓
 exports PrismaService
     ↓
OrderModule
     ↓
OrderService
Outcome

This error helped me understand NestJS modules, providers, exports, imports, and dependency injection.

</details>
<details> <summary><strong>19. Understanding HTTP Status Codes</strong></summary>
What I Learned

I learned the purpose of common HTTP status codes used in APIs.

200 – OK

Indicates that a request was successfully processed.

Example:

GET /tenants
201 – Created

Usually returned after successfully creating a resource.

Example:

POST /tenants
400 – Bad Request

Returned when the client sends invalid data.

Example:

{
  "name": "",
  "email": "hello"
}
404 – Not Found

Returned when the requested resource does not exist.

Example:

GET /tenants/999
409 – Conflict

Can occur when the request conflicts with existing data, such as attempting to create a duplicate value for a unique field.

Outcome

I understood how HTTP status codes communicate the result of API requests.

</details>
<details> <summary><strong>20. Complete Request-Response Flow</strong></summary>
What I Learned

The most important concept I learned today was how the entire backend request flows through different layers.

For example, when creating a Tenant:

Swagger / Postman
       ↓
POST /tenants
       ↓
TenantController
       ↓
@Body()
       ↓
CreateTenantDto
       ↓
ValidationPipe
       ↓
TenantService
       ↓
PrismaService
       ↓
Prisma Client
       ↓
PostgreSQL
       ↓
Tenant Created
       ↓
Response
       ↓
Swagger / Postman

For a GET request:

Swagger / Postman
       ↓
GET /tenants/1
       ↓
TenantController
       ↓
TenantService
       ↓
PrismaService
       ↓
Prisma
       ↓
PostgreSQL
       ↓
Tenant Record
       ↓
Response

This helped me understand that each layer has a separate responsibility.

Outcome

I now understand the complete journey of an API request from the client to the database and back.

</details>
<details> <summary><strong>21. Concepts Understood</strong></summary>
Concepts Learned

Today I gained a clear understanding of:

REST API design.
REST resources.
HTTP methods.
CRUD operations.
Controllers.
Services.
DTOs.
ValidationPipe.
Prisma ORM.
Prisma Client.
PostgreSQL.
Prisma schema.
Prisma migrations.
Environment variables.
Dependency injection.
NestJS modules.
Providers.
NotFoundException.
HTTP status codes.
Swagger.
API documentation.
API testing.
Request-response flow.
Database CRUD operations.
Separation of backend responsibilities.
</details>
<details> <summary><strong>22. Key Learning Outcomes</strong></summary>

Today's learning helped me connect the concepts I had previously learned with actual database-backed APIs.

I learned how to:

Design REST APIs using resources.
Use HTTP methods for CRUD operations.
Create Controllers for API endpoints.
Use DTOs for request structures.
Validate incoming data using ValidationPipe.
Connect NestJS with PostgreSQL using Prisma.
Define database models using Prisma schema.
Apply database changes using Prisma migrations.
Perform CRUD operations using Prisma Client.
Handle missing records using NotFoundException.
Understand HTTP status codes.
Understand NestJS dependency injection.
Understand module imports and exports.
Document APIs using Swagger.
Test APIs using Swagger and Postman.
Understand the complete backend request-response flow.

The main architecture I understood is:

Client
   ↓
Controller
   ↓
DTO + ValidationPipe
   ↓
Service
   ↓
PrismaService
   ↓
Prisma
   ↓
PostgreSQL
   ↓
Response
</details>
<details> <summary><strong>23. Practical Implementation</strong></summary>
What I Implemented

During today's practice, I worked on the existing Student Management backend project.

I:

Connected Prisma with PostgreSQL.
Worked with Prisma schema models.
Created and migrated database entities.
Used Tenant as the main base entity for learning CRUD.
Created Tenant Controller.
Created Tenant Service.
Created Tenant DTO.
Implemented Create API.
Implemented Get All API.
Implemented Get One API.
Implemented Update API.
Implemented Delete API.
Added validation.
Added error handling.
Handled missing Tenant records.
Configured Swagger.
Tested API endpoints.
Debugged Prisma configuration errors.
Debugged NestJS dependency injection issues.
Outcome

I gained practical experience in building a database-connected REST API instead of learning the concepts only theoretically.

</details>
<details> <summary><strong>24. Mistakes I Made</strong></summary>
Mistake 1 – Incorrect Prisma Property

I accidentally wrote:

uurl = ...

instead of:

url = ...

This caused Prisma to report that the url argument was missing.

Mistake 2 – Incorrect Use of env()

I initially used:

url = env("postgresql://postgres:4563@localhost:5432/studentdb?schema=public")

I learned that env() requires the environment variable name.

The correct usage is:

url = env("DATABASE_URL")
Mistake 3 – PrismaService Dependency Error

While working with the Order module, NestJS could not resolve PrismaService.

This helped me understand that NestJS modules need the appropriate imports, providers, and exports for dependency injection to work.

Mistake 4 – Not Handling Missing Records

A search for a non-existing Tenant could return null.

I improved the code by checking the result:

if (!tenant) {
  throw new NotFoundException(
    `Tenant with ID ${id} not found`,
  );
}

This gives the client a meaningful 404 Not Found response.

Mistake 5 – Understanding Swagger

Initially, I thought Swagger might be doing the API/database work itself.

I learned that Swagger only provides an interactive interface for documenting and testing the API.

The actual work is still performed by:

Controller
   ↓
Service
   ↓
Prisma
   ↓
PostgreSQL
</details>
<details> <summary><strong>25. Summary</strong></summary>

Today's session helped me understand how the different backend concepts I had learned earlier connect together to form a complete REST API application.

I started from REST API design and learned how resources such as Tenant are represented using endpoints and HTTP methods. I then connected these APIs with NestJS Controllers, Services, DTOs, and ValidationPipe.

I learned how Prisma works as an ORM between NestJS and PostgreSQL, how Prisma schemas represent database models, and how migrations synchronize schema changes with the actual database.

I implemented the complete CRUD flow for the Tenant entity using create(), findMany(), findUnique(), update(), and delete() methods provided by Prisma.

I also learned how to handle missing resources using NotFoundException and understood commonly used HTTP status codes such as 200, 201, 400, 404, and 409.

Swagger helped me understand how APIs can be documented and tested through an interactive UI. I learned that Swagger sends actual HTTP requests to my NestJS application and does not directly communicate with the database.

During implementation, I faced Prisma datasource configuration errors and a NestJS dependency injection error involving PrismaService. Debugging these issues helped me understand environment variables, Prisma configuration, NestJS modules, providers, imports, and exports more clearly.

The complete architecture I learned today is:

                    Client
                       ↓
               Swagger / Postman
                       ↓
                  HTTP Request
                       ↓
                   Controller
                       ↓
                DTO + Validation
                       ↓
                 ValidationPipe
                       ↓
                    Service
                       ↓
                 PrismaService
                       ↓
                   Prisma
                       ↓
                 PostgreSQL
                       ↓
                   Response
                       ↓
              Swagger / Postman
Final Outcome

By the end of today's learning, I understood how to design and implement a complete REST API using NestJS, connect it to PostgreSQL through Prisma, create database-backed CRUD operations, validate incoming requests, handle API errors, use Swagger for API documentation and testing, and debug common backend configuration and dependency injection issues.

This gave me a strong foundation for working with larger backend modules such as Store, User, Catalogue, and Orders, where the same Controller → Service → Prisma → PostgreSQL architecture can be applied.

</details>