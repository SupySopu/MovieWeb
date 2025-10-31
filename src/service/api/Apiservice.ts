import type { MoviesResponse } from "../../hooks/useFetchMovies";
import type { MovieDetails } from "../../types/Movie";
import { axiosInstance } from "./axiosInstance";

const getMovies = ():Promise<MoviesResponse> => {
    return axiosInstance.get("/movie/popular")
}

const getMovieById = async (id: number): Promise<MovieDetails> => {
    const response = await axiosInstance.get<MovieDetails>(`/movie/${id}`);

    if (!response) {
      throw new Error("Movie not found");
    }

    return response;
};

export const Apiservice = {
    getMovies, 
    getMovieById
}