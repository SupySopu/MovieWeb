import { createRootRoute, Outlet, useRouterState } from '@tanstack/react-router'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import NavBar from '../components/NavBar/NavBar'

export const RootLayout = () => {
  const { location } = useRouterState()
  let navbarColor: string | undefined

  switch (location.pathname) {
    case '/':
      navbarColor = '#090042'
      break
    case '/favorites':
      navbarColor = '#090042'
      break
    case '/addMovie':
      navbarColor = '#090042'
      break
    default:
      navbarColor = '#090042'
      break
  }

  return (
    <div className="root-layout">
      <NavBar backgroundColor={navbarColor} />
      <ScrollToTop />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  )
}
export const Route = createRootRoute({ component: RootLayout })