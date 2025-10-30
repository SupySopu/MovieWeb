import { createFileRoute } from '@tanstack/react-router'
import HomeAddBtn from '../components/HomeAddBtn/HomeAddBtn'
import Moviecard from '../components/MovieCard/Moviecard'
import Searchbar from '../components/Searchbar/Searchbar'
import computer from "../assets/computer.png"
import NewReleasesCard from '../components/NewReleasesCard/NewReleasesCard'
import Pagination from '../components/Pagination/Pagination'
import { useFetchMovies } from '../hooks/useFetchMovies'
import { useMoviesStore } from '../stores/movieStore'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const {movies} = useMoviesStore()
  const {isLoading} = useFetchMovies()

  return (
    <div className="home">
      <div className="start">
        
        <div className='text-container'>
          <h1>Search for any <span>movie</span>!</h1>
          <p>In this website you can search for information about any movie you want to see</p>
          <HomeAddBtn/>
        </div>

        <div className="img-container">
          <img src={computer} />
        </div>
        
      </div>

      <div className='new-releases'>
        <h1>New Releases</h1>
        <div className='new-releases-card-container'>
          <NewReleasesCard />
          <NewReleasesCard />
          <NewReleasesCard />
        </div>
      </div>
      
      <div className="search">
        <h1>Search for any movie</h1>
        <Searchbar/>
        <div className="container-movies">
          {movies.length > 0 ? (
            movies.map((movies) => (
            <Moviecard
              key={movies.id}
              id={movies.id}
              title={movies.title}
              vote_average={movies.vote_average}
              poster_path={movies.backdrop_path}
            />
          ))) : (
            <h3>0 movies found</h3>
          )}
        </div>
        <Pagination />
      </div>
    </div>
  )
}