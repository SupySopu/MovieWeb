import HeartFavorites from '../HeartFavorites/HeartFavorites'
import placeholder from '../../assets/landscape-placeholder.png';
import { useState } from 'react';

export default function ImgMovie() {

  const [isFav, setIsFav] = useState(false)

  const manageFav = (updateFav: boolean) => {
    setIsFav(updateFav)
    console.log(`Película ${updateFav ? 'agregada' : 'removida'} de favoritos`)
  }

  return (
    <div className='img-movie'>
        <img src={placeholder}/>

        <div className='favs'>
            <HeartFavorites id={1} isFav={isFav} manageFav={manageFav} />
            <p>{isFav ? "Added to favorites" : "Add to favorites"}</p>
        </div>
    </div>
  )
}
