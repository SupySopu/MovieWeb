import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/movie/$movieId/edit')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/movie/$movieId/edit"!</div>
}
