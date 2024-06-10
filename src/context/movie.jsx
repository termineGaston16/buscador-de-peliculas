import { createContext, useState } from "react";

export const MoviesContext = createContext();

export function MoviesProvider({children}){

    const [listOfMovies, setListOfMovies] = useState([]);
    const [loading, setLoading] = useState(false)

    return(<>
        <MoviesContext.Provider value={{listOfMovies, setListOfMovies, loading, setLoading}}>
            {children}
        </MoviesContext.Provider>
    </>)
}