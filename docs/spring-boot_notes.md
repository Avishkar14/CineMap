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

# Spring Boot Notes

---

# @Configuration

## Definition

`@Configuration` tells Spring that this class contains Spring configuration and bean definitions.

Spring creates an object of this class during application startup.

## Example

```java
@Configuration
public class AppConfig {

    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}
```

## Why use it?

Instead of creating objects manually everywhere, we create them once and let Spring manage them.

Without Configuration:

```
Controller
    ↓
new RestTemplate()

Service
    ↓
new RestTemplate()

Another Service
    ↓
new RestTemplate()
```

Multiple objects are created.

With Configuration:

```
@Configuration
        ↓
Creates one RestTemplate Bean
        ↓
Stored inside IoC Container
        ↓
Shared wherever needed
```

---

# @Bean

## Definition

`@Bean` tells Spring that the object returned by this method should be managed by Spring.

## Example

```java
@Bean
public RestTemplate restTemplate() {
    return new RestTemplate();
}
```

Spring executes this method once during startup.

The returned object is stored in the IoC Container.

## Why not @Service?

`RestTemplate` is not our own service class.

It is a library class.

Since we cannot modify its source code to add annotations, we create it manually using `@Bean`.

---

# IoC (Inversion of Control) Container

## Definition

The IoC Container is Spring's object manager.

It creates, stores and provides objects (Beans).

Instead of writing:

```java
new TMDBService();
```

Spring creates the object.

Applications simply request it.

---

## What is stored?

```
IoC Container

RestTemplate

TMDBService

MovieController

HealthController
```

These objects are called Beans.

---

# Spring Bean

## Definition

A Bean is simply an object managed by Spring.

Example:

```
RestTemplate Bean

TMDBService Bean

MovieController Bean
```

Not every object is a Bean.

Example:

```java
String name = "Batman";
```

This is a normal Java object, not a Bean.

---

# Dependency Injection (DI)

## Definition

Dependency Injection means Spring provides required objects instead of us creating them manually.

Without DI

```java
TMDBService service = new TMDBService(new RestTemplate());
```

With DI

```java
private final TMDBService tmdbService;

public MovieController(TMDBService tmdbService){
    this.tmdbService = tmdbService;
}
```

Spring automatically supplies the existing TMDBService Bean.

---

# Constructor Injection

## Definition

Constructor Injection is the recommended way of Dependency Injection.

Example

```java
private final TMDBService tmdbService;

public MovieController(TMDBService tmdbService){
    this.tmdbService = tmdbService;
}
```

Spring checks the constructor.

It sees that TMDBService is required.

It searches the IoC Container.

If found, it passes the existing Bean.

---

## Why Constructor Injection?

- Dependencies are mandatory.
- Objects become immutable (`final`).
- Easier to test.
- Recommended by Spring.

---

# @Value

## Definition

`@Value` injects values from `application.properties`.

Example

```java
@Value("${tmdb.api.key}")
private String apiKey;
```

application.properties

```properties
tmdb.api.key=YOUR_API_KEY
```

Spring replaces

```
${tmdb.api.key}
```

with

```
YOUR_API_KEY
```

during startup.

---

# RestTemplate

## Definition

RestTemplate is Spring's HTTP client.

It sends HTTP requests to external APIs.

Example

```java
restTemplate.getForObject(url, String.class);
```

Meaning

- Send HTTP GET request
- Receive response
- Convert response into String

---

## Why create RestTemplate Bean?

Because multiple services may need to call external APIs.

Instead of creating a new RestTemplate every time, Spring creates one Bean and shares it.

---

# Controller

## Responsibility

Controller handles HTTP requests.

Responsibilities

- Receive request
- Read parameters
- Call Service
- Return response

Controllers should contain very little business logic.

Example

```java
@GetMapping("/search")
public String searchMovies(@RequestParam String query){
    return tmdbService.searchMovies(query);
}
```

---

# Service

## Responsibility

Service contains business logic.

Responsibilities

- External API calls
- Database operations
- Calculations
- Processing

Example

```java
public String searchMovies(String query){

    String url = ...

    return restTemplate.getForObject(url, String.class);

}
```

---

# @RequestParam

## Definition

Extracts query parameters from URL automatically.

Example URL

```
/api/search?query=Batman
```

Controller

```java
@GetMapping("/search")
public String searchMovies(@RequestParam String query)
```

Spring automatically does

```java
String query = "Batman";
```

No manual parsing is required.

---

# Complete Request Flow

```
Browser

↓

GET /api/search?query=Batman

↓

Spring Boot

↓

MovieController

↓

TMDBService

↓

RestTemplate

↓

TMDB API

↓

JSON Response

↓

RestTemplate

↓

TMDBService

↓

MovieController

↓

Browser
```

---

# Application Startup Flow

```
BackendApplication

↓

SpringApplication.run()

↓

Create IoC Container

↓

Scan Packages

↓

Create AppConfig Bean

↓

Create RestTemplate Bean

↓

Create TMDBService Bean

↓

Inject RestTemplate

↓

Inject @Value properties

↓

Create MovieController Bean

↓

Inject TMDBService

↓

Server Ready
```

---

# Constructor Injection Flow

```
MovieController needs TMDBService

↓

Spring checks IoC Container

↓

TMDBService Bean found

↓

Inject into constructor

↓

MovieController created
```

Similarly,

```
TMDBService needs RestTemplate

↓

Spring checks IoC Container

↓

RestTemplate Bean found

↓

Inject into constructor

↓

TMDBService created
```

---

# Why return String first?

Instead of immediately creating DTOs, we first verify that

- API key is correct
- URL is correct
- RestTemplate works
- API call succeeds

Returning String makes debugging easier.

Once the API works, we will map JSON into DTOs.

---

# Concepts Learned Today

- @Configuration
- @Bean
- IoC Container
- Spring Bean
- Dependency Injection
- Constructor Injection
- @Value
- RestTemplate
- Controller
- Service
- @RequestParam
- External API Call
- Request Lifecycle
## JSON → Java Object → JSON Flow

Earlier, we returned the TMDB response as a raw `String`. While this proved that the API call worked, working with a JSON string is inconvenient because Java cannot directly access individual fields.

Example:

```java
String response = restTemplate.getForObject(url, String.class);
```

To access the movie title from this string, we would have to manually parse the JSON.

Instead, we changed the response type to:

```java
SearchResponseDTO response =
        restTemplate.getForObject(url, SearchResponseDTO.class);
```

Now Spring automatically converts the JSON into Java objects.

---

## Jackson Deserialization

When TMDB returns JSON:

```json
{
    "page":1,
    "results":[
        {
            "id":414906,
            "title":"The Batman"
        }
    ]
}
```

Jackson performs the following internally:

```java
SearchResponseDTO response = new SearchResponseDTO();

response.setPage(1);

MovieDTO movie = new MovieDTO();
movie.setId(414906);
movie.setTitle("The Batman");

response.setResults(List.of(movie));
```

This process is called **Deserialization**.

**Definition**

Deserialization is the process of converting JSON into Java Objects.

---

## Why did we create setters if we never update TMDB data?

Initially it seems that setters are unnecessary because our application never modifies the movie information.

However, **Jackson uses the setters**, not us.

Example:

TMDB sends

```json
{
    "title":"Batman Begins"
}
```

Jackson automatically calls

```java
movie.setTitle("Batman Begins");
```

Our own code only reads the data using getters.

Example

```java
movie.getTitle();
```

Therefore:

- **Setters** → Mainly used by Jackson while creating Java objects.
- **Getters** → Used by our application while reading data.

---

## Jackson Serialization

When the controller returns

```java
return response;
```

Spring again uses Jackson.

This time it performs the opposite conversion:

Java Object

↓

JSON

↓

Browser / React

This process is called **Serialization**.

---

## Complete Data Flow

```
TMDB API
      │
      ▼
JSON Response
      │
      ▼
Jackson (Deserialization)
      │
      ▼
SearchResponseDTO
      │
Business Logic
      │
      ▼
Controller returns Java Object
      │
      ▼
Jackson (Serialization)
      │
      ▼
JSON
      │
      ▼
React Frontend
```

Jackson therefore works in **both directions**:

- JSON → Java Objects (Deserialization)
- Java Objects → JSON (Serialization)

---

## Why convert JSON into Java Objects if React needs JSON again?

Because Java business logic should work with Java objects instead of raw JSON strings.

Using DTOs allows us to:

- Read fields easily using getters.
- Filter unwanted fields.
- Rename fields.
- Combine data from multiple APIs.
- Add data from our own database.
- Validate and process responses before sending them to the frontend.

The frontend should communicate only with **our API**, not directly depend on TMDB's response structure.

This allows the backend to change its internal implementation without affecting the frontend.

