import { useQuery } from "@tanstack/react-query";
import { useGenresStore } from "../stores/genreStore";
import { useEffect } from "react";
import type { Genres } from "../types/Movie";
import { Apiservice } from "../service/api/Apiservice";

export interface GenresResponse {
  genres: Genres[];
}

export const useFetchGenre = () => {
  const { set, genres } = useGenresStore();

  const query = useQuery<GenresResponse>({
    queryKey: ["genres"],
    queryFn: () => Apiservice.getGenres()
  });

  useEffect(() => {
    if (query.data) {
      set({ genres: query.data.genres });
    }
  }, [query.data]);

  return query.data;
};
