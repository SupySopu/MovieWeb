import { create } from "zustand";
import type { MovieDetails } from "../types/Movie";

interface MovieState{
    movie: MovieDetails | null,
    set: (details: MovieDetails) => void;
}

export const useMovieStore = create<MovieState>((set) => ({
    movie: null,
    set: (details) => set({movie: details}),
}))