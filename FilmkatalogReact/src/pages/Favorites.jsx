import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites(){
    const { favorites } = useMovieContext();

    if (favorites){
        return (
        <div className = "favorites"> <h2>Dine favoritter</h2>
        <div className="movies-grid">
            {favorites.map((movie) => 
                (<MovieCard movie={movie} key={movie.id} />))}
        </div>
        </div>
    )}

    return <div className="favorites-page">
        <h2>No favorites added yet.</h2>
        <p>Start adding some to see them here.</p>
    </div>
}


export default Favorites;