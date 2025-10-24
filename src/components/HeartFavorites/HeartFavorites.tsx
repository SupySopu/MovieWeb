import { Button } from "@headlessui/react";
import { IoHeartOutline } from "react-icons/io5";
import { IoIosHeart } from "react-icons/io";
import type { FavouriteMovie } from "../../types/Movie";

type HeartFavoritesProps = FavouriteMovie & {
  manageFav: (updateFav: boolean) => void; 
}

export default function HeartFavorites({ id, isFav, manageFav }: HeartFavoritesProps) {
  return (
    <Button className="heart-btn" onClick={() => manageFav(!isFav)}>
      {isFav 
        ? <IoIosHeart className="icon-heart-active" /> 
        : <IoHeartOutline className="icon-heart-unactive"/>
      }
    </Button>
  )
}