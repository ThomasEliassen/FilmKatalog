import MovieCard from "../components/MovieCard";
import {useState, useEffect} from "react";
import "../css/Home.css"
import {searchMovies, getPopularMovies} from "../services/api";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPopularMovies = async () => {
            try {
                const popularMovies =  await getPopularMovies();
                setMovies(popularMovies);
            } catch (error) {
                console.log(error);
                setError("Failed to fetch popular movies.");
            } finally{
                setLoading(false);
            }
        }

        fetchPopularMovies();
    }, []);


    const handleSearch =(e) => {
        // Implement search logic here
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("");
    }

  return (
    <div className ="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
            type="text" 
            placeholder="Search movies..." 
            className="search-input" 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} />

            <button 
            type="submit" 
            className="search-button">Search
            </button>
        </form>

        <div className="movies-list">
            {movies.map((movie) => 
                (<MovieCard movie={movie} key={movie.id} />))}
        </div>
    </div>
  )
}

export default Home