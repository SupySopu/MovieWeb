// import FilterGenre from '../FilterGenre/FilterGenre'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import FilterType from '../FilterType/FilterType'
import { useMoviesStore } from '../../stores/moviesStore'
import { useState } from 'react'
import FilterGenre from '../FilterGenre/FilterGenre'
import { useFetchGenre } from '../../hooks/useFetchGenre'
import type { Genres } from '../../types/Movie'

const orderOptions = [
  {value: "popularity.desc", label: "Most Popular"},
  {value: "popularity.asc", label: "Least Popular"},
  {value: "title.desc", label: "A - Z"},
  {value: "title.asc", label: "Z - A"}
]

export default function Searchbar() {
  const { movies, params, set } = useMoviesStore()
  const data = useFetchGenre();
  const [ selectedOrder, setSelectedOrder] = useState(orderOptions[0])

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    set({ params: { ...params, q: event.target.value} });
  };

  const handleSortChange = (option: { value: string; label: string }) => {
    set({ params: { ...params, sort_by: option.value }})
    setSelectedOrder(option)
  }

  // handle para settear en el store el filtro
  const handleGenresChange = (option: Genres) => {
    set({ params: { ...params, with_genres: option.id }})
  }

  return (
    <div className="search-bar">
        <input 
          className="input-search-bar" 
          name="search" 
          type="text" 
          placeholder='Enter a movie...'
          onChange={handleSearchChange}
          value={params.q || ""}
        />

        <FilterGenre 
          genresList={data?.genres ?? []} 
          handleGenresChange={handleGenresChange}
        />

        <Listbox value={selectedOrder} onChange={handleSortChange}>
          <ListboxButton>{selectedOrder.label}</ListboxButton>
          <ListboxOptions anchor="bottom">
              {orderOptions.map((option) => (
                <ListboxOption key={option.value} value={option}>
                  {option.label}
                </ListboxOption>
              ))}
          </ListboxOptions>
        </Listbox>

        <FilterType />
    </div>
  )
}
