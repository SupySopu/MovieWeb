import { createFileRoute } from '@tanstack/react-router'
import InfoMovieTable from '../../../components/InfoMovieTable/InfoMovieTable'
import { Button } from '@headlessui/react'
import CastTag from '../../../components/CastTag/CastTag'

export const Route = createFileRoute('/movie/$movieId/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='movie-id-index'>
      <div className='img-movie'>

      </div>
      <div className='info-movie'>
        <h1>Untitled: Ultimate Random Movie</h1>
        <h2>Real Name of Random Movie</h2>
        <InfoMovieTable
          id={1}
          score={7.8}
          rank="#1234"
          popularity="#5678"
          year="2024"
          tags={["Tag", "Medium Tag", "Looong Tag"]}
        />
      </div>

      <div className='info-description'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor id massa ut convallis. Phasellus ac nulla dictum, convallis dolor et, pellentesque urna. Vivamus vel nibh lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere. </p> 
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor id massa ut convallis. Phasellus ac nulla dictum, convallis dolor et, pellentesque urna. Vivamus vel nibh lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere...</p>
      </div>

      <div>
        <h3>Cast</h3>
        <hr />
          <CastTag 
            cast={[
              "Example Tag", 
              "Example Loooooooooooooong Tag", 
              "Example Tag", 
              "Example Loooooooooooooong Tag"
            ]}
          />
      </div>
    </div>
  )
}
