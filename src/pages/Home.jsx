import MovieCard from "../components/MovieCard"
import { useState } from "react"
function Home(){
    const [searchQuery, setSearchQuery] = useState("");
    const movies = [
        {id: 1, title: "jhon wick", release_date: "2020"},
        {id: 2, title: "terminator", release_date: "1999"},
        {id: 3, title: "matrix", release_date: "1998"},
        
    ]

    const handleSearch = () =>{
        alert(searchQuery);
    };

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
            type="text" 
            placeholder="Seacth for movies ..." 
            className="search-input"
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
           />
            <button type="submit" className="search-button">Search</button>
        </form>
        <div className="movie-grid">
            {movies.map(movie => 
            
            <MovieCard movie={movie} key= {movie.id}/>
            )}
        </div>

    </div>
}

export default Home