import React from 'react'
import Row from './Row'
import requests from './requests'

const MainPage = () => {
    return (
        <div>
            This is Main Page
            <Row title="Trending movies" fetchUrl={requests.fetchTrending}
            large
            />
            <Row title="Top Rated movies" fetchUrl={requests.fetchTopRated} />

        </div>
    )
}

export default MainPage
