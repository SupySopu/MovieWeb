import { Button } from "@headlessui/react";
import HeartFavorites from "../HeartFavorites/HeartFavorites";
import StarBtn from "../StarBtn/StarBtn";
import { Link } from "@tanstack/react-router";
import ConfMovieCard from "../ConfMovieCard/ConfMovieCard";
import LocalTag from "../LocalTag/LocalTag";
import { useState } from "react";
import placeholder from "../../assets/landscape-placeholder.png";
import type { FilmCardProps } from "../../types/Films";

// img default en lugar de div

export default function FilmsCard({id, title, vote_average, poster_path} : FilmCardProps) {

  // const [fav, setFav] = useState(isFav);

  // function handleFav(updateFav: boolean){
  //   setFav(updateFav);
  // }

  return (
    <div className="film-card">
      <ConfMovieCard />
          <Link to="/movie/$movieId" params={{movieId: String(id)}}>
            <Button className="redirect-card">
              <div className="container-img">
                {
                  poster_path 
                  ? <img src={poster_path}/>
                  : <img src={placeholder}/>
                }

                {/* {isLocal && <LocalTag />} */}
              </div>
              <h3>{title}</h3>
          </Button>
          </Link>
        <div className="info">
            <div className="info-left">
              <StarBtn />
              <h3 className="rating">{vote_average}</h3>
            </div>
            <div className="info-right">
              <HeartFavorites
                id={id}
                // isFav={fav}
                // manageFav={handleFav}
              />
            </div>
        </div>
    </div>
  )
}