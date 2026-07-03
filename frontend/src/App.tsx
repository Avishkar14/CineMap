import {useState, useEffect} from "react";
import MovieCard from "./components/MovieCard";
import "./App.css";

function App() {

    interface Movie{
        id:number;
        title:string;
        poster_path:string;
    }

    interface Genre{
        id:number;
        name:string;
    }

    interface MovieDetails{
        id:number;
        title:string;
        poster_path:string;
        overview:string;
        runtime:number;
        vote_average:number;
        genres:Genre[];
    }
    const [movies,setMovies] = useState<Movie[]>([]);
    const [query, setQuery] = useState("Batman");
    const [loadingSearch, setLoadingSearch] = useState(false);
    const [loadingDetails, setLoadingDetails] = useState(false);
    const [error, setError] = useState("");
    const [selectedMovie,setSelectedMovie] = useState<MovieDetails | null>(null);

    function searchMovies() {
        setLoadingSearch(true);
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
                setLoadingSearch(false);
            })
            .catch(() => {
                setError("Could not fetch movies.");
                setMovies([]);        // VERY IMPORTANT
                setLoadingSearch(false);
            });
    }

    function fetchMovieDetails(movieId:number){
        setLoadingDetails(true);
        setError("");
        fetch(`http://localhost:8080/api/movie/${encodeURIComponent(movieId)}`)
        .then(response => {
                if (!response.ok) {
                    throw new Error("Request Failed");
                }
                return response.json();
            })
            .then(data => {
                setSelectedMovie(data);
                setLoadingDetails(false);
            })
            .catch(() => {
                setError("Could not fetch movie details.");
                setSelectedMovie(null);
                setLoadingDetails(false);
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
                disabled={loadingSearch}
            >
                {loadingSearch ? "Searching..." : "Search"}
            </button>

        </div>

        {loadingSearch && <p>Searching movies...</p>}
        {loadingDetails && <p>Loading movie details...</p>}

        {error && <p>{error}</p>}

        {!loadingSearch && !error && movies.length === 0 && (
            <p>No movies found for "{query}"</p>
        )}

        <div className="main-layout">
            <div className="movie-grid">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        onClick={() => fetchMovieDetails(movie.id)}
                    />
                ))}
            </div>

            {selectedMovie && (
                <div className="movie-details">

                    <img
                        src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
                        className="details-poster"
                    />

                    <h2>{selectedMovie.title}</h2>

                    <p><strong>Rating:</strong> {selectedMovie.vote_average}</p>
                    <p><strong>Runtime:</strong> {selectedMovie.runtime} min</p>

                    <p>
                        <strong>Genres:</strong>{" "}
                        {selectedMovie.genres.map((g) => g.name).join(", ")}
                    </p>

                    <p>{selectedMovie.overview}</p>

                </div>
            )}

        </div>
    </div>
  );
}

export default App;