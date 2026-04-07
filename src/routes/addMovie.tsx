import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/addMovie')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/addMovie"!</div>
}
