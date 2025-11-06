import { useQuery } from "@tanstack/react-query";
import { useMovieStore } from "../stores/movieIdStore";
import { Apiservice } from "../service/api/Apiservice";
import type { Cast } from "../types/Cast";
import { useEffect } from "react";
import { useCastStore } from "../stores/castStore";

export interface CastResponse {
    id: number;
    cast: Cast[];
}

export const useFetchCast = () => {
    const { movie } = useMovieStore();
    const { set } = useCastStore();

    const query = useQuery<CastResponse>({
        queryKey: ["cast", movie?.id],
        queryFn: () => Apiservice.getCast(movie!.id),
    });

    useEffect(() => {
        if (query.data?.cast) {
        set(query.data.cast);
        }
    }, [query.data]);

    return query.data;
};