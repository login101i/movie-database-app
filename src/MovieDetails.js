import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import './movieDetails.css'
import axios from './axios'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import StarsRating from 'stars-rating'
import _ from "lodash";
import Loader from './Loader'



const MovieDetails = ({ match, history }) => {
    const [movieInfo, setMovieInfo] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("");
    const [idFavourite, setIdFavourite] = useState(false)
    const [favourites, setFavourites] = useState([])
    const [movieInBase, setMovieInBase] = useState(false)


    // console.log("movie Info ---------", movieInfo)
    // console.log(movieInfo.title)

    const base_url = "https://api.themoviedb.org/3/movie/"
    const id = match.params.id
    const alreadyFavourite = favourites?.find(movie => movie.id === id)
    if (alreadyFavourite) setMovieInBase(alreadyFavourite)

    const API_KEY = "1329705d96ffd5e3a197e84f0b8875e6"



    useEffect(() => {
        async function request() {
            const movie = await axios.get(`${base_url}${id}?api_key=${API_KEY}`);
            console.log(movie)
            const { title, original_title, vote_average, runtime, tagline, genres, overview, relase_date, poster_path, backdrop_path, production_countries
            } = movie.data
            const movieInfo = {
                title,
                original_title,
                vote_average,
                runtime,
                tagline,
                genres,
                overview,
                relase_date,
                poster_path,
                backdrop_path,
                id,
                production_countries
            }
            // console.log(title, original_title, populatiry, runtime, tagline, genres, overview, relase_date)
            setMovieInfo(movieInfo)

        }
        request()
    }, [id])

    useEffect(() => {
        let favourites = []


        if (localStorage.getItem("FAVOURITES")) {
            favourites = JSON.parse(localStorage.getItem("FAVOURITES"));
            let unique = _.uniqWith(favourites, _.isEqual)
            setFavourites(unique)




        }

    }, [idFavourite, id])

    const opts = {
        height: "500",
        width: "100%",
        playerVars: {
            autoplay: 0,
        }
    }

    const handleClick = (movie) => {
        //stuff from net
        if (trailerUrl) {
            setTrailerUrl('')
        } else {
            movieTrailer(movieInfo?.title || "")
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                }).catch((error) => console.log(error));
        }
    }

    const addToFavourites = (id) => {
        let favourites = []


        if (localStorage.getItem("FAVOURITES")) {
            favourites = JSON.parse(localStorage.getItem("FAVOURITES"));
        }
        const alreadyFavourite = favourites.find(movie => movie.id === id)
        if (alreadyFavourite) return
        favourites.push({
            movieInfo
        })
        console.log(alreadyFavourite)
        // remove duplicates
        let unique = _.uniqWith(favourites, _.isEqual)
        localStorage.setItem("FAVOURITES", JSON.stringify(unique));
        setIdFavourite(id)

    }

    const removeFromFavourites = (id) => {
        let favourites = []


        if (localStorage.getItem("FAVOURITES")) {
            favourites = JSON.parse(localStorage.getItem("FAVOURITES"));
        }
        const newFafourites = favourites.filter(movie => movie.id === id)
        console.log(newFafourites)
        // remove duplicates
        localStorage.setItem("FAVOURITES", JSON.stringify(newFafourites));
        setIdFavourite(false)

    }

    return (
        <Fragment>
            <div>
                <Link to='/'>
                    <img
                        className={`nav_logoLeft ${trailerUrl && " hide"}`}
                        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                        alt=" Movie DataBase Logo"
                    />
                </Link>

            </div>
            <div className="container-flex" >
                <div className="imageOrTrailer">
                    {trailerUrl ? (
                        <YouTube videoId={trailerUrl} opts={opts} />
                    ) : (<div className="row"
                        style={{
                            backgroundSize: "cover",
                            backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${movieInfo?.backdrop_path}")`,
                            height: '300px',
                            backgroundPosition: "center center"
                        }}>
                        {movieInfo.poster_path &&
                            <i
                                className={`far fa-play-circle fa-4x play ${trailerUrl && "hide"} `}
                                onClick={handleClick}
                            ></i>
                        }
                    </div>)}
                    <div className="row"

                    ></div>

                </div>
                <div className="row d-flex justify-content-center my-5">
                    <div className="col-4 d-flex ">
                        {movieInfo.poster_path ? <img
                            className="img-fluid float-right"
                            src={`https://image.tmdb.org/t/p/original/${movieInfo?.poster_path}`}
                            style={{ height: '500px' }}
                            alt="" /> :
                            <Loader />
                        }
                    </div>
                    <div className="col-4">
                        <div className="main-info mb-3">


                            <div className="d-flex float-right">

                                {idFavourite && idFavourite === id ? <button className="btn btn-danger  btn-lg"
                                    onClick={() => removeFromFavourites(id)}
                                >Remove from favourites</button> :
                                    <button className="btn btn-info  btn-lg"
                                        onClick={() => addToFavourites(id)}
                                    >Add to my favourites</button>
                                }
                            </div>

                            <div>Populatity </div>
                            <div><StarsRating
                                count={5}
                                value={movieInfo.vote_average / 2}
                                edit={false}
                                size={28}
                                color={'#ffd700'} />
                            </div>
                            <h3 className=""> {movieInfo.title}</h3>
                            <div className=""> {movieInfo.overview}</div>
                            <div>Czas trwania: {movieInfo.runtime} min</div>
                        </div>
                        <div
                            className="d-flex justify-content-between my-3 "
                            style={{ maxWidth: "300px" }}>
                            <div>Gatunek</div>
                            <div className="d-flex">
                                {movieInfo.genres?.map((genre) => (
                                    <div
                                        key={Math.random()}
                                        style={{ marginRight: '10px' }}>{genre.name}</div>
                                ))}
                            </div>

                        </div>
                        <div
                            className="d-flex justify-content-between my-3"
                            style={{ maxWidth: "300px" }}

                        >
                            <div>Production</div>
                            {movieInfo.production_countries && <div>{movieInfo.production_countries[0].name}</div>}
                        </div>
                        <div className="d-flex justify-content-between my-3"
                            style={{ maxWidth: "300px" }}>

                            {movieInfo.release_date && (
                                <>
                                    <div>Premiera</div>
                                    <div>{movieInfo.release_date}</div>
                                </>
                            )}

                        </div>

                        <div className="float-right mt-5">

                            <Link to="/">
                                <button className="btn btn-info btn-lg"

                                >Return to HOME PAGE</button>
                            </Link>
                        </div>
                    </div>

                </div>



            </div>
        </Fragment>
    )
}

export default MovieDetails
