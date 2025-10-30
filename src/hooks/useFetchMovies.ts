import { useQuery } from "@tanstack/react-query"
import { Apiservice } from "../service/api/Apiservice"
import { useMoviesStore, useMovieStore } from "../stores/movieStore"
import { useEffect } from "react";
import type { MovieApi, MovieDetails } from "../types/Movie";

// mapper que obtenga lo que necesito para movieDetails

export interface MoviesResponse {
    page: number,
    results: MovieApi[],
    total_pages: number,
    total_results: number
}

export const useFetchMovies = () => {

    const {set} = useMoviesStore();

    const query = useQuery<MoviesResponse>({
        queryKey: ["movies"],
        queryFn: () => Apiservice.getMovies()
    })

    useEffect(() => { 
        if (query.data){
            set({movies: query.data.results})
        }
    }, [query.data])

    return query;
}

export const useFetchMovie = (movieId: number) => {
  const { set } = useMovieStore();

  const query = useQuery<MovieDetails>({
    queryKey: ["movie", movieId],
    queryFn: () => Apiservice.getMovie(movieId),
    });

    useEffect(() => {
        if (query.data) {
            set(query.data);
        }
    }, [query.data])
    return query;
};
