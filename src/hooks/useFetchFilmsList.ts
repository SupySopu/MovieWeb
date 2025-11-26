import { useQuery } from "@tanstack/react-query";
import { Serverservice } from "../service/server/serverService";

export const useFetchFilmList = () => {

    return useQuery({
        queryKey: ['films'],
        queryFn: () => Serverservice.getFilms(),
    });

};