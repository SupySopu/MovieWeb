import { Button } from "@headlessui/react";
import HeartFavorites from "../HeartFavorites/HeartFavorites";
import StarBtn from "../StarBtn/StarBtn";
import { Link } from "@tanstack/react-router";
import ConfMovieCard from "../ConfMovieCard/ConfMovieCard";

// img default en lugar de div

export default function Moviecard() {
  return (
    <div className="movie-card">
      <ConfMovieCard />
          <Link to="/movie/$movieId" params={{movieId: String(1)}}>
            <Button className="redirect-card">
              <div className="improv-img"></div>
              <h3>Movie Card</h3>
          </Button>
          </Link>
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