import { create } from "zustand";
import type { MovieApi, MovieDetails } from "../types/Movie";
import { Apiservice } from "../service/api/Apiservice";

interface MoviesState{
    movies: MovieApi[],
    set: (state: Partial<MoviesState>) => void 
}

interface MovieState{
    movie: MovieDetails | null,
    set: (details: MovieDetails) => void;
    fetchMovie: (id:number) => Promise<void>
}

const initialState = {
    movies: []
}

export const useMoviesStore = create<MoviesState>()(
    (set) => ({
        ...initialState, 
        set: (newState) => set(newState)
    })
)

export const useMovieStore = create<MovieState>((set) => ({
    movie: null,
    set: (details) => set({movie: details}),

    fetchMovie: async (id: number) => {
        try{
            const movieDetails = await Apiservice.getMovie(id);
            set({movie: movieDetails});
        } catch (e) {
            console.log("No se pudo hacer fetch", e)
        }
    }
}))