import HeartFavorites from "../HeartFavorites/HeartFavorites";
import StarBtn from "../StarBtn/StarBtn";

export default function Moviecard() {
  return (
    <div className="movie-card">
        <div className="improv-img"></div>
        <h3>Movie Card</h3>
        <div className="info">
            <div className="info-left">
              <StarBtn />
              <h3 className="rating">7.0</h3>
            </div>
            <div className="info-right">
              <HeartFavorites />
            </div>
        </div>
    </div>
  )
}