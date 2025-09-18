import HeartFavorites from "../HeartFavorites/HeartFavorites";
import star from "../../assets/star.png";

export default function Moviecard() {
  return (
    <div className="movie-card">
        <div className="improv-img"></div>
        <h3>First Movie Card</h3>
        <div className="info">
            <img src={star}></img>
            <h3 className="rating">7.0</h3>
            <HeartFavorites />
        </div>
    </div>
  )
}