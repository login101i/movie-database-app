import React, { Fragment, useContext } from 'react'
import Row from './Row'
import requests from './requests'
import Banner from './Banner'
import Navbar from './Navbar'
import { MovieContext } from "./MovieContext";
import FilteredMovies from './FilteredMovies'


const MainPage = ({ history }) => {
    const { showRandom } = useContext(MovieContext);

    return (
        <Fragment>
            <Navbar />
            <Banner />
            <div>
                {showRandom === "RandomMovies" && (
                    <>
                        <Row title="Trending movies"
                            fetchUrl={requests.fetchTrending}
                            large history={history} />
                        <Row title="Top Rated movies"
                            fetchUrl={requests.fetchTopRated} history={history} />
                    </>
                )}
                {
                    showRandom === "FilteredMovies" && (
                        <FilteredMovies />
                    )
                }
            </div>
        </Fragment>

    )
}

export default MainPage
