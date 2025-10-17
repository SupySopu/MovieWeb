<<<<<<< HEAD
import { Link } from '@tanstack/react-router'
import AddMovieBtn from '../AddMovieBtn/AddMovieBtn'
import { FaHome } from "react-icons/fa";
import { IoHeartSharp } from "react-icons/io5";

interface NavBarProps {
  backgroundColor?: string
  isFloating?: boolean
}

export default function NavBar({ backgroundColor, isFloating }: NavBarProps) {
  return (
    <div className={`navbar ${isFloating ? 'floating' : ''}`} style={{backgroundColor}}>

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
=======
import { Link } from '@tanstack/react-router'
import AddMovieBtn from '../AddMovieBtn/AddMovieBtn'
import { FaHome } from "react-icons/fa";
import { IoHeartSharp } from "react-icons/io5";

interface NavBarProps {
  backgroundColor?: string
  isFloating?: boolean
}

export default function NavBar({ backgroundColor, isFloating }: NavBarProps) {
  return (
    <div className={`navbar ${isFloating ? 'floating' : ''}`} style={{backgroundColor}}>

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
>>>>>>> 4f3638e89b5f2d339738455c0154ff47bb4754bf
