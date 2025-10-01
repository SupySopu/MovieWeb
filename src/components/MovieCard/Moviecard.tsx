import { Button } from "@headlessui/react";
import HeartFavorites from "../HeartFavorites/HeartFavorites";
import StarBtn from "../StarBtn/StarBtn";

// img default en lugar de div

export default function Moviecard() {
  return (
    <div className="movie-card">
        <Button className="redirect-card">
          <div className="improv-img"></div>
          <h3>Movie Card</h3>
        </Button>
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