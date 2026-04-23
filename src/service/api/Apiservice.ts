import type { CastResponse } from "../../hooks/useFetchCastByMovie";
import { axiosInstance } from "./axiosInstance";
import type { ApiMovieDetails, ApiMovieSearchParams } from "../../types/apiMovie";
import type { GenresResponse } from "../../hooks/useFetchApiGenre";
import type { MoviesResponse } from "../../hooks/useFetchApiMovies";
import type { UpcomingMoviesResponse } from "../../hooks/useFetchApiUpcomingMovies";

// asegurar que el filtro no sea undefined
const getMovies = async (page = 1, params: ApiMovieSearchParams ):Promise<MoviesResponse> => {
    if (params.q) {
        const response = await axiosInstance.get(`/search/movie`, {
            params: { query: params.q, page }
        });
        return response.data;
    }

    const response = await axiosInstance.get(`/discover/movie?page=${page}`, {params});
    return response.data;
}

const getMovieById = async (id: number): Promise<ApiMovieDetails> => {
    const response = await axiosInstance.get<ApiMovieDetails>(`/movie/${id}`);

    if (!response.data){
        throw new Error("Movie not found");
    }

    return response.data;
}

const getGenres = async (): Promise<GenresResponse> => {
    const response = await axiosInstance.get("/genre/movie/list");
    return response.data;
}

const getUpcomingMovies = async (): Promise<UpcomingMoviesResponse>=> {
    const res = await axiosInstance.get("/movie/upcoming");
    return res.data;
};

const getCast = async (id: number): Promise<CastResponse> => {
    const response = await axiosInstance.get(`/movie/${id}/credits`)
    return response.data;
}

export const Apiservice = {
    getMovies,
    getMovieById,
    getCast,
    getGenres,
    getUpcomingMovies
}