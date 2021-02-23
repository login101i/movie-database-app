
import { useContext } from "react";
import { MovieContext } from "./MovieContext";
import { Link } from 'react-router-dom'
import './filteredMovies.css'
import StarsRating from 'stars-rating'



const Movies = () => {
    const { movies, loading, search } = useContext(MovieContext);
    console.log("To są moowies", movies.results)

    return (
        <div className="movies d-flex justify-content-center">
            {movies.results && movies.results.length === 0 && (
                <h1 className="ml-4">Results not found. Try again.</h1>
                
            )}
            <div className="row  d-flex flex-column justify-content-center  ">
              
                <div className=" row d-flex justify-content-center" >
                    {!loading ? (
                        movies.results &&
                        movies.results.map((movie, index) => (
                            <div className=" col-sm-12 col-md-3 m-3 poster mb-5">
                                <h4>{movie.original_title}</h4>
                             
                                <div><StarsRating
                                    count={5}
                                    value={movie.vote_average / 2}
                                    edit={false}
                                    size={28}
                                    color={'#ffd700'} 
                                    className="mb-2"
                                />
                                </div>
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
