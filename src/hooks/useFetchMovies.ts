import { useQuery } from "@tanstack/react-query"
import { Apiservice } from "../service/api/Apiservice"
import { useEffect } from "react";
import type { MovieApi } from "../types/Movie";
import { useMoviesStore } from "../stores/moviesStore";

export interface MoviesResponse {
    page: number,
    results: MovieApi[],
    total_pages: number,
    total_results: number
}

export const useFetchMovies = (page: number) => {

    const {set, params} = useMoviesStore();

    const query = useQuery<MoviesResponse>({
        queryKey: ["movies", page, params.q, params.sort_by, params.with_genres],
        queryFn: () => Apiservice.getMovies(page, params)
    })

    useEffect(() => { 
        if (query.data){
            set({movies: query.data.results})
        }
    }, [query.data])
    
    return query;
}