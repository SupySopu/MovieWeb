import { create } from "zustand";
import type { MovieApi } from "../types/Movie";

interface UpcomingMoviesState {
    upcoming: MovieApi[];
    set: (movies: MovieApi[]) => void;
    reset: () => void;
}

const initialState = {
    upcoming: [],
};

export const useUpcomingMoviesStore = create<UpcomingMoviesState>()(
    (set) => ({
        ...initialState,
        set: (movies) => set({ upcoming: movies }),
        reset: () => set(initialState),
    })
);
