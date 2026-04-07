import { createRootRoute, Outlet, useRouterState } from '@tanstack/react-router'

export const RootLayout = () => {
  const { location } = useRouterState()

  switch (location.pathname) {
    case '/':
      break
    case '/favourites':
      break
    case '/addMovie':
      break
    default:
      break
  }

  return (
    <div className="root-layout">
        <Outlet />
    </div>
  )
}
export const Route = createRootRoute({ component: RootLayout })