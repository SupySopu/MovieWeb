import type { FilmsLocal } from "../../types/Films"
import serverAxiosInstance from "./serverAxiosInstance"

// el type quizas cambia
const createFilm = async (film: Partial<FilmsLocal>) => {
    await serverAxiosInstance.post("/userFilms", film)
}

const getFilms = async () => {
  const response = await serverAxiosInstance.get("/userFilms");

  return response.data;
}

const getFilmById = async (id: string) => {
    const response = await serverAxiosInstance.get(`/userFilms/${id}`);
    
    if (!response.data) {
      throw new Error("Movie not found");
    }
        
    return response.data;
}

export const Serverservice = {
    createFilm,
    getFilms,
    getFilmById
}