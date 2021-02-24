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
    }

    // scrolling on lick
    function loadElements() {
        const sliders = document.querySelectorAll('.items');
        var sliderArray = Array.prototype.slice.call(sliders)
        let isDown = false;
        let startX;
        let scrollLeft;
        sliderArray.map(slider => {
            if (sliderArray) {
                slider.addEventListener('mousedown', (e) => {
                    isDown = true;
                    slider.classList.add('active');
                    startX = e.pageX - slider.offsetLeft;
                    scrollLeft = slider.scrollLeft;
                    console.log("cklikkkkk")
                });
                slider.addEventListener('mouseleave', () => {
                    isDown = false;
                    slider.classList.remove('active');
                });
                slider.addEventListener('mouseup', () => {
                    isDown = false;
                    slider.classList.remove('active');
                });
                slider.addEventListener('mousemove', (e) => {
                    if (!isDown) return;
                    e.preventDefault();
                    const x = e.pageX - slider.offsetLeft;
                    const walk = (x - startX) * 1; // or scroll-fast *3 fex
                    slider.scrollLeft = scrollLeft - walk;
                    console.log(walk)
                });
            }
        })

        //   when Dom will be mounted we will use listeners


    }
    // window.onload = function () {
    loadElements()





    return (
        <Fragment>
            {movies.length === 0 ? <Loader /> :
                <Fragment >
                    <div
                        className="row ">
                        <h3 className="ml-4 h2 "> {title}</h3>
                        <div
                            className="row_posters items mb-4">
                            {movies && movies.map(movie => (
                                <img
                                    key={movie.id}
                                    src={`${base_url}${movie.backdrop_path}`}
                                    id={movie.id}
                                    alt="Movie "
                                    className={`row_poster ${large && "row_posterLarge"}`}
                                    onDoubleClick={() => goToDetails(movie.id)} />
                            ))}


                        </div>
                        <div className="arrows">
                            <i className="fa fa-arrow-left"></i>
                            <i className="fa fa-arrow-right"></i>
                        </div>



                    </div>
                </Fragment >
            }
        </Fragment>
    )
}

export default Row
