import { useQuery } from "@tanstack/react-query";
import { Apiservice } from "../service/api/Apiservice";
import { useEffect } from "react";
import { useApiGenresStore } from "../stores/api/apiGenreStore";
import type { Genres } from "../types/apiMovie";

export interface GenresResponse {
    genres: Genres[];
}

export const useFetchApiGenre = () => {
    const { set, genres } = useApiGenresStore();

    const query = useQuery<GenresResponse>({
        queryKey: ["genres"],
        queryFn: () => Apiservice.getGenres()
    });

    useEffect(() => {
        if (query.data){
            set({genres: query.data.genres});
        }
    }, [query.data]);

    return query.data;
}