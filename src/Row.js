import React, { useState, Fragment, useEffect } from 'react'
import axios from './axios'
import './row.css'
import Loader from './Loader'



const Row = ({ title, fetchUrl, history, large }) => {
    const [movies, setMovies] = useState([])
    // console.log(movies)

    const base_url = "https://image.tmdb.org/t/p/original"

    useEffect(() => {
        const fetchData = async () => {
            try {
                const request = await axios.get(fetchUrl)
                const movies = request.data.results
                setMovies(movies)
                // console.table(movies)
                // return movies
            }
            catch (error) {
            }
        }
        fetchData()
    }, [fetchUrl])


    const goToDetails = (id) => {
        history.push(`/moviedetail/${id}`);
        console.log("ID klikniętego filmu", id)
    }


    return (
        <Fragment>
            {movies.length === 0 ? <Loader /> :
                <Fragment >
                    <div className="row">
                        <h3 className="ml-4 h2"> {title}</h3>
                        <div className="row_posters" >
                            {movies && movies.map(movie => (
                                
                                 
                                    <img
                                        key={movie.id}
                                        src={`${base_url}${movie.backdrop_path}`}
                                        id={movie.id}
                                        alt="Movie "
                                        className={`row_poster ${large && "row_posterLarge"}`}
                                        onClick={() => goToDetails(movie.id)} />
                            



                            )
                            )}
                        </div>
                    </div>
                </Fragment >
            }
        </Fragment>
    )
}

export default Row
