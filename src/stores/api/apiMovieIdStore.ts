import { create } from "zustand";
import type { ApiMovieDetails } from "../types/apiMovie";

interface MovieState{
    movie: ApiMovieDetails | null,
    set: (details: ApiMovieDetails) => void;
}

export const useApiMovieIdStore = create<MovieState>((set) => ({
    movie: null,
    set: (details) => set({movie: details}),
}))