function MovieCard({movie}){

    function handleFavoriteClick() {
        // Implement favorite logic here
        alert("clicked");
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.title} />
            <div className="movie-overlay">
                <button className="favorite-button" onClick={handleFavoriteClick}>
                    &#9733;
                </button>
            </div>
        </div>
        <div className="movie-details">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>
}

export default MovieCard;