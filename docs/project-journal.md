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
