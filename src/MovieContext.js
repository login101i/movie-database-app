import React, { useState, createContext, useEffect } from "react";

export const MovieContext = createContext();



export const MovieState = ({ children }) => {

    const API_KEY = "1329705d96ffd5e3a197e84f0b8875e6"


    return (
        <MovieContext.Provider
            value={{
               
            }}
        >
            {children}
        </MovieContext.Provider>
    )
}

export default MovieContext
