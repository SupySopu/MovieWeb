import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/favorites')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='favorites'>
      <h1>Favoritos</h1>
      <p>:D!</p>
    </div>
  )
}
