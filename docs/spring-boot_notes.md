# 📚 CineMap Learning Notes
 
These are notes created while building CineMap. The goal is to understand **why** something is used, not just memorize syntax.

---

# Spring Boot Request Flow

When a user visits an endpoint:

```
Browser
    │
    ▼
Tomcat (Embedded Server)
    │
    ▼
Spring DispatcherServlet
    │
    ▼
Find Matching Controller
    │
    ▼
Execute Method
    │
    ▼
Return Object
    │
    ▼
Jackson converts Java Object → JSON
    │
    ▼
Browser receives JSON
```

Example:

```
GET /api/health

↓

HealthController.health()

↓

Map<String,String>

↓

JSON

↓

{
   "status":"Backend is running"
}
```

---

# Package

```java
package com.cinemap.backend.controller;
```

## Purpose

Packages organize Java classes.

Think of them as folders.

Example:

```
com
 └── cinemap
      └── backend
            └── controller
```

The package declaration must match the folder structure.

---

# Imports

Imports allow us to use classes without writing their full package name.

Instead of

```java
org.springframework.web.bind.annotation.GetMapping
```

we simply write

```java
@GetMapping
```

Example imports:

```java
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;
```

---

# @RestController

```java
@RestController
```

## Purpose

Marks this class as a REST API controller.

Spring scans all classes during startup.

If it finds `@RestController`, it registers the class to handle HTTP requests.

Without it:

```
Class exists

↓

Spring ignores it

↓

No API endpoint
```

---

# @RequestMapping

```java
@RequestMapping("/api")
```

## Purpose

Defines a base URL for every endpoint inside the controller.

Example

```java
@RequestMapping("/api")
```

and

```java
@GetMapping("/health")
```

combine to become

```
/api/health
```

Benefits

- Keeps endpoints organized
- Avoids repeating "/api" everywhere

---

# @GetMapping

```java
@GetMapping("/health")
```

## Purpose

Handles HTTP GET requests.

Whenever someone visits

```
GET /api/health
```

Spring executes the annotated method.

Without it, Spring doesn't know which URL should call the method.

---

# Controller

```java
public class HealthController
```

A normal Java class.

Nothing special until Spring annotations are added.

---

# Method

```java
public Map<String,String> health()
```

## Return Type

```
Map<String,String>
```

Returns key-value data.

Spring automatically converts it into JSON.

---

# Map.of()

```java
return Map.of("status","Backend is running");
```

Creates an immutable Map.

Equivalent to

```java
Map<String,String> map = new HashMap<>();

map.put("status","Backend is running");

return map;
```

but shorter.

---

# Why use Map instead of String?

This works:

```java
@GetMapping("/health")
public String health(){
    return "Backend is running";
}
```

Response

```
Backend is running
```

Current approach

```java
return Map.of("status","Backend is running");
```

Response

```json
{
   "status":"Backend is running"
}
```

JSON is preferred because APIs usually return structured data.

Later we can easily extend it.

Example

```json
{
   "status":"Running",
   "version":"1.0",
   "time":"10:30"
}
```

---

# JSON

JSON = JavaScript Object Notation

Example

```json
{
    "name":"Interstellar",
    "year":2014,
    "rating":8.7
}
```

Most frontend-backend communication happens using JSON.

---

# What is Jackson?

Jackson is the library used by Spring Boot to convert Java Objects into JSON.

Example

Java

```java
Map.of("status","Backend is running")
```

Automatically becomes

```json
{
    "status":"Backend is running"
}
```

No manual conversion is required.

---

# HTTP Methods

## GET

Retrieve data.

Examples

```
GET /api/movies

GET /api/health
```

Should not modify data.

---

## POST

Create new data.

Example

```
POST /api/movie
```

Usually receives JSON.

---

## PUT

Update existing data.

Example

```
PUT /api/movie/5
```

---

## DELETE

Delete existing data.

Example

```
DELETE /api/movie/5
```

---

# Common Spring Boot Annotations

| Annotation | Purpose |
|------------|---------|
| @SpringBootApplication | Starts Spring Boot application |
| @RestController | Creates REST APIs |
| @RequestMapping | Base URL for controller |
| @GetMapping | Handles GET requests |
| @PostMapping | Handles POST requests |
| @PutMapping | Handles PUT requests |
| @DeleteMapping | Handles DELETE requests |
| @RequestBody | Reads JSON from request body |
| @RequestParam | Reads query parameters |
| @PathVariable | Reads values from URL |
| @Service | Business logic layer |
| @Repository | Database layer |
| @Autowired | Injects dependencies (older style; constructor injection is preferred now) |

---

# Key Takeaways

- Packages organize code.
- Imports make classes available.
- `@RestController` tells Spring this class handles HTTP requests.
- `@RequestMapping` creates a base URL.
- `@GetMapping` maps GET requests to a method.
- Spring automatically converts Java Objects into JSON using Jackson.
- REST APIs usually return JSON instead of plain text.

---

# Interview Questions

### Why use @RestController instead of @Controller?

`@RestController` returns JSON directly.

`@Controller` is mainly used for returning HTML views (Thymeleaf/JSP).

---

### Why use JSON?

- Lightweight
- Human readable
- Language independent
- Easy for frontend to parse

---

### Why return Map instead of String?

Because REST APIs usually return structured JSON.

It is easier to extend in the future.

---

### What happens when GET /api/health is called?

```
Browser

↓

Tomcat

↓

DispatcherServlet

↓

HealthController.health()

↓

Map

↓

Jackson

↓

JSON

↓

Browser
```
# @CrossOrigin

```java
@CrossOrigin(origins = "http://localhost:5173")
```

## Purpose

Allows requests from another origin (frontend).

Example

Frontend

```
http://localhost:5173
```

Backend

```
http://localhost:8080
```

Since ports are different, browsers consider them different origins.

Without `@CrossOrigin`, the browser blocks the request due to the Same-Origin Policy.

---

## What is CORS?

CORS = Cross-Origin Resource Sharing.

It is a browser security mechanism.

It allows or blocks requests made from different origins.

Example

```
React
http://localhost:5173

↓

Spring Boot
http://localhost:8080

↓

Allowed because of @CrossOrigin
```

Without it:

```
CORS Error
Access to fetch has been blocked.
```

---

## Interview Question

### Why do we use @CrossOrigin?

`@CrossOrigin` allows browsers to make requests from a different origin (domain, protocol, or port). It is commonly used when the frontend and backend run on different servers or ports.
