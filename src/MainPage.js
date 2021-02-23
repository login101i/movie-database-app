import React, { Fragment } from 'react'
import Row from './Row'
import requests from './requests'
import Banner from './Banner'
import Navbar from './Navbar'

const MainPage = ({ history }) => {
    return (
        <Fragment>
            <Navbar />
            <Banner />
            <div>

                <Row title="Trending movies" 
                fetchUrl={requests.fetchTrending}
                large history={history}
                />
                <Row title="Top Rated movies" 
                    fetchUrl={requests.fetchTopRated} history={history}/>

            </div>
        </Fragment>

    )
}

export default MainPage
