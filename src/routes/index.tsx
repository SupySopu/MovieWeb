import { createFileRoute } from '@tanstack/react-router'
import HomeAddBtn from '../components/HomeAddBtn/HomeAddBtn'
import Moviecard from '../components/MovieCard/Moviecard'
import Searchbar from '../components/Searchbar/Searchbar'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="home">
      <div className="start">
        <h1>Search for any <span>movie</span>!</h1>
        <p>In this website you can search for information about any movie you want to see</p>
        <HomeAddBtn/>
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
      </div>
    </div>
  )
}