import { create } from "zustand"
import type { MovieApi, MovieApiSearchParams } from "../types/Movie"

interface MoviesState{
    movies: MovieApi[];
    params: MovieApiSearchParams;

    set: (state: Partial<MoviesState>) => void;
    reset: () => void;
}

const initialState = {
    movies: [],
    params: {},
}

export const useMoviesStore = create<MoviesState>()(
    (set) => ({
        ...initialState, 
        set: (newState) => set(newState),
        reset: () => set(initialState),
    })
)