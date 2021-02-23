
import { useContext, useState } from "react";
import { MovieContext } from "./MovieContext";
import { Link } from 'react-router-dom'
import './filteredMovies.css'
import StarsRating from 'stars-rating'



const Movies = () => {

    const {
        movies,
        filteredMovies,
        loading,
        search,
        setVoteAverage,
        date,
        setDate,
        setGenre
    } = useContext(MovieContext);

    const [filtred, setFiltr] = useState(movies)



    const filterGenre = (genre) => {
        //     console.log(genre)
        //     setFiltr(filteredMovies.filter(movie => movie.genre_ids.includes(genre)))
        //     console.log(filtr.results)
    }

    return (
        <div className="movies d-flex justify-content-center">
            {filtred.results && filtred.results.length === 0 && (
                <h1 className="ml-4">Results not found. Try again.</h1>

            )}
            <div className="row d-flex">

            </div>
            <div className="row d-flex justify-content-center ">
                <div className="d-flex justify-content-between mb-5 "
                    style={{ width: "900px" }}
                >
                    <div>
                        <div>Filtruj bazę filmów poprzez ocenę:</div>
                        <select
                            className="filter_input"
                            onChange={e => setVoteAverage(e.target.value)}
                        >
                            <option value={9}>4.5</option>
                            <option value={8}>4</option>
                            <option value={7}>3.5</option>
                            <option value={6}>3</option>

                        </select>
                    </div>
                    <div>
                        <div>Filtruj bazę filmów poprzez gatunek:</div>
                        <select
                            className="filter_input"
                            onChange={e => filterGenre(e.target.value)}
                        >
                            <option value={12}>Adventure</option>
                            <option value={14}>Fantasy</option>
                            <option value={28}>Action</option>
                            <option value={6}>3</option>

                        </select>
                    </div>

                    <div className=" filter_input">
                        <label for="example-date-input"
                            className="col-12 col-form-label">Filmy powstałe od daty:</label>
                        <div className="col-12">
                            <input className="form-control" type="date" value={date} id="example-date-input"
                                onChange={e => setDate(e.target.value)}

                            />
                        </div>
                    </div>
                </div>


                <div className=" row d-flex justify-content-center" >


                    {!loading ? (
                        filtred.results &&
                        filtred.results.map((movie, index) => (
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
