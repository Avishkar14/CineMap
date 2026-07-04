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

---

# 12. Graph-Oriented API Design

As CineMap evolved, the backend began exposing graph data instead of only individual movies.

Rather than returning a list of recommendations directly, the backend now returns a graph structure.

```
MovieGraphDTO

├── Nodes
└── Edges
```

This keeps the frontend independent of how graph data is generated.

Later, the graph may come from:

- TMDB recommendations
- CineMap similarity engine
- Database
- Offline graph files

The frontend will still consume the same API.

---

# 13. Backend Builds the Graph

React should never calculate movie relationships.

Wrong

```
React

↓

Fetch recommendations

↓

Create nodes

↓

Create edges
```

Correct

```
React

↓

GET /api/graph/{id}

↓

Spring Boot

↓

MovieGraphDTO

↓

React renders it
```

### Benefits

- Graph generation stays centralized.
- Business logic remains inside the backend.
- Frontend only focuses on visualization.
- Easier to replace TMDB later.

---

# 14. DTOs Represent Different Purposes

Different endpoints should return different DTOs.

Examples

```
MovieDTO
```

Used for search results.

Contains only lightweight information.

```
MovieDetailsDTO
```

Used for the movie sidebar.

Contains detailed information such as:

- Overview
- Runtime
- Genres
- Rating
- Poster

```
MovieNodeDTO
```

Used inside graph responses.

Contains only the information needed to draw graph nodes.

```
MovieEdgeDTO
```

Represents a relationship between two movies.

```
source

↓

target

↓

weight
```

```
MovieGraphDTO
```

Represents the complete graph.

```
Nodes

+

Edges
```

Each DTO exists for one specific purpose.

---

# 15. Service Layer Builds Business Objects

Controllers should remain thin.

Example

```
GraphController

↓

GraphService

↓

TMDBService

↓

TMDB API
```

Responsibilities

**GraphController**

- Receives HTTP request.
- Returns graph response.

**GraphService**

- Creates nodes.
- Creates edges.
- Builds the graph.

**TMDBService**

- Communicates with TMDB.

Each class has a single responsibility.

---

# 16. Temporary vs Permanent Architecture

The current graph uses TMDB recommendations.

```
Movie

↓

TMDB Recommendations

↓

Nodes

↓

Edges
```

This is only a temporary solution.

Eventually it will become:

```
Movie

↓

Similarity Engine

↓

Weighted Graph

↓

Community Detection

↓

Stored Graph

↓

Frontend
```

Because the frontend already consumes `MovieGraphDTO`, replacing TMDB will require little or no frontend changes.

---

# 17. API Design for Future Scalability

Instead of exposing TMDB responses directly, CineMap exposes its own API.

Example

```
GET /api/search
```

```
GET /api/movie/{id}
```

```
GET /api/graph/{id}
```

This abstraction allows the backend implementation to change without affecting the frontend.

Future improvements may include:

- Recommendation engine
- Database
- Graph cache
- Offline graph pipeline

The frontend will continue calling the same endpoints.

---

# 18. Build for Tomorrow, Not Just Today

While implementing the graph prototype, several design decisions were made with future scalability in mind.

Examples

- Separate GraphService from TMDBService.
- Separate graph DTOs from movie DTOs.
- Build graph endpoints instead of returning raw recommendation lists.
- Keep graph generation independent from visualization libraries.

This allows CineMap to evolve from a simple recommendation application into a persistent movie universe without major architectural changes.

---

# Backend Architecture (Current)

```
React Frontend

↓

MovieController
GraphController

↓

TMDBService
GraphService

↓

TMDB API
```

---

# Planned Architecture

```
React

↓

MovieController
GraphController

↓

RecommendationService

↓

Similarity Engine

↓

Graph Builder

↓

Community Detection

↓

Stored Graph

↓

Frontend Visualization
```

---

# Key Lesson

A good backend is not only about making features work.

It should:

- Separate responsibilities clearly.
- Hide implementation details.
- Return only the required data.
- Remain flexible enough to support future features without major redesign.

The architecture created during the graph prototype stage lays the foundation for CineMap's long-term vision of a persistent, explorable movie graph.
