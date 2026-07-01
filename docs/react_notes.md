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
