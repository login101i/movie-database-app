
import { useContext } from "react";
import { MovieContext } from "./MovieContext";
import { Link } from 'react-router-dom'
import './filteredMovies.css'
import StarsRating from 'stars-rating'
import Loader from './Loader'



const Movies = () => {

    const {
        movies,
        loading,
        setVoteAverage,
        date,
        setDate,
        setGenre

    } = useContext(MovieContext);


    return (
        <div className="movies d-flex flex-column justify-content-center align-items-center">
            {movies.results && movies.results.length === 0 && (
                <h1 className="ml-4">Results not found. Try again.</h1>

            )}
            <div className="row d-flex">

            </div>
            <div className="row d-flex justify-content-center  ">
                {movies.results && movies.results.length > 0 && <div className="row-12 flex-sm-column d-md-flex flex-md-row align-items-center mb-5 "
                    style={{ maxWidth: "900px" }}>
                    <div className="m-4">
                        <div className="my-2">Movies filtred by ratings:</div>
                        <select
                            className="filter_input p-1 "
                            onChange={e => setVoteAverage(e.target.value)}
                            style={{ minWidth: "150px"}}
                        >
                            <option value={9}>4.5</option>
                            <option value={8}>4</option>
                            <option value={7}>3.5</option>
                            <option value={6}>3</option>

                        </select>
                    </div>
                    <div className="m-4">
                        <div className="my-2">Filter by genre:</div>
                        <select
                            className="filter_input p-1"
                            onChange={e => setGenre(e.target.value)}
                            style={{ minWidth: "150px" }}
                        >
                            <option value={12}>Adventure</option>
                            <option value={14}>Fantasy</option>
                            <option value={28}>Action</option>
                            <option value={35}>Comedy</option>
                            <option value={80}>Crime</option>
                            <option value={53}>Thriller</option>
                            <option value={10749}>Romance</option>
                        </select>
                    </div>

                    <div className=" filter_input m-4">
                        <label for="example-date-input"
                            className=" col-form-label">Movies created after:</label>
                        
                            <input className="form-control" type="date" value={date} id="example-date-input"
                                onChange={e => setDate(e.target.value)}

                            />
                   
                    </div>
                </div>
                }


                <div className=" row d-flex justify-content-center" >


                    {!loading ? (
                        movies.results &&
                        movies.results.map((movie, index) => (
                            <div className=" col-sm-5 col-md-3 m-3 poster mb-5">
                                <div> <h4 className="h5">{movie.original_title}</h4>
                                <h4 className="h5"> Release Date: {movie.release_date}</h4>
                                </div>
                               

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
                                        className="filtered_poster"
                                    />
                                    <div className="movie_over">
                                        {movie.overview && <p className="p-3">{movie.overview}</p>}
                                    </div>


                                </Link>
                            </div>
                        ))
                    ) : (
                            <Loader />
                        )}
                </div>
            </div>
        </div >
    );
};



export default Movies;
