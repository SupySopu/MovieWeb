import StarBtn from '../StarBtn/StarBtn'
import HeartFavorites from '../HeartFavorites/HeartFavorites'
import { Link } from '@tanstack/react-router'

export default function NewReleasesCard() {
  return (
    <div className='new-release-card'>
      <Link to='/movie/$movieId' params={{movieId: String(1)}}>      
        <div className="content">
            <h2 className="title">Untitled: New Movie</h2>
            <p className="author">Author</p>
            <p className="description">
            Taking place during the events of John Wick: Chapter 3 – Parabellum, Eve
            Maccaro begins her training in the assassin traditions of the Ruska Roma.
            </p>
          </div>
        </Link>

        <div className="footer">
          <div className="rating">
            <StarBtn />
            <h3 className="score">7.8</h3>
          </div>
            <HeartFavorites />
        </div>
    </div>
  )
}