# 09.08.2026

# NestJS Setup, Configuration, Health Check & Logging

## Objective

Today's objective was to strengthen the NestJS project foundation by configuring environment variables, creating a health-check API, setting up application logging, testing the endpoints, and committing the changes to Git.

---

## NestJS Project Setup

I verified the existing NestJS Student Management project and confirmed that the application runs successfully in development mode using `npm run start:dev`.

### Learned
- How the NestJS project is structured.
- How to start and verify a NestJS application.
- How different modules such as Student and Prisma are integrated into the application.

---

## Configuration & Environment Variables

I configured environment variable support using the `@nestjs/config` package.

Installed:

```bash
npm install @nestjs/config
```

Configured `ConfigModule` in `app.module.ts`:

```ts
ConfigModule.forRoot({
  isGlobal: true,
})
```

### Learned
- Purpose of environment variables.
- How `.env` stores configuration values separately from application code.
- How `ConfigModule` loads environment variables into a NestJS application.
- Why configuration should be separated from the application source code.

---

## Health-Check API

I created a dedicated health-check controller using the NestJS CLI and implemented a `GET /health` endpoint.

The endpoint returns:

```json
{
  "status": "ok",
  "message": "Student Management API is running"
}
```

### Learned
- How to create a controller using the NestJS CLI.
- How `@Controller()` defines a route prefix.
- How `@Get()` handles GET requests.
- Purpose of a health-check endpoint in verifying application availability.

---

## Logging Setup

I used the built-in `Logger` class provided by NestJS through `@nestjs/common`.

```ts
private readonly logger = new Logger(HealthController.name);
```

The health-check endpoint logs when it is accessed:

```ts
this.logger.log('Health check endpoint called');
```

### Learned
- `Logger` is a NestJS-provided class, not a separate package.
- How to create a Logger instance.
- How `logger.log()` records application activity.
- How logs help with monitoring, debugging, and identifying application issues.
- Difference between application functionality and logging: logging provides visibility into what the application is doing.

---

## Testing

I tested the health-check endpoint successfully using:

```text
GET http://localhost:3000/health
```

The API returned the expected health status and the corresponding log message was displayed in the terminal.

---

## Git Commit

After completing and testing the changes, I committed the day's work to Git.

### Learned
- Checking project changes using `git status`.
- Staging changes using `git add .`.
- Creating a meaningful commit using `git commit`.

---

## Overall Learning

Today's session helped me understand the basic production-ready foundation of a NestJS application. I learned how to manage environment configuration, create a health-check endpoint, use NestJS's built-in logging system, test the application, and maintain the changes using Git.