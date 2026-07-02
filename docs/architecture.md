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

## Planned Graph Architecture

```
                React Frontend
                      │
                      ▼
             Spring Boot REST API
                      │
          ┌───────────┴───────────┐
          ▼                       ▼
      TMDB API          Similarity Engine
          │                       │
          └───────────┬───────────┘
                      ▼
          Graph Data Generator
                      │
                      ▼
            Cytoscape.js Graph
                      │
        ┌─────────────┴─────────────┐
        ▼                           ▼
  Movie Sidebar            Graph Navigation
```

---

## Recommendation Engine

The graph will **not rely solely on TMDB recommendations**.

Instead, CineMap will compute its own similarity score between movies.

Possible features include:

- Genres
- Keywords
- Directors
- Cast
- Runtime
- Rating
- Release Year
- Popularity
- Language
- Production Companies

Each feature will contribute to a weighted similarity score.

Example:

Batman
│
├── Joker (93%)
├── Se7en (89%)
├── Prisoners (87%)
├── Zodiac (84%)

These similarity scores determine:

- Graph edges
- Node distance
- Cluster formation
- Recommendations

---

## Long-Term Goal

Users should be able to:

- Search a movie
- Open its graph
- Explore nearby recommendations visually
- Click any node to continue exploring
- View movie information in a sidebar without leaving the graph

The experience should resemble exploring a knowledge graph rather than browsing a traditional movie database.

---

## Future Improvements

### Backend

- PostgreSQL
- Redis Cache
- Background similarity computation
- Recommendation API

### Frontend

- Cytoscape.js visualization
- Smooth graph animations
- Movie sidebar
- Advanced filters
- Search history

### Recommendation Engine

- Custom weighted similarity algorithm
- Graph clustering
- Community detection
- Personalized recommendations

### User Features

- Authentication
- Favorites
- Watchlists
- Ratings
- Graph sharing
