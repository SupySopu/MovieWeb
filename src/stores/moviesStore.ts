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
  params: {
    q: "",
    sort_by: undefined,
    with_genres: undefined,
  },
};

export const useMoviesStore = create<MoviesState>()(
    (set) => ({
        ...initialState, 
        set: (newState) => set((state) => ({ ...state, ...newState })),
        reset: () => set(initialState),
    })
)