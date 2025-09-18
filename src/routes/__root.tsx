import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const RootLayout = () => (
  <>
    <div className="navbar">
      <Link to="/" className="">
        Home
      </Link>{' '}
      <Link to="/favorites" className="">
        Favorites
      </Link>{' '}
      <Link to="/addMovie" className="">
        Add
      </Link>
    </div>
    <Outlet />
    <TanStackRouterDevtools />
  </>
)

export const Route = createRootRoute({ component: RootLayout })