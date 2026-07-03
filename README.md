# 🎬 CineMap

CineMap is a graph-based movie and TV series recommendation platform that visualizes relationships between titles using interactive graphs and custom similarity algorithms.

> 🚧 CineMap is currently in active development. The current implementation focuses on building the data pipeline and graph architecture that will power the final persistent movie universe.

Instead of traditional recommendation lists, CineMap enables users to explore connected movies through an interactive graph interface, making content discovery more intuitive and engaging.

> **Inspired by the graph visualization concept of MALMap and redesigned for movies and TV series.**

---

# 🚀 Project Overview

CineMap is an interactive movie exploration platform that visualizes a persistent universe of interconnected movies.

Unlike traditional recommendation systems that generate a list after every search, CineMap maintains a precomputed graph of movie relationships. Searching simply navigates the user to a movie already present within the graph.

Users can freely explore nearby movies, discover communities of related films, and traverse the graph through natural visual interactions.

The project combines React, Spring Boot, TMDB metadata, graph algorithms, clustering, and force-directed layouts to create a scalable movie discovery experience inspired by MAL Map.

---

# ✨ Features

## ✅ Current Features

- React + Spring Boot full-stack architecture
- Frontend ↔ Backend REST communication
- Health Check API
- TMDB API integration
- Movie Search
- Responsive Movie Card UI
- Loading & Error Handling
- Project Documentation

## 🚧 Planned Core Features

- Persistent Movie Universe
- Interactive Graph Navigation
- Movie Details Sidebar
- Smooth Zoom & Pan
- Cluster Exploration
- Search Navigation
- Neighbor Highlighting
- Force-directed Layout
- Offline Graph Generation

## 🔮 Future Features

- User Authentication
- Watchlists
- Favorites
- Personalized Recommendations
- Graph Filters
- Multiple Recommendation Algorithms
- Graph Database (Neo4j)
- Recommendation History

---

# 🧠 Recommendation Strategy

TMDB serves primarily as a metadata provider during development.

CineMap computes its own weighted similarity score between movies.

Potential similarity factors include:

- Genres
- Keywords
- Directors
- Cast
- Runtime
- Rating
- Popularity
- Release Year
- Production Companies
- Original Language

Similarity scores determine:

- Graph edges
- Edge weights
- Community formation
- Recommendation ranking
- Node distances

The recommendation graph is generated offline and stored locally. Search simply navigates users to an existing movie inside this graph.
---

# 🛠️ Tech Stack

## Frontend

- React
- TypeScript
- Vite
- CSS
- D3 Force Simulation (Planned)
- SVG Rendering (Initially)
- Pixi.js / WebGL (Future optimization)
- shadcn/ui (Planned)
- GSAP (Planned)

## Backend

- Spring Boot
- Java
- Maven
- RestTemplate

## External APIs

- TMDB API

## Future Database

- PostgreSQL
- Redis (Caching)
- Graph Storage Research

---

# 📂 Project Structure

```text
CineMap
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── ...
│
├── backend/
│   ├── src/
│   ├── pom.xml
│   └── ...
│
├── docs/
│   ├── spring-boot.md
│   ├── react.md
│   ├── project-journal.md
│   └── architecture.md
│
├── assets/
│
└── README.md
```

---

# 🚧 Current Progress

- ✅ Repository initialized
- ✅ React + Vite setup
- ✅ Spring Boot setup
- ✅ Maven configuration
- ✅ Health Check API
- ✅ Frontend ↔ Backend communication
- ✅ TMDB API integration
- ✅ Movie Search
- ✅ Responsive Movie Cards
- ✅ Loading & Error Handling
- ✅ Movie Details API
- ✅ Movie Details Sidebar (Prototype)
- ✅ Graph DTO Architecture

### Currently Working On

- Offline Graph Pipeline
- Graph Visualization Prototype
- Recommendation Engine Foundation

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

# 🎯 Project Goals

- Build a persistent movie universe rather than a search-based recommendation tool.
- Learn full-stack development with React and Spring Boot.
- Design a scalable recommendation engine.
- Explore graph theory and clustering algorithms.
- Learn force-directed graph layouts.
- Gain experience with large-scale graph visualization.
- Build an architecture capable of visualizing thousands of interconnected movies.

---

# 🌌 Long-Term Vision

The final CineMap experience is intended to resemble navigating an interactive map rather than searching a movie database.

The graph already exists before the user opens the application.

Searching a movie simply centers the camera on that movie.

Users can then:

- Zoom between large movie communities.
- Explore clusters of related films.
- Click any movie to continue navigating.
- View detailed information in a sidebar.
- Discover new movies naturally through graph exploration.

The long-term graph is expected to contain several thousand highly connected movies rather than generating recommendations on demand.

---

# 📚 Documentation

Project learning notes are maintained inside the `docs` directory.

- Spring Boot Notes
- React Notes
- Project Journal
- Architecture Notes

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/Avishkar14/CineMap.git
```

## Backend

```bash
cd backend
mvn spring-boot:run
```

Runs on:

```
http://localhost:8080
```

---

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on:

```
http://localhost:5173
```

---

# 📸 Screenshots

Coming Soon...

---

# 💡 Inspiration

# 💡 Inspiration

CineMap is inspired by MAL Map, which visualizes relationships between anime through an explorable graph.

Rather than copying MAL Map directly, CineMap adapts the concept for movies and TV series while introducing its own recommendation engine, graph-generation pipeline, clustering strategy, and modern full-stack architecture.

The long-term vision is to create a persistent movie universe where users explore connections naturally instead of browsing recommendation lists.

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Avishkar Shelke**

Bachelor of Engineering (Computer Engineering)

Passionate about Software Development, AI, Graph Algorithms, and Recommendation Systems.
