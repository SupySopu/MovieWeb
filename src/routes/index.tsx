import { createFileRoute } from '@tanstack/react-router'
import HomeAddBtn from '../components/HomeAddBtn/HomeAddBtn'
import Moviecard from '../components/MovieCard/Moviecard'
import Searchbar from '../components/Searchbar/Searchbar'
import computer from "../assets/computer.png"
import NewReleasesCard from '../components/NewReleasesCard/NewReleasesCard'
import Pagination from '../components/Pagination/Pagination'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
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
      
      <div className="search">
        <Searchbar/>
        <div className="container-movies">
          <Moviecard />
          <Moviecard />
          <Moviecard />
          <Moviecard />
          <Moviecard />
          <Moviecard />
          <Moviecard />
          <Moviecard />
        </div>
        <Pagination />
      </div>

      <div className='new-releases'>
        <h1>New Releases</h1>
        <div className='new-releases-card-container'>
          <NewReleasesCard />
          <NewReleasesCard />
          <NewReleasesCard />
        </div>
      </div>
    </div>
  )
}