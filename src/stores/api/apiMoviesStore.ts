import { create } from "zustand";
import type { ApiMovie, ApiMovieSearchParams } from "../types/apiMovie";

interface MoviesState{
    movies: ApiMovie[];
    params: ApiMovieSearchParams;
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

export const useApiMoviesStore = create<MoviesState>()(
    (set) => ({
        ...initialState,
        set: (newState) => set((state) => ({ ...state, ...newState})),
        reset: () => set(initialState),
    })
)