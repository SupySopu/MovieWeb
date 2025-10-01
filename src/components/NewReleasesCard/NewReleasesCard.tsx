import StarBtn from '../StarBtn/StarBtn'
import HeartFavorites from '../HeartFavorites/HeartFavorites'

export default function NewReleasesCard() {
  return (
    <div className='new-release-card'>
        <div className="poster"></div>

        <div className="content">
            <h2 className="title">Untitled: New Movie</h2>
            <p className="author">Author</p>
            <p className="description">
            Taking place during the events of John Wick: Chapter 3 – Parabellum, Eve
            Maccaro begins her training in the assassin traditions of the Ruska Roma.
            </p>

            <div className="footer">
            <div className="rating">
                <StarBtn />
                <h3 className="score">7.8</h3>
            </div>
                <HeartFavorites />
            </div>
        </div>
    </div>
  )
}