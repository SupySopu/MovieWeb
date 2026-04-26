import { useQuery } from "@tanstack/react-query";
import type { Cast } from "../../types/Cast";
import { Apiservice } from "../../service/api/Apiservice";
import { useEffect } from "react";
import { useCastMovieIdStore } from "../../stores/api/apiCastMovieIdStore";

export interface CastResponse{
    id: number,
    cast: Cast[];
}

export const useFetchApiCastByMovieId = (movieId: number) => {
    const { set } = useCastMovieIdStore();

    const query = useQuery<CastResponse>({
        queryKey: ["cast", movieId],
        queryFn: () => Apiservice.getCastByMovieId(movieId),
    });

    useEffect(() => {
        if (query.data?.cast) {
            set(query.data.cast)
        }
    }, [query.data]);

    return query.data;
}