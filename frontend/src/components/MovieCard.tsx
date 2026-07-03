import "./MovieCard.css";

type MovieCardProps = {
    movie: {
        id: number;
        title: string;
        poster_path: string;
    };
    onClick: () => void;
};

function MovieCard({ movie, onClick }: MovieCardProps) {
    return (
        <div
            className="movie-card"
            onClick={() => {
                onClick();
            }}
        >
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