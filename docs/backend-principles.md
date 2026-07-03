# Backend Design Principles

> This document contains backend engineering principles learned while building CineMap.
> These principles are framework-independent and can be applied to most backend projects.

---

# 1. Separation of Concerns (SoC)

A backend should be divided into separate layers, where each layer has one responsibility.

Example:

Client

↓

Controller

↓

Service

↓

Repository / External API

Responsibilities:

Controller
- Receive HTTP requests
- Validate request parameters
- Call the appropriate service
- Return HTTP response

Service
- Business logic
- Calculations
- Recommendation logic
- External API communication

Repository
- Database access only

Never put database logic or external API calls directly inside controllers.

Reason

- Easier to maintain
- Easier testing
- Cleaner architecture
- Reusable code

---

# 2. Thin Controllers

Controllers should stay as small as possible.

Good

Controller

↓

TMDBService.searchMovies(query)

Bad

Controller

↓

Construct URL

↓

Call TMDB

↓

Parse JSON

↓

Business Logic

Reason

Controllers should only coordinate requests.

---

# 3. Business Logic Belongs in Services

All processing should happen inside services.

Example

MovieController

↓

TMDBService

↓

TMDB API

NOT

MovieController

↓

TMDB API

Reason

Business logic is reusable.

Example

Later

MovieController

AdminController

RecommendationController

can all use

TMDBService

---

# 4. Constructor Injection

Always inject dependencies using constructors.

Good

private final TMDBService tmdbService;

public MovieController(TMDBService tmdbService){
    this.tmdbService = tmdbService;
}

Reason

- Immutable
- Easy testing
- Explicit dependencies
- Recommended by Spring

Avoid Field Injection.

---

# 5. Single Responsibility Principle (SRP)

Each class should have only one responsibility.

Example

MovieController

↓

Only HTTP endpoints.

TMDBService

↓

Only TMDB communication.

MovieDTO

↓

Only represents movie data.

Reason

Changing one feature should not require changing unrelated classes.

---

# 6. DTO Principle

Use DTOs to transfer data between layers.

Example

TMDB JSON

↓

MovieDTO

↓

React

Reason

- Hide unnecessary data
- Decouple internal models
- Easier frontend development

---

# 7. Different DTOs for Different Use Cases

Do NOT create one huge DTO.

Instead

MovieDTO

↓

Search Results

MovieDetailsDTO

↓

Single Movie Details

Reason

Search results need only limited information.

Movie details require much more data.

This reduces payload size.

---

# 8. Only Map Required Fields

External APIs often return many fields.

Example

TMDB returns 50+ fields.

Do not map everything.

Only include fields your application currently needs.

Reason

- Smaller classes
- Easier maintenance
- Easier evolution

Jackson ignores unknown JSON fields automatically.

---

# 9. Mirror Nested JSON Using DTOs

Instead of

List<String> genres

Use

List<GenreDTO>

Reason

Preserves structure.

Allows future expansion.

Example

GenreDTO

- id
- name

Later we may use

- genre IDs
- clustering
- similarity
- statistics

without redesigning the application.

---

# 10. API Evolution

Build APIs gradually.

Version 1

GET /api/health

↓

Version 2

GET /api/search

↓

Version 3

GET /api/movie/{id}

↓

Version 4

GET /api/recommendations/{id}

Do not build everything on day one.

---

# 11. Lightweight List APIs

List endpoints should return lightweight objects.

Example

Search Results

MovieDTO

- id
- title
- poster
- rating

NOT

overview

runtime

budget

production companies

Reason

Fast loading.

Lower bandwidth.

Better scalability.

---

# 12. Detailed APIs for Individual Resources

When users request one movie,

return

MovieDetailsDTO

containing

- overview
- runtime
- genres
- release date
- poster
- rating

Reason

Only fetch expensive information when needed.

---

# 13. Backend Should Hide External APIs

React should never know how TMDB works.

Wrong

React

↓

TMDB

Correct

React

↓

Spring Boot

↓

TMDB

Benefits

- API key remains secure
- Easier to switch providers
- Business logic stays centralized

---

# 14. Design for Future Growth

Think one or two features ahead.

Example

GenreDTO

instead of

List<String>

because genres will later be used for

- similarity
- clustering
- recommendation engine

Avoid redesigning later.

---

# 15. Performance First

Suppose

300 movies

Option A

300 MovieDetailsDTO

Very heavy.

Option B

300 MovieDTO

↓

1 MovieDetailsDTO

Much faster.

Always send the minimum required data.

---

# 16. Think Before Coding

Before writing code ask:

✓ Is this Controller logic?

✓ Is this Service logic?

✓ Should this be another DTO?

✓ Should this be another endpoint?

✓ Can this class be reused?

✓ Will this design scale?

These questions often prevent poor architecture.

---

# Backend Architecture Used in CineMap

React

↓

MovieController

↓

TMDBService

↓

TMDB API

Later

React

↓

MovieController

↓

RecommendationService

↓

Python Similarity Engine

↓

PostgreSQL

↓

TMDB API

The architecture grows feature-by-feature instead of being over-engineered from the beginning.

---

# Key Lesson

Good backend development is not about writing more code.

It is about placing the right code in the right layer.
