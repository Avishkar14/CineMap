import "./MovieCard.css";

function MovieCard({ movie }) {
    return (
        <div className="movie-card">

            <img
                className="movie-poster"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
            />

            <h3 className="movie-title">
                {movie.title}
            </h3>

        </div>
    );
}

export default MovieCard;