import { Link } from '@tanstack/react-router'
import AddMovieBtn from '../AddMovieBtn/AddMovieBtn'
import { FaHome } from "react-icons/fa";
import { IoHeartSharp } from "react-icons/io5";

export default function NavBar() {
  return (
    <div className="navbar">

      <div className="navbar-left">
      </div>
      <div className="navbar-right">
        <Link to="/" className="">
        <FaHome className='icon'/>
          Home
        </Link>{' '}
        <Link to="/favorites" className="">
          <IoHeartSharp className='icon'/>
          Favorites
        </Link>{' '}
        <Link to="/addMovie" className="">
          <AddMovieBtn />
        </Link>
      </div>
    </div>
  )
}
