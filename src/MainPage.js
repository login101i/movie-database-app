import React, { Fragment, useContext, useEffect } from 'react'
import Row from './Row'
import requests from './requests'
import Banner from './Banner'
import Navbar from './Navbar'
import { MovieContext } from "./MovieContext";
import FilteredMovies from './FilteredMovies'


const MainPage = ({ history }) => {
    const { showRandom, setShowRandom } = useContext(MovieContext);

    useEffect(() => {
        setShowRandom("RandomMovies")
        console.log(showRandom)
    }, [])

    return (
        <Fragment>
            <Navbar history={history} />
            <Banner />
            <div>
                {showRandom === "RandomMovies" && (
                    <>
                        <Row title="Trending movies"
                            fetchUrl={requests.fetchTrending}
                            large
                            history={history} />
                        <Row title="Top Rated movies"
                            fetchUrl={requests.fetchTopRated}
                            history={history} />
                        <Row title="Action Movies"
                            fetchUrl={requests.fetchActionMovies}
                            history={history} />
                        <Row title="Comedy Movies"
                            fetchUrl={requests.fetchComedyMovies}
                            history={history} />
                        <Row
                            title="Horror Movies"
                            fetchUrl={requests.fetchHorrorMovies}
                            history={history} />
                        <Row
                            title="Romance Movies"
                            fetchUrl={requests.fetchRomanceMovies}
                            history={history} />

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
