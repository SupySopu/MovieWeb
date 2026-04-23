import { axiosInstance } from "./axiosInstance";
import type { ApiMovieDetails, ApiMovieSearchParams } from "../../types/apiMovie";
import type { GenresResponse } from "../../hooks/api/useFetchApiGenre";
import type { MoviesResponse } from "../../hooks/api/useFetchApiMovies";
import type { UpcomingMoviesResponse } from "../../hooks/api/useFetchApiUpcomingMovies";
import type { CastResponse } from "../../hooks/api/useFetchApiCastByMovieId";

// asegurar que el filtro no sea undefined
const getMovies = async (page = 1, params: ApiMovieSearchParams ):Promise<MoviesResponse> => {
    if (params.q) {
        const response = await axiosInstance.get(`/search/movie`, {
            params: { query: params.q, page }
        });
        return response.data;
    }

    const response = await axiosInstance.get(`/discover/movie?page=${page}`, {params});
    console.log(response);
    return response.data;
}

const getMovieById = async (id: number): Promise<ApiMovieDetails> => {
    const response = await axiosInstance.get<ApiMovieDetails>(`/movie/${id}`);

    if (!response.data){
        throw new Error("Movie not found");
    }
    //console.log(response);
    return response.data;
}

const getGenres = async (): Promise<GenresResponse> => {
    const response = await axiosInstance.get("/genre/movie/list");
    //console.log(response);
    return response.data;
}

const getUpcomingMovies = async (): Promise<UpcomingMoviesResponse>=> {
    const response = await axiosInstance.get("/movie/upcoming");

    //console.log(response.data);
    return response.data;
};

const getCastByMovieId = async (id: number): Promise<CastResponse> => {
    const response = await axiosInstance.get(`/movie/${id}/credits`)

    //console.log(response);
    return response.data;
}

export const Apiservice = {
    getMovies,
    getMovieById,
    getCastByMovieId,
    getGenres,
    getUpcomingMovies
}