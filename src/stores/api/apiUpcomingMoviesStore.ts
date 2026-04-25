import { create } from "zustand";
import type { ApiMovie } from "../../types/Movie";

interface UpcomingMoviesResponse {
    upcoming: ApiMovie[];
    set: (movieS: ApiMovie[]) => void;
    reset: () => void;
}

const initialState = {
    upcoming: [],
}

export const useApiUpcomingMoviesStore = create<UpcomingMoviesResponse>()(
    (set) => ({
        ...initialState,
        set: (movies) => set({ upcoming: movies }),
        reset: () => set(initialState),
    })
)