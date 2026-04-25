import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import ReactPaginate from 'react-paginate';
import { useFetchApiMovies } from '../hooks/api/useFetchApiMovies';
import { useFetchLocalMovies } from '../hooks/local/useFetchLocalMovies';
import MovieCardContainer from '../components/MovieCardContainer/MovieCardContainer';

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {

  // Pagination state + handler
  const [ page, setPage ] = useState(1);

  const handlePageClick = (event: {selected: number}) => {
    setPage(event.selected + 1)
  }

  // Fetch api and local of movies
  const { data: apiMovies } = useFetchApiMovies(page);
  const { data: localMovies } = useFetchLocalMovies();

  return (
    <div className='home'>

      <MovieCardContainer 
        apiMovies={apiMovies?.results ?? []}
        localMovies={localMovies ?? []}
      />

      <div className='pagination'>
        <ReactPaginate 
          className='paginationItems'
          previousLabel="< Previous"
          nextLabel="Next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={apiMovies?.total_pages ? 10 : 0}
          pageClassName='pageItem'
          pageLinkClassName='pageLink'
          previousClassName='pageItem'
          previousLinkClassName='pageLink'
          nextClassName='pageItem'
          nextLinkClassName='pageLink'
          breakLabel="..."
          breakClassName='pageItem'
          breakLinkClassName='pageLink'
          containerClassName='pagination'
          activeClassName='active'
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  )
}
