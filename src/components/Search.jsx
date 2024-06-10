import { useId } from "react"
import { useSearch } from "../hooks/useSearch";

export default function Search() {

    const { idFromSearch } = useId();
    const {updateSearch, error } = useSearch();


    const handleSubmit = (event) => {
        event.preventDefault();
        const query = new window.FormData(event.target).get("inputSearchMovie")
        updateSearch(query)
    }

    return (<>
        <form onSubmit={handleSubmit}>
            <label htmlFor={idFromSearch}>Buscar una pelicula:</label>
            <input type="search" name="inputSearchMovie" id={idFromSearch} placeholder="All Movies..." />
        </form>
        {error && <h4>{error}</h4>}
    </>)
}