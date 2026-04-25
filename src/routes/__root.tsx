import { createRootRoute, Outlet, useRouterState } from '@tanstack/react-router'
import NavBar from '../components/NavBar/NavBar'

export const RootLayout = () => {
  const { location } = useRouterState()

  switch (location.pathname) {
    case '/':
      break
    case '/favourites':
      break
    case '/createMovie':
      break
    default:
      break
  }

  return (
    <div className="root-layout">
      <NavBar />
      <Outlet />
    </div>
  )
}
export const Route = createRootRoute({ component: RootLayout })