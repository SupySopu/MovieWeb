import { createFileRoute } from '@tanstack/react-router'
import InfoMovieTable from '../../../components/InfoMovieTable/InfoMovieTable'

export const Route = createFileRoute('/movie/$movieId/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='movie-id-index'>
      <InfoMovieTable
        id={1}
        score={7.8}
        rank="#1234"
        popularity="#5678"
        year="2024"
        tags={["Tag", "Medium Tag", "Looong Tag"]}
      />
    </div>
  )
}
