import { create } from "zustand"
import type { MovieApi } from "../types/Movie"

interface MoviesState{
    movies: MovieApi[],
    set: (state: Partial<MoviesState>) => void 
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