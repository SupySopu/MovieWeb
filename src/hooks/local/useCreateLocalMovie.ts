import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { LocalMovie } from "../../types/Movie";
import { Serverservice } from "../../service/server/serverService";

export const useCreateLocalMovie = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (localMovie: Partial<LocalMovie>) => Serverservice.createMovie(localMovie),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["localMovie"]})
        }
    })

    return mutation;
}