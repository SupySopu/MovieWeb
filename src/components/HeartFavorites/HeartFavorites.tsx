import { Button } from "@headlessui/react";
import { useEffect, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";
import { IoIosHeart } from "react-icons/io";
import type { FavouriteMovie } from "../../types/Movie";

export default function HeartFavorites({isFav}: FavouriteMovie) {
  const [fav, setFav] = useState(false);

  function heartBtnState() {
    setFav(!fav);
  }

  return (
    <Button className="heart-btn" onClick={heartBtnState}>
      {fav ? <IoIosHeart className="icon-heart-active" /> : (
        <IoHeartOutline className="icon-heart-unactive"/>
        )}
    </Button>
  )
}
