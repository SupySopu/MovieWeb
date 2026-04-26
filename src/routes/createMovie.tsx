import { createFileRoute } from '@tanstack/react-router'
import MovieForm from '../components/Local/MovieForm/MovieForm'

export const Route = createFileRoute('/createMovie')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <MovieForm />
  </div>
}
