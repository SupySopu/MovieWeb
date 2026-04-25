import { useApiMoviesStore } from "../../stores/api/apiMoviesStore"
import MovieCard from "../MovieCard/MovieCard";
import "./MovieCardContainer.scss"

interface movieContainerProps {
    apiMovies: any[];
    localMovies: any[];
}

export default function MovieCardContainer({ apiMovies, localMovies } : movieContainerProps) {
    const { type } = useApiMoviesStore();

    const moviesToShow = type == "api" ? apiMovies : localMovies;
    
    return (
        <div className="containerMovies">
            {moviesToShow.length > 0 ? (
                moviesToShow.map((movie) => (
                    <MovieCard 
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        vote_average={movie.vote_average}
                        poster_path={movie.backdrop_path || movie.poster_path}
                    />
                ))
            ) : (
                <h3>0 Movies found</h3>
            )}
        </div>
    )
}
