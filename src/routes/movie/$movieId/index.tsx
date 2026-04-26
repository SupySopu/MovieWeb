import { createFileRoute, useParams } from '@tanstack/react-router'
import { useApiMoviesStore } from '../../../stores/api/apiMoviesStore';
import { useFetchLocalMovieById } from '../../../hooks/local/useFetchLocalMovieById';
import { useFetchApiMovieById } from '../../../hooks/api/useFetchApiMovieById';
import { useCastMovieIdStore } from '../../../stores/api/apiCastMovieIdStore';
import { useFetchApiCastByMovieId } from '../../../hooks/api/useFetchApiCastByMovieId';
import CastSection from '../../../components/CastSection/CastSection';

export const Route = createFileRoute('/movie/$movieId/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { movieId } = useParams({ from: "/movie/$movieId/" });
  const { type } = useApiMoviesStore();

  // Queries (React Query se encarga de que no choquen)
  const localQuery = useFetchLocalMovieById(movieId);
  const apiQuery = useFetchApiMovieById(Number(movieId));
  
  // Obtenemos el cast de la API
  const apiCastData = useFetchApiCastByMovieId(Number(movieId)); 

  const movie = type === "local" ? localQuery.data : apiQuery.data;

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-details-page">
      <header>
        <h1>{movie.title}</h1>
        <h2>{movie.original_title}</h2>
      </header>

      {/* Usamos el componente unificado como lo hiciste con las Cards */}
      <CastSection
        type={type as "api" | "local"}
        apiCast={apiCastData?.cast} 
        localCast={movie.cast}      // Viene del objeto movie local
      />
    </div>
  );
}