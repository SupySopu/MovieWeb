import { createFileRoute, useParams } from '@tanstack/react-router'

export const Route = createFileRoute('/movie/$movieId/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { movieId } = useParams({ from: "/movie/$movieId/" });

  return <div>Hello "/movie/"!</div>
}
