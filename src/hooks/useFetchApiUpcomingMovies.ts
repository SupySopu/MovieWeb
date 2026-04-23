import { useQuery } from "@tanstack/react-query"
import type { ApiMovie } from "../types/apiMovie"
import { Apiservice } from "../service/api/Apiservice"
import { useEffect } from "react"
import { useApiUpcomingMoviesStore } from "../stores/apiUpcomingMoviesStore"

export interface UpcomingMoviesResponse{
    dates: {
        maximum: string,
        minimum: string
    }
    page: number,
    results: ApiMovie[],
    total_pages: number,
    total_results: number
}

export const useFetchApiUpcomingMovies = () => {
    const { set } = useApiUpcomingMoviesStore();
    
    const query = useQuery<UpcomingMoviesResponse>({
        queryKey: ["upcoming"],
        queryFn: () => Apiservice.getUpcomingMovies(),
    });

    useEffect(() => {
        if (query.data){
            set(query.data.results);
        }
    }, [query.data]);

    return query;
}