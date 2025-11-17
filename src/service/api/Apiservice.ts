import type { CastResponse } from "../../hooks/useFetchCastByMovie";
import type { GenresResponse } from "../../hooks/useFetchGenre";
import type { MoviesResponse } from "../../hooks/useFetchMovies";
import type { MovieApiSearchParams, MovieDetails } from "../../types/Movie";
import { axiosInstance } from "./axiosInstance";

// asegurar que el filtro no sea undefined
const getMovies = async (page = 1, params: MovieApiSearchParams ):Promise<MoviesResponse> => {
    const response = await axiosInstance.get(`/discover/movie?page=${page}`, {params});
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

const getGenres = async (): Promise<GenresResponse> => {
    const response = await axiosInstance.get("/genre/movie/list");
    return response.data;
}


export const Apiservice = {
    getMovies, 
    getMovieById,
    getCast,
    getGenres
}