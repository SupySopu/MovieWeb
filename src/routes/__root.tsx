import { createRootRoute, Outlet, useRouterState } from '@tanstack/react-router'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import NavBar from '../components/NavBar/NavBar'

export const RootLayout = () => {
  const { location } = useRouterState()
  let navbarColor: string | undefined

  switch (location.pathname) {
    case '/':
      navbarColor = 'transparent'
      break
    case '/favorites':
      navbarColor = '#06002D'
      break
    case '/addMovie':
      navbarColor = '#06002D'
      break
    default:
      navbarColor = '#06002D'
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