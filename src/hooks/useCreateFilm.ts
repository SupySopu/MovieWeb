import { useMutation } from "@tanstack/react-query";
import { Serverservice } from "../service/server/serverService";

export const useCreateFilm = () => {
    const mutation = useMutation({
        mutationFn: (newFilm) => Serverservice.createFilm(newFilm) 
    });
    return mutation;
}