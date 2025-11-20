// export type Movie = {
//   id: number;
//   title: string;      
//   originalTitle: string; 
//   score: number;       
//   rank: string;        
//   popularity: string;  
//   year: string;        
//   tags: string[];      
//   description: string[]; 
//   cast: string[];
//   isFav: boolean;
//   isLocal: boolean;
// };

export type MovieApi = {
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

export type MovieApiSearchParams = {
  sort_by?: string,
  with_genres?: number, // para que sea solo un genero es un string, sino Genres[] para muchos
  q?: string
}

export type Genres = {
  id: number,
  name: string
}

export type MovieDetails = {
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


export type MovieCardProps = Pick<MovieApi, 'id' | 'title' | 'vote_average' | 'poster_path'>

export type UpcomingMovieCardProps = Pick<MovieApi, 'id' | 'title' | 'vote_average' | 'poster_path' | 'release_date' | 'overview'>

export type InfoMovieTableProps = Pick<MovieDetails, 'vote_average' | 'vote_count' |'popularity' | 'release_date' | "genres" >

export type ImgMovieProp = Pick<MovieDetails, "poster_path"> 

// export type MovieCardProps = Pick<Movie, 'id' | 'title' | 'score' | 'isFav' | 'isLocal'>;

// export type FavouriteMovie = Pick<Movie, 'id' | 'isFav'>