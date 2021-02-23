const API_KEY = "1329705d96ffd5e3a197e84f0b8875e6"

// setting enpoints for fetching movies

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,


    findMovie: `/search/movie?api_key=${API_KEY}&language=en-US&query`
}

export default requests;
