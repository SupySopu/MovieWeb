import { create } from "zustand"
import type { MovieApi, MovieApiSearchParams } from "../types/Movie"

interface MoviesState{
    movies: MovieApi[];
    params: MovieApiSearchParams;
    type: string;

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
  type: "api"
};

export const useMoviesStore = create<MoviesState>()(
    (set) => ({
        ...initialState, 
        set: (newState) => set((state) => ({ ...state, ...newState })),
        reset: () => set(initialState),
    })
)