export type Movie = {
  id: number;
  title: string;      
  originalTitle: string; 
  score: number;       
  rank: string;        
  popularity: string;  
  year: string;        
  tags: string[];      
  description: string[]; 
  cast: string[];
  isFav: boolean;
};

export type InfoMovieTableProps = Pick<Movie, 'id' | 'score' | 'rank' | 'popularity' | 'year' | 'tags'>;

export type CastTagProps = Pick<Movie, 'cast'>;

export type MovieDescriptionProps = Pick<Movie, 'description'>;

export type FavouriteMovie = Pick<Movie, 'isFav'>