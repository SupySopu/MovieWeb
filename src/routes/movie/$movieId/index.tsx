import { createFileRoute, useParams } from '@tanstack/react-router' 
import InfoMovieTable from '../../../components/InfoMovieTable/InfoMovieTable'
import ImgMovie from '../../../components/ImgMovie/ImgMovie'
import { useFetchMovieById } from '../../../hooks/useFetchMovieById';
import { useFetchFilmById } from '../../../hooks/useFetchFilmById';
import CastList from '../../../components/CastList/CastList';
import { useCastStore } from '../../../stores/castStore';
import { useFetchCast } from '../../../hooks/useFetchCastByMovie';
import { useMoviesStore } from '../../../stores/moviesStore';
import styles from "../../../screens/movie/movieIdIndex.module.scss"

export const Route = createFileRoute('/movie/$movieId/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { movieId } = useParams({ from: "/movie/$movieId/" });

  const { type } = useMoviesStore();

  const { data: movie } = type === "local"
    ? useFetchFilmById(movieId)
    : useFetchMovieById(Number(movieId));

  const { cast } = useCastStore();
  useFetchCast();

  return (
    <div className={styles["movie-id-index"]}>
      
      <div className={styles["movie-id-index-left"]}>
        <ImgMovie poster_path={movie.poster_path} />
      </div>

      <div className={styles["movie-id-index-right"]}>
        
        <div className={styles["info-movie"]}>
          <h1>{movie.title}</h1>
          <h2>{movie.original_title}</h2>

          <InfoMovieTable
            vote_average={movie.vote_average}
            vote_count={movie.vote_count}
            popularity={movie.popularity}
            release_date={movie.release_date}
            genres={movie.genres}
          />
        </div>

        <p className={styles["movie-overview"]}>{movie.overview}</p>

        <div className={styles["cast-div"]}>
          <h3>Cast</h3>
          <hr />
          <CastList cast={cast} />
        </div>

      </div>
    </div>
  );
}
