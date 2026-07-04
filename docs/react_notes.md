# React Learning Notes

---

# What is React?

React is a JavaScript library used for building interactive user interfaces.

It follows a component-based architecture.

---

# Component

A component is a reusable piece of UI.

Example

```
App

├── Navbar
├── SearchBar
├── MovieCard
└── Footer
```

Each component is usually a JavaScript or TypeScript function.

Example

```tsx
function App() {

    return (
        <h1>Hello</h1>
    );

}
```

---

# Functional Component

A Functional Component is a JavaScript function that returns JSX.

Example

```tsx
function App(){

    return(
        <h1>CineMap</h1>
    );

}
```

Modern React primarily uses Functional Components.

---

# JSX

JSX stands for JavaScript XML.

It allows HTML-like syntax inside JavaScript.

Example

```tsx
<h1>Hello</h1>
```

JSX is converted into JavaScript by React.

---

# React Hooks

Hooks allow Functional Components to use React features like state and lifecycle.

Examples

- useState
- useEffect
- useContext
- useMemo
- useRef

---

# useState

```tsx
const [message, setMessage] = useState("Connecting...");
```

## Purpose

Stores state inside a Functional Component.

When state changes using the setter function, React automatically re-renders the component.

Returns

- Current state value
- Setter function

Example

```tsx
const [count, setCount] = useState(0);
```

Updating

```tsx
setCount(1);
```

causes React to re-render.

---

# State

State is data managed by React that can change over time.

When state changes, React automatically updates the UI.

Examples

- Search text
- Logged-in user
- Shopping cart
- Notifications
- Movie list

---

# Why not normal variables?

Example

```tsx
let count = 0;

count++;
```

The variable changes.

React does not know about it.

UI remains unchanged.

State variables inform React whenever they change.

---

# useEffect

```tsx
useEffect(() => {

}, []);
```

Purpose

Runs side effects after rendering.

Common uses

- API calls
- Timers
- Event listeners
- Logging

---

## Dependency Array

```
[]
```

means

Run only once after the first render.

---

# Fetch API

```tsx
fetch("http://localhost:8080/api/health")
```

Purpose

Makes HTTP requests.

Returns a Promise.

---

# Promise

A Promise represents the future result of an asynchronous operation.

States

- Pending
- Fulfilled
- Rejected

---

# .then()

```tsx
.then((data)=>{

})
```

Runs when the Promise completes successfully.

---

# response.json()

Converts the HTTP response body into a JavaScript object.

Example

Response

```json
{
    "status":"Backend is running"
}
```

becomes

```javascript
{
    status:"Backend is running"
}
```

---

# .catch()

Runs when an error occurs.

Used for

- Network errors
- Server unavailable
- Invalid requests

---

# Data Flow

```
React

↓

useEffect()

↓

fetch()

↓

Spring Boot

↓

JSON Response

↓

response.json()

↓

JavaScript Object

↓

setMessage()

↓

React re-renders

↓

Updated UI
```

---

# Interview Questions

## What is React?

React is a JavaScript library used for building component-based user interfaces.

---

## What is a Functional Component?

A JavaScript function that returns JSX.

---

## What is State?

State is data managed by React that can change over time.

Updating state causes React to re-render the component.

---

## What is useState?

A React Hook used to manage state in Functional Components.

It returns the current state and a setter function.

---

## What is useEffect?

A React Hook used to perform side effects after rendering.

Examples include API calls, timers, and event listeners.

---

## What is fetch()?

A built-in JavaScript API used to make HTTP requests.

It returns a Promise.

---

## What is response.json()?

Converts the response body into a JavaScript object.

---

## What is .then()?

Handles the successful completion of a Promise.

---

## What is .catch()?

Handles errors during asynchronous operations.
## Arrays in React State

When searching movies, the backend returns multiple movie objects.

Instead of storing a single object, we store an array.

Example

```javascript
const [movies, setMovies] = useState([]);
```

Initially

```
movies = []
```

After searching

```
movies = [
    {...},
    {...},
    {...}
]
```

---

## Rendering Lists using map()

Since `movies` is an array, we cannot display it directly.

Instead, React uses `map()` to convert every movie object into a React component.

```jsx
movies.map((movie) => (
    <MovieCard key={movie.id} movie={movie} />
))
```

Flow

```
movies[]

↓

map()

↓

<MovieCard/>

↓

<MovieCard/>

↓

<MovieCard/>

↓

Displayed on Screen
```

---

## Why key is Required

Every component created using `map()` must have a unique key.

Example

```jsx
<MovieCard
    key={movie.id}
    movie={movie}
/>
```

React uses the key to identify which component changed, was added or removed.

Without keys, React cannot efficiently update the UI.

---

## Props

Instead of displaying every movie inside `App`, we created a separate component.

Parent

```
App
```

passes data

```
movie
```

to

```
MovieCard
```

Example

```jsx
<MovieCard movie={movie} />
```

MovieCard receives

```javascript
function MovieCard({ movie })
```

This makes components reusable and keeps App clean.

---

## Search using State

Search text is stored in state.

```javascript
const [query, setQuery] = useState("Batman");
```

Input field

↓

updates query

↓

Search button

↓

searchMovies()

↓

Backend receives latest query

Using state ensures the latest input value is always available.

---

## Conditional Rendering

React can display UI only when certain conditions are true.

Examples

Loading

```jsx
{loading && <p>Loading...</p>}
```

Error

```jsx
{error && <p>{error}</p>}
```

No Movies

```jsx
{!loading && !error && movies.length === 0 && (
    <p>No movies found.</p>
)}
```

This technique is called **Conditional Rendering**.

---

## Component Separation

Instead of writing everything inside App,

Movie UI was moved into

```
MovieCard.jsx
```

Responsibilities

App

- Search
- Fetch data
- Manage state

MovieCard

- Display one movie
- Poster
- Title

Keeping components small makes projects easier to maintain.

---

## CSS Modules by Component

Instead of putting every style into one CSS file,

each component can have its own stylesheet.

Example

```
App.jsx
App.css

MovieCard.jsx
MovieCard.css
```

This keeps styling organized as the project grows.

---

## Issue #2 Complete

React concepts learned during this feature

- Arrays in State
- map()
- key prop
- Props
- Conditional Rendering
- Component Separation
- CSS Separation
- Search using State
- Rendering Dynamic Lists

## Moving Interfaces into Separate Files

Initially, all interfaces were written inside `App.tsx`.

Example:

```tsx
interface Movie {
    id: number;
    title: string;
    poster_path: string;
}
```

As the project grew, keeping every interface inside one file became difficult to manage.

Instead, interfaces were moved into dedicated files.

Example:

```
src/types/
    Movie.ts
    Graph.ts
```

Now App imports only the types it needs.

```tsx
import type { Movie, MovieDetails } from "./types/Movie";
import type { MovieGraph } from "./types/Graph";
```

Benefits:

- Cleaner files
- Better project organization
- Reusable interfaces
- Easier maintenance

---

## Graph Data in React

A new state was introduced for the graph.

```tsx
const [graph, setGraph] = useState<MovieGraph | null>(null);
```

Initially no graph exists.

```
graph = null
```

After selecting a movie,

```
Backend

↓

Graph JSON

↓

setGraph()

↓

React re-renders
```

The UI now automatically updates whenever the graph changes.

---

## Fetching Multiple Resources

Clicking a movie now triggers two backend requests.

```tsx
onClick={() => {
    fetchMovieDetails(movie.id);
    fetchGraph(movie.id);
}}
```

The requests are independent.

```
Movie Click

├── Movie Details API

└── Graph API
```

This allows both the sidebar and graph to update simultaneously.

---

## GraphView Component

Instead of rendering graph-related UI inside `App.tsx`, a dedicated component was created.

```
GraphView.tsx
```

Responsibilities:

- Receive graph data
- Display graph visualization
- Handle future graph interactions

App remains responsible only for fetching data and managing state.

---

## Props Between Components

Graph data is passed from App to GraphView.

```tsx
<GraphView graph={graph} />
```

GraphView receives it through props.

```tsx
type GraphViewProps = {
    graph: MovieGraph | null;
};
```

This keeps components independent and reusable.

---

## Conditional Rendering for Graph

Initially there is no graph.

```tsx
if (!graph) {
    return (
        <div>
            Select a movie...
        </div>
    );
}
```

After a movie is selected,

React automatically renders the graph.

This is another example of Conditional Rendering.

---

## SVG Introduction

The graph visualization begins using SVG.

SVG (Scalable Vector Graphics) allows React to draw graphics directly in the browser.

Unlike images, SVG elements remain sharp at every zoom level.

Examples of SVG elements include:

- `<svg>`
- `<circle>`
- `<line>`
- `<text>`

SVG is well suited for graph visualizations because every node and edge can be represented as an individual element.

---

## First Graph Layout

The initial graph uses a simple circular layout.

```
             Movie 1

      Movie 2      Movie 3


Movie 6     Center Movie     Movie 4


      Movie 7      Movie 5
```

The selected movie is placed at the center.

Recommended movies are positioned around it.

This layout is temporary and helps verify that the graph pipeline works correctly before introducing force simulations.

---

## Separation of Responsibilities

Current frontend architecture

```
App.tsx

↓

Fetch Backend Data

↓

Manage State

↓

Pass Props

↓

MovieCard
GraphView
```

Each component now has a single responsibility.

| Component | Responsibility |
|-----------|----------------|
| App | State Management & API Calls |
| MovieCard | Display one movie |
| GraphView | Display graph |
| GraphNode | Display one graph node (future) |

This follows React's principle of building applications from small reusable components.

---

## Issue #3 Progress

React concepts learned during this feature

- TypeScript Interfaces
- Interface Organization
- Graph State
- Multiple API Requests
- Component Communication
- GraphView Component
- Props
- SVG Basics
- Graph Rendering Foundation
- Separation of Concerns
