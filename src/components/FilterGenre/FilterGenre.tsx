import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import { useEffect, useState } from 'react';
import type { Genres } from "../../types/Movie";

// Dejarlo como componente

// Pasar como prop la funcion
interface FilterGenreProps {
  genresList: Genres[];
  handleGenresChange: (option: Genres) => void;
}

export default function FilterGenre({genresList, handleGenresChange}: FilterGenreProps) {
  const [query, setQuery] = useState('')
  // seteado state
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null)
  
  const filteredGenre =
    query === ''
      ? genresList
      : genresList.filter((genre) => {
          return genre.name.toLowerCase().includes(query.toLowerCase())
        })

  // settear global
  useEffect(() => {
      if(selectedGenre){
        handleGenresChange(selectedGenre);
      }
  },[selectedGenre])

  return (
      <Combobox as="div" value={selectedGenre} className="filter-genre" onChange={setSelectedGenre} onClose={() => setQuery("")}>
        <ComboboxInput
          aria-label="Genres"
          displayValue={(genre: Genres | null) => genre?.name ?? ""}
          placeholder="Genre"
          onChange={(event) => setQuery(event.target.value)}
        />
        <ComboboxOptions anchor="bottom" className="filter-genre-options">
          {filteredGenre.map((genre) => (
            <ComboboxOption key={genre.id} value={genre} className="filter-genre-option">
              {genre.name}
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
  )
}