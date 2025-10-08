import { createFileRoute } from '@tanstack/react-router'
import InfoMovieTable from '../../../components/InfoMovieTable/InfoMovieTable'
import CastTag from '../../../components/CastTag/CastTag'
import ImgMovie from '../../../components/ImgMovie/ImgMovie'

export const Route = createFileRoute('/movie/$movieId/')({
  component: RouteComponent,
})

// 

function RouteComponent() {
  const movie = {
    id: 1,
    title: "Untitled: Ultimate Movie",
    originalTitle: "Real Name of Random Movie",
    score: 7.8,
    rank: "#1234",
    popularity: "#5678",
    year: "2024",
    tags: ["Tag", "Medium Tag", "Looong Tag"],
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod, urna a ornare mollis, massa sapien facilisis dui, vitae aliquet arcu mi eget nisi. Praesent ultricies leo eu arcu facilisis consequat. Phasellus quam diam, volutpat et eros non, ullamcorper interdum nunc. Suspendisse ultrices dictum mattis. Proin magna sem, efficitur a pellentesque vel, facilisis quis justo. Nunc purus diam, volutpat nec enim vitae, rhoncus gravida tellus. Donec egestas massa eget erat bibendum vulputate. Donec eget massa eu leo cursus dapibus. Donec in nunc in lacus dictum lobortis. Nullam condimentum in sapien ut blandit.",
      "Lorem ipsum dolor sit amet..."
    ],
    cast: [
      "Example Tag", 
      "Example Loooooooooooooong Tag",
      "Example Tag", 
      "Example Loooooooooooooong Tag",
      "Example Tag", 
      "Example Loooooooooooooong Tag",
      "Example Tag", 
      "Example Loooooooooooooong Tag",
      "Example Tag", 
      "Example Loooooooooooooong Tag"
    ]
  }

  return (
    <div className="movie-id-index">
      <div className='movie-id-index-left'>
        <ImgMovie />
      </div>

      <div className='movie-id-index-right'>
        <div className="info-movie">
          <h1>{movie.title}</h1>
          <h2>{movie.originalTitle}</h2>

          <InfoMovieTable
            id={movie.id}
            score={movie.score}
            rank={movie.rank}
            popularity={movie.popularity}
            year={movie.year}
            tags={movie.tags}
          />
        </div>

        <p>{movie.description}</p>

        <div className="cast-div">
          <h3>Cast</h3>
          <hr />
          <CastTag cast={movie.cast} />
        </div>
      </div>
    </div>
  )
}