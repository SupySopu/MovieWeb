import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Serverservice } from "../service/server/serverService";
import type { FilmsLocal } from "../types/Films";

export const useCreateFilm = () => {

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (film: Partial<FilmsLocal>) => Serverservice.createFilm(film),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['films'] })
        } 
    })

    return mutation;
}