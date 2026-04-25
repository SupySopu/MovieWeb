import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/createMovie')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div></div>
}
