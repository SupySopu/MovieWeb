import { createFileRoute } from '@tanstack/react-router'
import HomeAddBtn from '../components/HomeAddBtn/HomeAddBtn'
import Moviecard from '../components/MovieCard/Moviecard'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="home">
      <h1>Search for any <span>movie</span>!</h1>
      <p>In this website you can search for information about any movie you want to see</p>
      <HomeAddBtn/>
      <Moviecard />
    </div>
  )
}