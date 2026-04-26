import { useQuery } from "@tanstack/react-query"
import { Serverservice } from "../../service/server/serverService"

export const useFetchLocalMovies = () => {
    const query = useQuery({
        queryKey: ["localMovie"],
        queryFn: () => Serverservice.getLocalMovies()
    })

    return query;
}