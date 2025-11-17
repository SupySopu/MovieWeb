import { create } from "zustand";
import type { Genres } from "../types/Movie";

export interface GenresState{
    genres: Genres[];
    set: (state: Partial<GenresState>) => void;
    reset: () => void;
}

const initialState = {
    genres: [],
};

export const useGenresStore = create<GenresState>()(
    (set) => ({
    ...initialState,
    set: (newState) => set(newState),
    reset: () => set(initialState),
}));