import StarBtn from '../StarBtn/StarBtn'
import HeartFavorites from '../HeartFavorites/HeartFavorites'
import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import type { UpcomingMovieCardProps } from '../../types/Movie'
import placeholder from "../../assets/landscape-placeholder.png";

export default function NewReleasesCard({id, title, vote_average, poster_path, release_date, overview} : UpcomingMovieCardProps) {

  // const [isFav, setIsFav] = useState(false)

  // const manageFav = (updateFav: boolean) => {
  //   setIsFav(updateFav)
  //   console.log(`Película ${updateFav ? 'agregada' : 'removida'} de favoritos`)
  // }

  return (
<div className='new-release-card'>
  <Link to='/movie/$movieId' params={{ movieId: String(id) }} className='content-area'>

    <div className="content">
      <h2 className="title">{title}</h2>
      <p className="release-date">{release_date}</p>
      <p className="description">
        {overview.length > 120 ? overview.slice(0, 120) + "..." : overview}
      </p>

      <div className="footer">
        <div className="rating">
          <StarBtn />
          <h3 className="score">{vote_average}</h3>
        </div>
      </div>
    </div>

    <div className="container-img">
      {poster_path 
        ? <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
        : <img src={placeholder} />
      }
    </div>

  </Link>
</div>

  )
}