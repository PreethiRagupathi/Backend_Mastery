# 22.07.2026

# Building First REST API Endpoints with NestJS

## Objective

Today's objective was to understand how REST APIs work in NestJS by creating GET and POST endpoints. I learned how controllers receive HTTP requests, how services handle business logic, how data is transferred between the client and the server, and how to test APIs using Postman.

---

## Topics Covered

### 1. Understanding REST API Endpoints

I learned that an endpoint is a URL where the backend listens for client requests.

Example:

```http
GET /booking
POST /booking
```

Each endpoint performs a specific operation based on the HTTP method.

---

### 2. HTTP Methods

I learned the purpose of two commonly used HTTP methods.

#### GET

- Used to retrieve data from the server.
- Does not modify existing data.

Example:

```http
GET /booking
```

#### POST

- Used to send new data to the server.
- Creates or stores new data.

Example:

```http
POST /booking
```

---

### 3. Generating NestJS Resources

Using the NestJS CLI, I generated a new module, controller, and service for the Booking feature.

Commands used:

```bash
nest g mo booking
nest g co booking
nest g s booking
```

This created a separate Booking module following NestJS architecture.

---

### 4. Creating the GET Endpoint

I created a GET endpoint that returns a list of bookings.

Controller:

```ts
@Get()
getBookings(): string[] {
  return this.bookingService.getAllBookings();
}
```

Service:

```ts
getAllBookings(): string[] {
  return this.bookings;
}
```

I tested the endpoint by visiting:

```http
http://localhost:3000/booking
```

The API returned the booking list as JSON.

---

### 5. Creating the POST Endpoint

I created a POST endpoint that accepts booking data from the client.

Controller:

```ts
@Post()
addBooking(@Body() body: { booking: string }): string {
  return this.bookingService.addBooking(body.booking);
}
```

Service:

```ts
addBooking(booking: string): string {
  this.bookings.push(booking);
  return `${booking} added successfully`;
}
```

The POST endpoint receives data from the request body and passes it to the service.

---

### 6. Understanding @Body()

I learned that the `@Body()` decorator reads the JSON data sent by the client.

Example request body:

```json
{
  "booking": "Electric Bike Booking"
}
```

The controller extracts the value and sends it to the service for processing.

---

### 7. Testing APIs Using Postman

I learned how to test backend APIs using Postman.

Steps followed:

- Selected the POST method.
- Entered the API URL.
- Chose Body → raw → JSON.
- Sent booking data.
- Verified the success response.
- Used the GET endpoint again to confirm the newly added booking.

---

### 8. Data Storage

I learned that the booking data is currently stored inside an in-memory array.

```ts
private bookings = [
  "Mountain Bike Booking",
  "Road Bike Booking",
  "Hybrid Bike Booking",
];
```

I also understood that restarting the server resets the data because no database has been connected yet.

---

## Project Work Completed

- Generated the Booking module.
- Generated the Booking controller.
- Generated the Booking service.
- Implemented a GET endpoint to retrieve bookings.
- Implemented a POST endpoint to add a new booking.
- Used `@Body()` to receive request data.
- Tested both endpoints successfully using Postman.
- Verified that newly added bookings were returned by the GET endpoint.

---

## Mistakes Made and Corrections

### Mistake 1

Initially, I was unsure about the difference between GET and POST methods.

**Correction:** Understood that GET retrieves data while POST sends new data to the server.

---

### Mistake 2

Initially, I did not understand how the controller and service communicate.

**Correction:** Learned that the controller receives the request and delegates the business logic to the service.

---

### Mistake 3

Initially, I did not know how request data reaches the backend.

**Correction:** Learned to use the `@Body()` decorator to receive JSON data from the client.

---

### Mistake 4

Initially, I assumed the added booking would be permanently stored.

**Correction:** Understood that the current implementation stores data only in memory and it resets when the server restarts.

---

## Key Takeaways

- REST APIs are built using endpoints.
- GET retrieves data from the server.
- POST sends new data to the server.
- Controllers handle incoming HTTP requests.
- Services contain business logic.
- `@Body()` is used to read request data.
- Postman is used to test backend APIs.
- Data stored in memory is temporary and is lost when the server restarts.
- Separating controllers and services makes applications more organized and maintainable.
```