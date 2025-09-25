import { Link } from '@tanstack/react-router'

export default function NavBar() {
  return (
    <div className="navbar">

      <div className="navbar-left">
      </div>
      <div className="navbar-right">
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
    </div>
  )
}
