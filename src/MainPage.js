import React, { Fragment } from 'react'
import Row from './Row'
import requests from './requests'
import Banner from './Banner'

const MainPage = () => {
    return (
        <Fragment>
            <Banner />
            <div>
            <Row title="Trending movies" fetchUrl={requests.fetchTrending}
                    large
                />
                <Row title="Top Rated movies" fetchUrl={requests.fetchTopRated} />

            </div>
        </Fragment>

    )
}

export default MainPage
