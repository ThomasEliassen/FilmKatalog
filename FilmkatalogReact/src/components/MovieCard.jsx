import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({movie}){

    const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext();
    const Favorite = isFavorite(movie.id);

    function handleFavoriteClick() {
        if (Favorite) {
            removeFromFavorites(movie.id);
        } else {
            addToFavorites(movie);
        }
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-overlay">
                <button className={`favorite-button ${Favorite ? "active" : ""}`} onClick={handleFavoriteClick}>
                    &#9733;
                </button>
            </div>
        </div>
        <div className="movie-details">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
    </div>
}

export default MovieCard;