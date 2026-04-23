import type { LocalMovie } from "../../types/localMovie";
import serverAxiosInstance from "./serverAxiosInstance"

// el type quizas cambia
const createMovie = async (movieLocal: Partial<LocalMovie>) => {
  await serverAxiosInstance.post("/userFilms", movieLocal)
}

const getLocalMovies = async () => {
  const response = await serverAxiosInstance.get("/userFilms");

  return response.data;
}

const getLocalMovieById = async (id: string) => {
    const response = await serverAxiosInstance.get(`/userFilms/${id}`);
    
    if (!response.data) {
      throw new Error("Movie not found");
    }
        
    return response.data;
}

export const Serverservice = {
    createMovie,
    getLocalMovies,
    getLocalMovieById
}