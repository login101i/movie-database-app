import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import './favourites.css'

const Favourites = ({history}) => {
    const [show, setShow] = useState()
    const [favourites, setFavourites] = useState([])
    console.log(favourites)

    useEffect(() => {

        window.addEventListener("scroll", () => {
            if (window.scrollY > 20) {
                setShow(true)
            } else setShow(false);
        });
        // return () => {
        //     window.removeEventListener("scroll")
        // }
    }, [favourites]);


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
            <div className={`nav ${show && "nav_black"}`}>

                <Link to='/'>
                    <img
                        className="nav_logoLeft"
                        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                        alt=" Movie DataBase Logo"
                    />
                </Link>

            </div >
            <div className="myFavourites">
                {favourites.length === 0 ?
                    <div className="row">You have no favourites movies yet. </div>
                    :
                    (
                        <>
                            <div className="row d-flex justify-content-center ">
                                <h2 className="mt-4"> My Favourites Movies </h2>
                            </div>
                            <div className="row_posters d-flex mt-5 pt-3" >
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

                        </>
                    )
                }
            </div>
        </Fragment >
    )
}

export default Favourites
