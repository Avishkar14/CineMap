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

# 🚀 Updated Development Roadmap

## ✅ Phase 1 — Foundation (Completed)

* [x] Spring Boot backend setup
* [x] React + TypeScript frontend setup
* [x] TMDB API integration
* [x] Movie search
* [x] Movie details endpoint (`GET /api/movie/{id}`)
* [x] Movie details panel
* [x] Frontend ↔ Backend integration
* [x] Project structure established

---

# 🗺️ Phase 2 — Graph Prototype

### ✅ Issue #5 — Graph Data Model

Create the backend graph model.

DTOs:

* Node
* Edge
* Graph

Create:

* `GraphService`

Purpose:

Define a clean graph architecture independent of the visualization library.

---

### Issue #6 — Initial Graph Visualization

Research and evaluate graph rendering approaches.

Current direction:

* React
* D3 Force Simulation
* SVG (initially)

Goals:

* Render movie nodes
* Render edges
* Zoom
* Pan
* Click events

Purpose:

Learn how the visualization layer communicates with the graph model.

---

### Issue #7 — Temporary Recommendation Graph

Temporarily use TMDB recommendations.

Selected Movie

↓

TMDB Recommendations

↓

Graph Nodes

↓

Graph Edges

Purpose:

Build the first interactive graph while the CineMap recommendation engine is still under development.

This layer will later be replaced.

---

# 🌌 Phase 3 — CineMap Data Pipeline

Move from live API responses toward an offline-generated movie universe.

### Issue #8 — Metadata Collection

Download movie metadata from TMDB.

Potential metadata:

* Genres
* Keywords
* Cast
* Directors
* Runtime
* Ratings
* Release Year
* Popularity
* Posters

Store locally for preprocessing.

---

### Issue #9 — Similarity Engine

Design CineMap's weighted similarity algorithm.

Potential factors:

* Genres
* Keywords
* Director
* Cast
* Runtime
* Rating
* Popularity
* Release Year

Output:

Movie A

↓

Movie B

↓

Similarity Score

Example:

Batman → Joker (92%)

Batman → Se7en (88%)

Batman → Zodiac (84%)

---

### Issue #10 — Graph Builder

Generate a weighted graph from similarity scores.

Movies become nodes.

Similarity becomes weighted edges.

This replaces TMDB recommendations.

---

# 🧠 Phase 4 — Offline Graph Processing

Create the persistent CineMap universe.

### Issue #11 — Community Detection

Cluster related movies.

Possible algorithms:

* Louvain
* Infomap
* Leiden

Purpose:

Create natural movie communities.

Examples:

Action

Crime

Sci-Fi

Anime

Classic Films

---

### Issue #12 — Layout Generation

Generate graph coordinates offline using force simulation.

Current direction:

D3 Force Simulation

Compute:

* x
* y
* Cluster positions

Store coordinates.

The browser should load a precomputed layout instead of calculating positions every time.

---

### Issue #13 — Graph Export

Export processed data.

Examples:

* metadata.json
* graph.json
* clusters.json
* positions.json

Frontend loads these files directly.

---

# 🎬 Phase 5 — CineMap Explorer

Turn the graph into a navigable movie universe.

### Issue #14 — Interactive Navigation

Features:

* Smooth zoom
* Smooth pan
* Camera fly-to animation
* Node highlighting
* Neighbor expansion
* Cluster exploration

Search should navigate to an existing movie instead of creating a new graph.

---

### Issue #15 — Sidebar

Persistent sidebar.

Displays:

* Poster
* Overview
* Genres
* Runtime
* Rating
* Similar movies

Graph remains visible while browsing.

No page reloads.

---

### Issue #16 — Visual Polish

Improve exploration experience.

Potential additions:

* Cluster labels
* Poster nodes at high zoom
* Dynamic level of detail
* Smooth animations
* Search suggestions
* Filtering
* Better UI (shadcn/ui)
* GSAP transitions where appropriate

---

# 🎯 Long-Term Vision

CineMap is **not** intended to become another movie database like TMDB or IMDb.

Movie search serves only as the entry point into a persistent, explorable movie universe.

The long-term goal is to build an interactive graph where:

* Search navigates to an existing movie.
* Similarity is computed by CineMap.
* Communities emerge naturally through clustering.
* Layout is generated offline.
* Users freely explore movies through connected relationships.

The experience should resemble navigating a living map rather than browsing search results.

---

# Day 3

## Objective

Extend CineMap from a movie search application into the foundation of a graph-based recommendation system.

---

## Completed

### Backend

- Created a graph architecture using DTOs.
- Added `MovieNodeDTO`.
- Added `MovieEdgeDTO`.
- Added `MovieGraphDTO`.
- Created `GraphService`.
- Created `GraphController`.
- Implemented:

```
GET /api/graph/{movieId}
```

- Refactored `TMDBService`.
- Renamed `getMovieDetails()` to `getMovie()` to better represent its purpose.
- Integrated TMDB Recommendations API.
- Built the first graph response containing:
  - Selected movie as the center node.
  - Recommended movies as surrounding nodes.
  - Edges connecting the selected movie to recommendations.

---

### Frontend

- Added TypeScript interfaces for graph models.
- Created:

```
types/
    Graph.ts
    Movie.ts
```

- Moved interfaces out of `App.tsx`.
- Added graph state.

```tsx
const [graph, setGraph] = useState<MovieGraph | null>(null);
```

- Implemented `fetchGraph()`.

- Clicking a movie now performs two independent backend requests:

```
Movie Click

├── GET /api/movie/{id}

└── GET /api/graph/{id}
```

- Created the first `GraphView` component.
- Added the first graph visualization prototype using SVG.
- Rendered movie nodes inside the graph.
- Connected backend graph data with frontend visualization.

---

## Concepts Learned

### Spring Boot

- DTO architecture
- Graph modeling
- GraphService
- Controller → Service separation
- Returning complex nested DTOs
- Consuming multiple TMDB endpoints
- Building graph responses from API data

### React

- TypeScript interface organization
- Component separation
- Graph state management
- Multiple asynchronous API requests
- Props between components
- SVG fundamentals
- Rendering graph data

### Graph Theory

Introduced the basic graph data model.

```
Movie

↓

Node
```

```
Relationship

↓

Edge
```

```
Graph

↓

Nodes + Edges
```

Every graph visualization is ultimately built from these three concepts.

---

## Challenges

- Encountered a static method error while calling `TMDBService`.
  - Learned the difference between static methods and Spring-managed beans.

- Recommendation endpoint required creating a new DTO because its response structure differs from the movie search endpoint.

- Fixed CORS configuration for the new `GraphController`.

- Refactored the frontend so graph rendering was separated from the search interface.

- Learned that graph visualization and graph generation are independent problems.

---

## Current State

CineMap can now:

- Search movies.
- Display movie details.
- Request graph data from the backend.
- Build a graph consisting of:
  - One selected movie.
  - Twenty TMDB recommendations.
  - Edges connecting them.
- Render the first SVG-based graph prototype.

Although the graph currently uses TMDB recommendations directly, the architecture has been designed so this data source can later be replaced by CineMap's own recommendation engine without changing the frontend.

---

## Key Design Decisions

During development, the long-term direction of CineMap became much clearer.

Instead of generating a new graph every time a movie is searched, the project will evolve toward a persistent movie universe.

The future architecture will include:

```
Offline Metadata Collection

↓

Similarity Engine

↓

Weighted Graph

↓

Community Detection

↓

Force Layout Generation

↓

Precomputed Graph

↓

Interactive Movie Explorer
```

Movie search will simply move the camera to an existing node inside this graph rather than generating recommendations on demand.

This architecture is inspired by MALMap while being redesigned specifically for movies and TV series.

---

## Next Objectives

- Improve the SVG graph prototype.
- Add interactive node selection.
- Connect graph node clicks with the movie sidebar.
- Introduce D3 Force Simulation to replace the temporary circular layout.
- Continue preparing the frontend architecture for the future offline-generated CineMap universe.
