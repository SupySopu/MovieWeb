import HeartFavorites from '../HeartFavorites/HeartFavorites'

export default function ImgMovie() {
  return (
    <div className='img-movie'>
        <div className='poster'></div>

        <div className='favs'>
            <HeartFavorites/>
            <p>Add to favorites</p>
        </div>
    </div>
  )
}
