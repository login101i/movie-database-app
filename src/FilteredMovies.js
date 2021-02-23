
import { useContext } from "react";
import { MovieContext } from "./MovieContext";
import { Link } from 'react-router-dom'
import './filteredMovies.css'


const Movies = () => {
    const { movies, loading, search } = useContext(MovieContext);
    console.log("To są moowies", movies.results)

    return (
        <div className="movies">
            {movies.results && movies.results.length === 0 && (
                <h1 className="error">Result not found</h1>
            )}
            <div className="row  d-flex flex-column justify-content-center  ">
                {movies.results && <div className="p-5 h3">Results for keyword {search} : </div>}
                <div className=" row d-flex justify-content-center" >
                    {!loading ? (
                        movies.results &&
                        movies.results.map((movie, index) => (
                            <div className=" col-sm-12 col-md-3 m-3 poster">
                                <Link to={`/moviedetail/${movie.id}`} >

                                    <img

                                        key={index}
                                        src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
                                        alt="poster"
                                    />
                                    <div className="movie_over">
                                        {movie.overview && <p className="p-3">{movie.overview}</p>}
                                    </div>


                                </Link>
                            </div>
                        ))
                    ) : (
                            <div>Loader</div>
                        )}
                </div>
            </div>
        </div >
    );
};



export default Movies;
