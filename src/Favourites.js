import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import './favourites.css'

const Favourites = () => {
    const [show, setShow] = useState()
    const [favourites, setFavourites] = useState([])
    console.log(favourites)

    useEffect(() => {

        window.addEventListener("scroll", () => {
            if (window.scrollY > 20) {
                setShow(true)
            } else setShow(false);
            console.log("przesuwam........")
        });
        // return () => {
        //     window.removeEventListener("scroll")
        // }
    }, []);


    console.log(favourites)
    useEffect(() => {
        if (localStorage.getItem("FAVOURITES"))
            setFavourites(JSON.parse(localStorage.getItem("FAVOURITES")))
    }, [favourites.length])

    const base_url = "https://image.tmdb.org/t/p/original"


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


                <Link to='/favourites'>
                    <div
                        className="nav_logoRight"
                    >My Favourites Movies</div>
                </Link>

            </div >
            <div className="myFavourites">
                {favourites.length === 0 ?
                    (<div className="row">You have no favourites movies yet. </div>)
                    :
                    (
                        <div className="row">
                            <h3> My Favourites </h3>

                            <div className="row_posters" >
                                {favourites.map(movie => (
                                    <>
                                        <img
                                            src={`${base_url}${movie.poster_path}`}
                                            id={movie.id}
                                            alt="Movie "
                                            className="row_poster"
                                        />
                                    </>
                                )
                                )}
                            </div>
                        </div>
                    )
                }
            </div>
        </Fragment >
    )
}

export default Favourites
