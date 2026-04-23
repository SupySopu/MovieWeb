import { create } from "zustand";
import type { Cast } from "../../types/Cast";

interface CastState{
    cast: Cast[], 
    set: (castDetails: Cast[]) => void;
}

const initialState = {
    cast: []
}

export const useCastMovieIdStore = create<CastState>(
    (set) => ({
        ...initialState,
        set: (castDetails) => set({cast: castDetails})
    })
)