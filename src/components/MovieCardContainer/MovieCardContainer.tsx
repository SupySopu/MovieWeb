import React from 'react'
import Moviecard from '../MovieCard/Moviecard'
import { useMoviesStore } from '../../stores/moviesStore';

interface Props {
  apiMovies: any[];
  localMovies: any[];
}

export default function MovieCardContainer({ apiMovies, localMovies }: Props) {
    const { type } = useMoviesStore();

    const moviesToShow = type === "api" ? apiMovies : localMovies;

    return (
        <div className="container-movies">
            {moviesToShow.length > 0 ? (
                moviesToShow.map((movie) => (
                    <Moviecard
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        vote_average={movie.vote_average}
                        poster_path={movie.backdrop_path || movie.poster_path}
                    />
                ))
            ) : (
                <h3>0 movies found</h3>
            )}
        </div>
    );
}