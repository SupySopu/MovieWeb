import placeholder from '../../assets/landscape-placeholder.png';
import type { ImgMovieProp } from '../../types/Movie';

export default function ImgMovie({ poster_path}: ImgMovieProp) {

  // const [isFav, setIsFav] = useState(false)

  // const manageFav = (updateFav: boolean) => {
  //   setIsFav(updateFav)
  //   console.log(`Película ${updateFav ? 'agregada' : 'removida'} de favoritos`)
  // }

  return (
    <div className='img-movie'>
        { poster_path 
        ? <img src={`https://image.tmdb.org/t/p/w500${poster_path}`}/>
        : <img src={placeholder}/>}

        {/* <div className='favs'>
            <HeartFavorites id={1} isFav={isFav} manageFav={manageFav} />
            <p>{isFav ? "Added to favorites" : "Add to favorites"}</p>
        </div> */}
    </div>
  )
}
