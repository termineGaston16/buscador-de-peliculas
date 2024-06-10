import { useEffect, useState } from "react"
import { useMovies } from "./useMovies";

export function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const {getMovies} = useMovies();

  useEffect(() => {
    if (search === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }

    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
    getMovies(search)
  }, [search])

  return { search, updateSearch, error }
}