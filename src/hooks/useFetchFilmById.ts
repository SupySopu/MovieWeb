import { useQuery } from "@tanstack/react-query";
import { Serverservice } from "../service/server/serverService";

export const useFetchFilmById = (id: string) => {
  return useQuery({
    queryKey: ['film', id],
    queryFn: () => Serverservice.getFilmById(id),
  });
};