// import FilterGenre from '../FilterGenre/FilterGenre'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Select } from '@headlessui/react'
import { useMoviesStore } from '../../stores/moviesStore'
import { useState } from 'react'
import FilterGenre from '../FilterGenre/FilterGenre'
import { useFetchGenre } from '../../hooks/useFetchGenre'
import type { Genres } from '../../types/Movie'
import "./Searchbar.scss";

const orderOptions = [
  {value: "popularity.desc", label: "Most Popular"},
  {value: "popularity.asc", label: "Least Popular"},
  {value: "title.desc", label: "A - Z"},
  {value: "title.asc", label: "Z - A"}
]

const filterOptions = [
  {value: "api", label:"API"},
  {value: "local", label:"Community"}
]

export default function Searchbar() {
  const { params, set } = useMoviesStore()
  const data = useFetchGenre();
  const [ selectedOrder, setSelectedOrder] = useState(orderOptions[0])

  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    set({ params: { ...params, q: e.target.value } });
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

      <Listbox value={selectedOrder} onChange={handleSortChange} as="div" className="filter-order">
        <ListboxButton className="filter-order-button">
          {selectedOrder.label}
        </ListboxButton>

        <ListboxOptions anchor="bottom" className="filter-order-options">
          {orderOptions.map((option) => (
            <ListboxOption key={option.value} value={option}>
              {({ active }) => (
                <div className={`filter-order-option ${active ? "active" : ""}`}>
                  {option.label}
                </div>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>

      <Select name="status" className="filter-type-input" aria-label="Movie Type">
        {filterOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </div>
  )
}