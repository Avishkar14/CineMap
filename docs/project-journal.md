# CineMap Development Journal

---

# Day 1

## Objective

Complete project setup and connect frontend with backend.

---

## Completed

- Created GitHub repository.
- Created project structure.
- Initialized React with Vite and TypeScript.
- Initialized Spring Boot backend.
- Configured Maven.
- Created HealthController.
- Implemented `/api/health`.
- Connected React frontend with Spring Boot backend using Fetch API.
- Displayed backend status on the frontend.
- Created initial documentation.

---

## Concepts Learned

### Spring Boot

- @RestController
- @RequestMapping
- @GetMapping
- @CrossOrigin
- JSON Response
- Jackson
- REST API

### React

- Functional Components
- JSX
- useState
- useEffect
- Fetch API
- Promise
- response.json()
- .then()
- .catch()

---

## Challenges

- Maven was not detected initially.
- React blank page caused by incorrect capitalization (`usestate` vs `useState`).
- Understood React state management.

---

## Next Goal

Issue #2

Implement movie search using TMDB API.
## Day 2 - TMDB Integration

### Completed

- Created AppConfig class
- Created RestTemplate Bean
- Learned IoC Container and Beans
- Learned Dependency Injection
- Learned Constructor Injection
- Created TMDBService
- Injected API key using @Value
- Created MovieController
- Added `/api/search` endpoint
- Connected backend with TMDB API
- Successfully fetched live movie data
- Debugged and fixed URL construction (`&query=`)

### Concepts Learned

- @Configuration
- @Bean
- IoC Container
- Spring Beans
- Dependency Injection
- Constructor Injection
- RestTemplate
- @Value
- @RequestParam
- Controller vs Service
- Spring Request Lifecycle

### Challenges Faced

- Search endpoint returned empty results.
- Found that the generated URL was:
  `...&queryBatman`
- Fixed it to:
  `...&query=Batman`

### Result

Successfully fetched live TMDB movie data from the backend.

### Next Goals

- DTO Mapping
- JSON to Java Objects (Jackson)
- Connect React to backend
- Display movie cards
## Day 2 - Issue #2 Completed (Movie Search)

### Objective

Complete end-to-end movie search functionality.

### Work Completed

#### Backend

- Integrated TMDB Search API.
- Created `SearchResponseDTO` and `MovieDTO`.
- Converted JSON responses into Java objects using Jackson.
- Returned DTOs from Spring Boot instead of raw JSON strings.
- Fixed CORS issue to allow React requests.

#### Frontend

- Connected React with Spring Boot backend.
- Displayed movie titles dynamically.
- Added movie posters.
- Added search input and Search button.
- Added loading indicator.
- Added error handling using `.catch()`.
- Added "No movies found" message.
- Moved movie display into a reusable `MovieCard` component.
- Styled movie cards using CSS Grid.

### Bugs Fixed

- Incorrect TMDB URL (`queryBatman` instead of `query=Batman`).
- React crash when backend returned an error.
- Missing App.css import causing layout issues.
- Poster loading issue for movies without posters.
- CORS blocking frontend requests.

### Concepts Learned

Backend

- RestTemplate
- DTOs
- Jackson
- Serialization
- Deserialization

Frontend

- Props
- State Arrays
- map()
- Conditional Rendering
- Component Separation

### Project Status

✅ Issue #2 Complete

Project Direction Update

After completing movie search, the project vision was refined.

Initially, the focus was on building a movie search application using TMDB.

However, the primary objective of CineMap is not to become another movie database like TMDB or IMDb.

The search feature exists only as an entry point into the graph.

The long-term goal is to build an interactive graph visualization where movies are represented as nodes connected by similarity.

Unlike TMDB's "Related Movies", CineMap will eventually calculate its own similarity scores using multiple movie attributes.

Possible similarity factors include:

Genre
Keywords
Director
Cast
Runtime
Rating
Release Year
Popularity

These weighted scores will determine graph edges and node distances.

The graph should allow users to:

Explore connected movies visually
Discover recommendations naturally
Zoom and pan across clusters
Click any movie to expand nearby recommendations
View detailed information inside a sidebar without leaving the graph

The inspiration comes from interactive graph explorers rather than traditional movie websites.

Next Goal
Next Development Roadmap
Phase 3 — Graph Foundation
Issue #3

Movie Details API

Create endpoint

GET /api/movie/{id}

Return:

title
poster
overview
genres
runtime
release date
rating

Purpose:

Provide detailed information when a movie node is selected.

Issue #4

Movie Details Sidebar

Instead of opening another page,

display movie information inside a sidebar.

The graph should remain visible while the selected movie information updates.

Issue #5

Integrate Cytoscape.js

Create the first interactive graph.

Initially display a single movie node.

Learn:

Nodes
Edges
Layouts
Zoom
Pan
Click Events
Issue #6

Generate Graph from Recommendations

Use TMDB recommendations temporarily.

Selected Movie
        ↓
TMDB Recommendations
        ↓
Graph Nodes
        ↓
Graph Edges

This provides the first working visualization.

Phase 4 — CineMap Recommendation Engine
Issue #7

Design Similarity Algorithm

Research and define weighted similarity using:

Genres
Keywords
Directors
Cast
Runtime
Rating
Popularity
Release Year
Issue #8

Build Recommendation Engine

Replace TMDB recommendations with CineMap-generated similarity scores.

Each movie will receive a similarity percentage relative to the selected movie.

Example:

Batman

↓

Joker
92%

↓

Se7en
88%

↓

Prisoners
86%

↓

Zodiac
84%
Issue #9

Graph Clustering

Automatically cluster movies based on similarity.

The interface should resemble an interactive knowledge graph where nearby movies are more closely related than distant ones.

Issue #10

Interactive Graph Exploration

Allow users to:

Click any node
Smoothly center the graph
Highlight neighboring movies
Expand recommendations
Update sidebar information dynamically

No page reloads should occur.
