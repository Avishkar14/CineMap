import {useState, useEffect} from "react";
import MovieCard from "./components/MovieCard";
import "./App.css";

function App() {
    const[movies , setMovies] = useState([]);
    const [query, setQuery] = useState("Batman");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    function searchMovies() {
        setLoading(true);
        setError("");

        fetch(`http://localhost:8080/api/search?query=${encodeURIComponent(query)}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Request Failed");
                }
                return response.json();
            })
            .then(data => {
                setMovies(data.results);
                setLoading(false);
            })
            .catch(() => {
                setError("Could not fetch movies.");
                setMovies([]);        // VERY IMPORTANT
                setLoading(false);
            });
    }

    useEffect(() => {
        searchMovies();
    }, []);

  return (
    <div className="app">

        <h1 className="app-title">CineMap</h1>

        <div className="search-bar">

            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        searchMovies();
                    }
                }}
            />

            <button
                onClick={searchMovies}
                disabled={loading}
            >
                {loading ? "Searching..." : "Search"}
            </button>

        </div>

        {loading && <p>Fetching movies...</p>}

        {error && <p>{error}</p>}

        {!loading && !error && movies.length === 0 && (
            <p>No movies found for "{query}"</p>
        )}

        <div className="movie-grid">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>

    </div>
  );
}

export default App;