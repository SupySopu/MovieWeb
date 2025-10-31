import { useQuery } from "@tanstack/react-query";
import { useMovieStore } from "../stores/movieStore";
import type { MovieDetails } from "../types/Movie";
import { Apiservice } from "../service/api/Apiservice";
import { useEffect } from "react";

export const useFetchMovieById = (movieId: number) => {
  const { set } = useMovieStore();

  const query = useQuery<MovieDetails>({
    queryKey: ["movie", movieId],
    queryFn: () => Apiservice.getMovieById(movieId),
    });

    useEffect(() => {
        if (query.data) {
            set(query.data);
        }
    }, [query.data])
    return query;
};