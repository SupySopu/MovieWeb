import { createFileRoute } from '@tanstack/react-router'
import Moviecard from '../components/MovieCard/Moviecard'
import Pagination from '../components/Pagination/Pagination'
import { movieCardsData } from '../types/db'

export const Route = createFileRoute('/favorites')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='favs'>
      <div className='container-movies'>
        {movieCardsData.map((movie) => (
            <Moviecard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              score={movie.score}
              // isFav={movie.isFav}
              // isLocal={movie.isLocal}
            />
        ))}
        <Pagination />
      </div>
    </div>
  )
}
