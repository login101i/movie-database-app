import React, { useState, useEffect } from 'react'
import axios from './axios';
import requests from './requests';
import "./banner.css"

function Banner() {
    const [movie, setMovie] = useState([]);
    // console.log("To jest film z bannera -------", movie)

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



    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
                backgroundPosition: "center top"
            }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movie?.name}
                </h1>

                <div className="row">
                    {/* <button className="banner_button">Trailer</button> */}
                    <button className="banner_button">See description</button>
                </div>
                <h4 className="banner_description">{truncate(movie?.overview, 200)}</h4>
            </div>

            <div className="banner--fade" />
        </header>
    )
}

export default Banner
