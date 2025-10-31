import { useQuery } from "@tanstack/react-query"
import { Apiservice } from "../service/api/Apiservice"
import { useMoviesStore  } from "../stores/movieStore"
import { useEffect } from "react";
import type { MovieApi } from "../types/Movie";

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