import { useQuery } from "@tanstack/react-query";
import type { Cast } from "../../types/Cast";
import { Apiservice } from "../../service/api/Apiservice";
import { useEffect } from "react";
import { useCastMovieIdStore } from "../../stores/api/apiCastMovieIdStore";
import { useApiMovieIdStore } from "../../stores/api/apiMovieIdStore";

export interface CastResponse{
    id: number,
    cast: Cast[];
}

export const useFetchApiCastByMovieId = () => {
    const { movie } = useApiMovieIdStore();
    const { set } = useCastMovieIdStore();

    const query = useQuery<CastResponse>({
        queryKey: ["cast", movie?.id],
        queryFn: () => Apiservice.getCastByMovieId(movie!.id),
    });

    useEffect(() => {
        if (query.data?.cast) {
            set(query.data.cast)
        }
    }, [query.data]);

    return query.data;
}