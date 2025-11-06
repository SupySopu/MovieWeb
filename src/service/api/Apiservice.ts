import type { CastResponse } from "../../hooks/useFetchCastByMovie";
import type { MoviesResponse } from "../../hooks/useFetchMovies";
import type { MovieDetails } from "../../types/Movie";
import { axiosInstance } from "./axiosInstance";

const getMovies = async ():Promise<MoviesResponse> => {
    const response = await axiosInstance.get("/movie/popular");

    return response.data;
}

const getMovieById = async (id: number): Promise<MovieDetails> => {
    const response = await axiosInstance.get<MovieDetails>(`/movie/${id}`);

    if (!response.data) {
      throw new Error("Movie not found");
    }
    
    return response.data;
};

const getCast = async (id: number): Promise<CastResponse> => {
    const response = await axiosInstance.get(`/movie/${id}/credits`)
    return response.data;
}

export const Apiservice = {
    getMovies, 
    getMovieById,
    getCast
}