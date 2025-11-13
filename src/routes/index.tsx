import { createFileRoute } from '@tanstack/react-router'
import HomeAddBtn from '../components/HomeAddBtn/HomeAddBtn'
import Moviecard from '../components/MovieCard/Moviecard'
import Searchbar from '../components/Searchbar/Searchbar'
import computer from "../assets/computer.png"
import NewReleasesCard from '../components/NewReleasesCard/NewReleasesCard'
import { useFetchMovies } from '../hooks/useFetchMovies'
import { useMoviesStore } from '../stores/moviesStore'
import ReactPaginate from 'react-paginate'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const [page, setPage] = useState(1);
  const { movies } = useMoviesStore();
  const { data } = useFetchMovies(page);

  const handlePageClick = (event: { selected: number }) => {
    setPage(event.selected + 1);
  };

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
          {movies?.length > 0 ? (
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
        <div className='paginacion'>
          <ReactPaginate
            className='paginacion-items'
            previousLabel="< Previous"
            nextLabel="Next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={data?.total_pages ? 10 : 0}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </div>
  )
}