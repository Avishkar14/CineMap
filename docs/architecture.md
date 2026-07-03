# CineMap Architecture

## Overview

CineMap is an interactive movie exploration platform that visualizes relationships between movies as a graph.

Movie search is only the entry point. The core feature is the recommendation graph, allowing users to discover similar movies visually.

---

## Current Architecture

```
                React Frontend
                      │
                      ▼
             Spring Boot REST API
                      │
                      ▼
                 TMDB API
                      │
                      ▼
          Movie Search & Details
                      │
                      ▼
             React Movie Sidebar
```

Current features:

- Search movies
- Display movie cards
- Fetch movie details
- Backend REST API
- TMDB integration

---

# CineMap Architecture

## High-Level Architecture

```
                    React Frontend
                          │
                          ▼
                  Spring Boot REST API
                          │
                          ▼
                  Local Graph Dataset
                          │
          ┌───────────────┼────────────────┐
          ▼               ▼                ▼
      Movie Metadata   Graph Data     Layout Data
       (movies.json)   (edges.json)   (positions.json)
                          ▲
                          │
                Offline Graph Pipeline
                          │
      ┌───────────────────┼────────────────────┐
      ▼                   ▼                    ▼
 TMDB Metadata     Similarity Engine     Community Detection
 Collection            (Weighted)          & Clustering
      │                   │                    │
      └───────────────────┴────────────────────┘
                          │
                          ▼
                 Force Layout Generation
                          │
                          ▼
                  Export Static Graph Files
```

---

# Project Philosophy

CineMap is **not** intended to become another movie database like TMDB or IMDb.

Instead, it aims to create a persistent, explorable movie universe where relationships between movies are computed by CineMap itself.

Movie search serves only as a navigation tool to locate an existing movie inside the graph.

The graph should already exist before the user performs a search.

---

# Graph Pipeline

## 1. Metadata Collection

Collect movie metadata from TMDB.

Examples:

* Genres
* Keywords
* Cast
* Directors
* Runtime
* Ratings
* Release Year
* Popularity
* Production Companies
* Languages
* Posters

Initially this may include only popular movies before expanding to a much larger collection.

---

## 2. Similarity Engine

Compute CineMap's own weighted similarity score.

Possible features:

* Genres
* Keywords
* Directors
* Cast
* Runtime
* Rating
* Release Year
* Popularity
* Language
* Production Companies

Example:

```
Batman
   │
   ├── Joker (93%)
   ├── Se7en (89%)
   ├── Prisoners (87%)
   └── Zodiac (84%)
```

These similarity scores determine:

* Graph edges
* Edge weights
* Node distance
* Community formation

TMDB recommendations are only used during early development and will eventually be replaced.

---

## 3. Graph Generation

Generate a weighted movie graph.

Movies become nodes.

Similarity becomes weighted edges.

The graph is generated offline instead of during every search.

---

## 4. Community Detection

Automatically identify related movie communities.

Possible algorithms include:

* Louvain
* Leiden
* Infomap

Examples:

* Action
* Crime
* Sci-Fi
* Animation
* Horror

These communities improve navigation and layout.

---

## 5. Layout Generation

Generate node positions offline using a force-directed layout.

Current planned direction:

* D3 Force Simulation

The resulting coordinates are stored so the frontend only renders the graph rather than recalculating layouts.

---

# Frontend Responsibilities

The frontend focuses on visualization and interaction.

Features include:

* Smooth zoom and pan
* Search navigation
* Movie sidebar
* Cluster exploration
* Neighbor highlighting
* Camera fly-to animation
* Poster nodes at high zoom levels

Search should move the camera to an existing node instead of generating a new graph.

---

# Long-Term Vision

The goal is to build a persistent movie universe inspired by projects such as MAL Map.

Users should be able to:

* Explore thousands of interconnected movies.
* Discover related movies naturally through graph navigation.
* Zoom from large communities into individual movie nodes.
* Click any movie to continue exploration.
* View detailed information in a sidebar without leaving the graph.
* Experience the graph as an interactive map rather than a search-results page.

---

# Future Improvements

## Backend

* PostgreSQL
* Redis caching
* Background metadata updates
* Offline graph generation
* Incremental graph rebuilding

## Graph Engine

* Advanced weighted similarity
* Community detection
* Offline force-layout computation
* Cluster labeling
* Graph versioning

## Frontend

* React
* D3 Force Simulation
* SVG initially (Pixi/WebGL if needed later)
* shadcn/ui
* GSAP transitions
* Dynamic level-of-detail rendering

## User Features

* Authentication
* Favorites
* Watchlists
* Ratings
* Graph sharing
* Personalized recommendations
