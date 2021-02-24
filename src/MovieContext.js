import React, { useState, createContext, useEffect } from "react";


export const MovieContext = createContext();



export const MovieState = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [showRandom, setShowRandom] = useState("RandomMovies");
    const [search, setSearch] = useState("");
    const [loading, setIsLoading] = useState(false)
    const [filteredBanner, setFilteredBanner] = useState('')
    const [genre, setGenre]=useState('')
    const [voteAverage, setVoteAverage] = useState(0)
    const [date, setDate] = useState('2010-01-01')

    const API_KEY = "1329705d96ffd5e3a197e84f0b8875e6"


    const handleSearch = async (e) => {
        e.preventDefault();
        if (search.trim() === "") {
            return;
        }
        const searchResponse = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}`
            // I wanted moved this http to requests but I couldn't do it
        );
        const searchData = await searchResponse.json();
        setMovies(searchData);
        setShowRandom("FilteredMovies")
        setSearch("")

        const filteredBanner = searchData.results
        setFilteredBanner(filteredBanner)

    
    };

    useEffect(() => {

        const getFilteredMovies = async () => {
            const popularMoviesResponse = await fetch(
                `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&release_date.gte=${date}&vote_average.gte=${voteAverage}&with_genres=${genre}`
            );
            const filteredMoviesData = await popularMoviesResponse.json();
            setMovies(filteredMoviesData);
        };

        getFilteredMovies();
    }, [voteAverage, date, genre]);


    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            setIsLoading(false);
        }, 3500);
        return () => clearTimeout(loadingTimeout);
    }, [movies, search]);
    return (
        <MovieContext.Provider
            value={{
                showRandom,
                setShowRandom,
                handleSearch,
                search,
                setSearch,
                movies,
                setMovies,
                loading,
                setIsLoading,
              
                setVoteAverage,
                voteAverage,
                setDate,
                date,
                filteredBanner,
                setGenre,
                genre
            }}
        >
            {children}
        </MovieContext.Provider>
    )
}

export default MovieContext
