import type { LocalMovie } from "../../types/Movie";
import serverAxiosInstance from "./serverAxiosInstance"

// el type quizas cambia
const createMovie = async (localMovie: Partial<LocalMovie>) => {
  const response = await serverAxiosInstance.post("/userLocalMovie", localMovie);

  return response.data;
}

const getLocalMovies = async () => {
  const response = await serverAxiosInstance.get("/userLocalMovie");

  return response.data;
}

const getLocalMovieById = async (id: string) => {
    const response = await serverAxiosInstance.get(`/userLocalMovie/${id}`);
    
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