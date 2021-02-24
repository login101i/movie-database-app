import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import './favourites.css'

const Favourites = ({ history }) => {
    const [favourites, setFavourites] = useState([])
    console.log(favourites)


    console.log(favourites)
    useEffect(() => {
        if (localStorage.getItem("FAVOURITES"))
            setFavourites(JSON.parse(localStorage.getItem("FAVOURITES")))
        console.log("---------------------", favourites)
    }, [favourites.length])

    const base_url = "https://image.tmdb.org/t/p/original"

    const goToDetails = (id) => {
        history.push(`/moviedetail/${id}`);
        console.log("ID klikniętego filmu", id)
    }

    return (
        <Fragment>

            <div className="myFavourites d-flex flex-column align-items-center ">
                {favourites.length === 0 ?
                    <>
                        <div className="row mt-5 h3">You have no favourites movies yet. </div>
                        <div className=" mt-2 d-flex justify-content-center">
                            <Link to="/">
                                <button className="btn btn-info btn-md"
                                >Return to HOME PAGE</button>
                            </Link>
                        </div>
                    </>
                    :
                    (
                        <>
                            <div className="row d-flex justify-content-center ">
                                <h2 className="mt-4"> My Favourites Movies </h2>
                            </div>
                            <div className="row_posters d-flex  mt-5 pt-3" >
                                {favourites.map(movie => (
                                    <>
                                        <img
                                            src={`${base_url}${movie.movieInfo.poster_path}`}
                                            id={movie.movieInfo.id}
                                            alt="Movie "
                                            className="row_poster"
                                            onClick={() => goToDetails(movie.movieInfo.id)}
                                        />
                                    </>
                                )
                                )}
                            </div>

                            <div className="arrows">

                                <i className="fa fa-arrow-right mt-2  ">   Scroll horizontally</i>
                            </div>

                            <div className=" mt-2 d-flex justify-content-center ">
                                <Link to="/">
                                    <button className="btn btn-info btn-md mt-3"
                                    >Return to HOME PAGE</button>
                                </Link>
                            </div>

                        </>
                    )
                }
            </div>
        </Fragment >
    )
}

export default Favourites
