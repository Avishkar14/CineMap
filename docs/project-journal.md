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

Current Features

- Movie Search
- Movie Posters
- Error Handling
- Loading State
- Responsive Movie Grid

Next Goal

➡ Issue #3 - Movie Details Page
