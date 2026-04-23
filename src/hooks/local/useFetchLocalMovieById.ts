import { useQuery } from "@tanstack/react-query"
import { Serverservice } from "../../service/server/serverService"

export const useFetchLocalMovieById = (id: string) => {
    const query = useQuery({
        queryKey: ["film", id],
        queryFn: () => Serverservice.getLocalMovieById(id),
    })

    return query;
}