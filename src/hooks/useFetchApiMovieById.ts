import { useQuery } from "@tanstack/react-query"
import { Apiservice } from "../service/api/Apiservice"
import type { ApiMovieDetails } from "../types/apiMovie"
import { useApiMovieIdStore } from "../stores/api/apiMovieIdStore"
import { useEffect } from "react"

export const useFetchApiMovieById = (apiMovieId: number) => {
    const { set } = useApiMovieIdStore()

    const query = useQuery<ApiMovieDetails>({
        queryKey: ["movie", apiMovieId],
        queryFn: () => Apiservice.getMovieById(apiMovieId),
    })

    useEffect(() => {
        if (query.data) {
            set(query.data);
        }
    }, [query.data])

    return query;
}