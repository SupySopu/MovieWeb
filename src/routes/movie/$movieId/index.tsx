import { createFileRoute, useParams } from '@tanstack/react-router'
import InfoMovieTable from '../../../components/InfoMovieTable/InfoMovieTable'
import CastTag from '../../../components/CastTag/CastTag'
import ImgMovie from '../../../components/ImgMovie/ImgMovie'
import { useFetchMovieById } from '../../../hooks/useFetchMovieById';

export const Route = createFileRoute('/movie/$movieId/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { movieId } = useParams({ from: "/movie/$movieId/" });
  const { data: movie, isLoading, error } = useFetchMovieById(Number(movieId));

  if (isLoading) return <p>Loading...</p>;
  if (error || !movie) return <p>Error al cargar la película</p>;

  return (
    <div className="movie-id-index">
      <div className='movie-id-index-left'>
        <ImgMovie 
        poster_path={movie.poster_path}
        />
      </div>

      <div className='movie-id-index-right'>
        <div className="info-movie">
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

        <p>{movie.overview}</p>

        {/* <div className="cast-div">
          <h3>Cast</h3>
          <hr />
          <CastTag cast={genres} />
        </div> */}
      </div>
    </div>
  )
}