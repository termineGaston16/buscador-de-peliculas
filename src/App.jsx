import AllResults from "./components/AllResults";
import Search from "./components/Search";
import {MoviesProvider} from "./context/movie"

export default function App() {
    return (<>
        <h3>Buscador de Peliculas</h3>

        <MoviesProvider>
            <Search />
            <AllResults />
        </MoviesProvider>
    </>)
}