import { useContext, useState, useCallback} from "react";
import {searchMovies} from "../service/movie"
import { MoviesContext } from "../context/movie"

export function useMovies() {

    const { listOfMovies, setListOfMovies, loading, setLoading} = useContext(MoviesContext)
 
    const [error, setError] = useState(null)

    const getMovies = useCallback(async (query) => {

        try {
            setLoading(true)
            setError(null)
            const newMovies = await searchMovies(query)
            setListOfMovies(newMovies)
        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }, [])


    return { listOfMovies, getMovies, loading };
}
