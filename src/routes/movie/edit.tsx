import { createFileRoute } from '@tanstack/react-router'
import EditMovieForm from '../../components/EditMovieForm/EditMovieForm'
import AddMovieImg from '../../components/AddMovieImg/AddMovieImg'

export const Route = createFileRoute('/movie/edit')({  component: RouteComponent,
})

function RouteComponent() {
  return (
  <div className='add-movie'>
    <div className='add-movie-left'>
      <AddMovieImg/>
    </div>
    <div className='add-movie-right'>
      <EditMovieForm/>
    </div>
  </div>
  )
}
