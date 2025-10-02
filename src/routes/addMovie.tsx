import { createFileRoute } from '@tanstack/react-router'
import AddMovieForm from '../components/AddMovieForm/AddMovieForm'

export const Route = createFileRoute('/addMovie')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <div className='add-movie'>
    <AddMovieForm/>
  </div>
  )
}
