import { useMovies } from "../hooks/useMovies"
import "../css/allResults.css"

export default function AllResults() {
    const { listOfMovies, loading } = useMovies();
    console.log(listOfMovies);

    return (
        <main>
            {
                loading ? <p>Cargando...</p> : (listOfMovies && listOfMovies.length > 0) ?
                    <ul>
                        {listOfMovies.map(movie => (
                            <li key={movie.id}>
                                <span>{movie.id}</span>
                                <span>{movie.title}</span>
                                <img src={movie.image} alt={movie.title} />
                            </li>
                        ))}
                    </ul>
                    : "No hay resultados"
            }
        </main >
    );
}
