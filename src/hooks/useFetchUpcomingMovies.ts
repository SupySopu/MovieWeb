import { useQuery } from "@tanstack/react-query";
import { Apiservice } from "../service/api/Apiservice";
import { useEffect } from "react";
import type { MovieApi } from "../types/Movie";
import { useUpcomingMoviesStore } from "../stores/upcomingMoviesStore";

export interface UpcomingMoviesResponse{
    dates: {
        maximum: string,
        minimum: string
    }
    page: number,
    results: MovieApi[],
    total_pages: number,
    total_results: number
}

export const useFetchUpcomingMovies = () => {
  const { set } = useUpcomingMoviesStore();

  const query = useQuery<UpcomingMoviesResponse>({
    queryKey: ["upcoming"],
    queryFn: () => Apiservice.getUpcomingMovies(),
  });

  useEffect(() => { 
    if (query.data){
      set(query.data.results);
    }
  }, [query.data]);

  return query;
};