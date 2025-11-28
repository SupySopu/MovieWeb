import { useQuery } from "@tanstack/react-query";
import { Serverservice } from "../service/server/serverService";
import { useEffect } from "react";
import { useMoviesStore } from "../stores/moviesStore";

export const useFetchFilmList = () => {
    const query = useQuery({
        queryKey: ['films'],
        queryFn: () => Serverservice.getFilms(),
    });

    return query;
};