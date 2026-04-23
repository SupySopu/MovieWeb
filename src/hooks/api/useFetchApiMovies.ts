import { useQuery } from "@tanstack/react-query";
import type { ApiMovie } from "../../types/apiMovie";
import { Apiservice } from "../../service/api/Apiservice";
import { useEffect } from "react";
import { useApiMoviesStore } from "../../stores/api/apiMoviesStore";

export interface MoviesResponse {
    page: number,
    results: ApiMovie[],
    total_pages: number,
    total_results: number
}

export const useFetchApiMovies = (page: number) => {
    const {set, params} = useApiMoviesStore();

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