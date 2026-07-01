# 🎬 CineMap

CineMap is a graph-based movie and TV series recommendation platform that visualizes relationships between titles using interactive graphs and custom similarity algorithms.

Instead of traditional recommendation lists, CineMap enables users to explore connected movies through an interactive graph interface, making content discovery more intuitive and engaging.

> **Inspired by the graph visualization concept of MALMap and redesigned for movies and TV series.**

---

# 🚀 Project Overview

Traditional recommendation systems display movies as simple lists. CineMap aims to improve content discovery by representing movies as nodes and their relationships as edges in an interactive graph.

The project combines graph visualization with recommendation algorithms to help users discover related movies based on multiple similarity factors rather than a single recommendation score.

---

# ✨ Features

## ✅ Current Features

- React + Spring Boot full-stack architecture
- Frontend ↔ Backend communication
- Health Check REST API
- Project documentation

## 🚧 Planned Core Features

- Movie Search
- Movie Details
- Interactive Graph Visualization
- Similarity-based Recommendations
- Zoom & Pan Graph
- Movie Relationship Explorer

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

Movie relationships will be generated using a weighted similarity score based on multiple attributes such as:

- Genres
- Cast
- Directors
- Writers
- Production Studios
- Keywords
- Ratings
- Release Year
- Popularity
- User Interaction (Future)

These relationships will be visualized as an interactive graph where:

- 🎬 Nodes represent movies or TV series.
- 🔗 Edges represent similarity scores.
- 📍 Distance between nodes indicates how closely related they are.

---

# 🛠️ Tech Stack

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS *(Planned)*
- Cytoscape.js *(Planned)*

## Backend

- Spring Boot
- Java
- Maven

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

- ✅ GitHub repository initialized
- ✅ React + Vite frontend setup
- ✅ Spring Boot backend setup
- ✅ Maven configuration
- ✅ REST API created
- ✅ Frontend connected with backend
- ✅ Health Check endpoint implemented

### Currently Working On

- TMDB API Integration
- Movie Search
- Search Results UI

---

# 📅 Development Roadmap

## ✅ Phase 1 — Foundation

- [x] Create GitHub repository
- [x] Setup React (Vite + TypeScript)
- [x] Setup Spring Boot Backend
- [x] Configure Maven
- [x] Frontend ↔ Backend Communication
- [x] Health Check API
- [ ] TMDB API Integration
- [ ] Movie Search
- [ ] Movie Details
- [ ] Search Suggestions

---

## 🚀 Phase 2 — Graph Visualization

- [ ] Interactive Movie Graph
- [ ] Zoom & Pan
- [ ] Movie Connections
- [ ] Similarity Algorithm
- [ ] Graph Filters
- [ ] Improved UI

---

## ⭐ Phase 3 — Recommendation Engine

- [ ] Advanced Recommendation Engine
- [ ] Neo4j Integration
- [ ] User Authentication
- [ ] Watchlists
- [ ] Favorites
- [ ] Personalized Recommendations

---

# 🎯 Project Goals

- Learn Full Stack Development using React and Spring Boot.
- Build an interactive recommendation system.
- Learn REST APIs and API integration.
- Explore graph visualization techniques.
- Implement recommendation algorithms.
- Gain experience with graph databases like Neo4j.

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

The project is inspired by **MALMap**, which visualizes anime relationships.

CineMap extends the concept to movies and TV series while introducing a custom recommendation engine, modern frontend architecture, and future graph database integration.

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Avishkar Shelke**

Bachelor of Engineering (Computer Engineering)

Passionate about Software Development, AI, Graph Algorithms, and Recommendation Systems.
