import { useMutation } from "@tanstack/react-query";
import { Serverservice } from "../service/server/serverService";
import type { FilmsLocal } from "../types/Films";

export const useCreateFilm = () => {
    const mutation = useMutation({
        mutationFn: (film: Partial<FilmsLocal>) => Serverservice.createFilm(film) 
    });
    return mutation;
}