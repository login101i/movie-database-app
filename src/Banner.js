import React, { useState, useEffect, useContext } from 'react'
import axios from './axios';
import requests from './requests';
import "./banner.css"
import { MovieContext } from './MovieContext'


function Banner({history}) {
    const [movie, setMovie] = useState([]);
    // const { movies } = useContext(MovieContext)
 
    const defaulPoster = "https://image.tmdb.org/t/p/original/7KL4yJ4JsbtS1BNRilUApLvMnc5.jpg"
    const defaultOverview = "On a hiking trip to rekindle their marriage, a couple find themselves fleeing for their lives in the unforgiving wilderness from an unknown shooter"
    const defaultName="Red dot"


    useEffect(() => {

        async function fetchData() {

            const request = await axios.get(requests.fetchTrending);
            const movies = request.data.results
            const movie = movies[Math.floor(Math.random() * request.data.results.length - 1)]
            // console.log(movie)
            setMovie(movie);

            // Math.floor(Math.random() * request.data.results.length -1)
            return request;
        }
        fetchData();
    }, []);

    // console.log(movie)

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    // found in internet

    const goToDetails = (id) => {
        history.push(`/moviedetail/${id}`);
    }


    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: !movie ? ` url(${defaulPoster})` : 
                    ` url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
                ,
                backgroundPosition: "center top",
                transition:"0.5s"
            }}
        >
            <div className="banner_contents">
                <h1 className="banner_title ml-3">
                    {movie ? movie.title : defaultName}
                </h1>
                <div className="row">
                    <button
                        className="banner_button "
                        onClick={() => goToDetails(movie.id)}
                    >See description</button>
                </div>

                <h4 className="banner_description ml-3">
                    {truncate(movie ? movie.overview : defaultOverview, 200)}</h4>
            </div>

            <div className="banner--fade" />
        </header>
    )
}

export default Banner
