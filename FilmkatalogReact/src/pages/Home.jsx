import MovieCard from "../components/MovieCard";


function Home() {
    const movies = [
        {id: 1, title: "Inception", release_date: "2010"},
        {id: 2, title: "The Matrix", release_date: "1999"},
        {id: 3, title: "Interstellar", release_date: "2014"},
    ];


    const handleSearch =() => {
        // Implement search logic here
    }

  return (
    <div className ="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search movies..." />
            <button type="submit" className="search-button">Search</button>
        </form>

        <div className="movies-list">
            {movies.map((movie) => (<MovieCard movie={movie} key={movie.id} />))}
        </div>
    </div>
  )
}

export default Home