export type ApiMovie = {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export type LocalMovie = {
    genres: Genres[],
    cast: Cast[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    vote_average: number,
    vote_count: number,
}

export type ApiMovieSearchParams = {
    sort_by? : string,
    with_genres? : number,
    q? : string
}

export type ApiMovieDetails = {
    genres: Genres[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    tagline: string,
    title: string,
    vote_average: number,
    vote_count: number
}

export type Genres = {
    id: number,
    name: string
}

export type HeartFavouritesProp = {
    id: number,
}

export type MovieCardProps = Pick<ApiMovie, "id" | "title" | "vote_average" | "poster_path">