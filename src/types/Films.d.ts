import type { Genres } from "./Movie"

export type FilmsLocal = {
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
  vote_count: number
}

export type InfoFilmTableProps = Pick<FilmsLocal, 'vote_average' | 'vote_count' |'popularity' | 'release_date' | "genres" >

export type ImgFilmProp = Pick<FilmsLocal   , "poster_path"> 