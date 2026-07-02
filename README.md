# 🎬 CineMap

CineMap is a graph-based movie and TV series recommendation platform that visualizes relationships between titles using interactive graphs and custom similarity algorithms.

Instead of traditional recommendation lists, CineMap enables users to explore connected movies through an interactive graph interface, making content discovery more intuitive and engaging.

> **Inspired by the graph visualization concept of MALMap and redesigned for movies and TV series.**

---

# 🚀 Project Overview

CineMap is an interactive movie exploration platform where users discover movies through a dynamic graph instead of endless recommendation lists.

A movie search acts as the entry point. After selecting a movie, CineMap builds an interactive similarity graph, allowing users to visually navigate to related movies based on a custom recommendation algorithm.

The project combines React, Spring Boot, TMDB, and graph visualization to create a modern movie discovery experience inspired by MALMap.

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

- Movie Details Sidebar
- Interactive Recommendation Graph
- Graph Navigation
- Similarity-based Recommendations
- Zoom & Pan
- Movie Relationship Explorer
- Graph Clustering

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

# 🧠 Recommendation Strategy (Planned)

Movie similarity will not rely solely on TMDB recommendations.

Instead, CineMap will calculate a weighted similarity score using multiple movie attributes.

Possible factors include:

- Genres
- Keywords
- Directors
- Cast
- Runtime
- Rating
- Popularity
- Release Year
- Production Companies

These scores will determine:

- Graph edges
- Node distance
- Cluster formation
- Recommendation ranking

This architecture allows TMDB to be used primarily as a data source while CineMap generates its own recommendation graph.
---

# 🛠️ Tech Stack

## Frontend

- React
- TypeScript
- Vite
- CSS
- Cytoscape.js (Planned)

## Backend

- Spring Boot
- Java
- Maven
- RestTemplate

## External APIs

- TMDB API

## Future Database

- PostgreSQL
- Neo4j

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

### Currently Working On

- Movie Details API
- Recommendation Engine foundation
- Graph Data Model

---

# 📅 Development Roadmap

## ✅ Phase 1 — Foundation

- [x] GitHub repository
- [x] React setup
- [x] Spring Boot setup
- [x] Maven configuration
- [x] Frontend ↔ Backend communication
- [x] Health Check API
- [x] TMDB Integration
- [x] Movie Search
- [x] Responsive Movie Cards
- [ ] Movie Details Sidebar

---

## 🚀 Phase 2 — Graph Visualization

- [ ] Recommendation Service
- [ ] Similarity Score Calculation
- [ ] Graph JSON Generator
- [ ] Cytoscape Integration
- [ ] Interactive Movie Graph
- [ ] Zoom & Pan
- [ ] Graph Clustering
- [ ] Sidebar Integration

---

## ⭐ Phase 3 — Recommendation Engine

- [ ] Custom Recommendation Algorithm
- [ ] Recommendation Weights
- [ ] Recommendation Explanation
- [ ] Graph Filters
- [ ] Neo4j Research
- [ ] Authentication
- [ ] Favorites
- [ ] Watchlists

---

# 🎯 Project Goals

- Build a graph-based movie recommendation platform.
- Learn full-stack development with React and Spring Boot.
- Design custom recommendation algorithms.
- Explore graph visualization techniques.
- Learn scalable backend architecture.
- Gain experience with graph databases and recommendation systems.

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

The project is inspired by MALMap, which visualizes relationships between anime using an interactive graph.

CineMap adapts this idea for movies and TV series while introducing a custom similarity engine, modern React frontend, Spring Boot backend, and an extensible architecture capable of supporting advanced recommendation algorithms in the future.
---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Avishkar Shelke**

Bachelor of Engineering (Computer Engineering)

Passionate about Software Development, AI, Graph Algorithms, and Recommendation Systems.
