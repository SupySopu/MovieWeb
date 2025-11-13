import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import { useState } from 'react';
import type { Genres } from "../../types/Movie";

// Hacer fetch a la api con los generos
// Dejarlo como componente

interface GenresListProps {
  genresList: Genres[]
}

export default function FilterGenre({genresList}: GenresListProps) {
  const [genre, setGenre] = useState(genresList)
  const [query, setQuery] = useState('')

  const filteredGenre =
    query === ''
      ? genre
      : genre.filter((genre) => {
          return genre.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
      <Combobox as="div" value={selectedGenre} className="filter-genre" onChange={() => setSelectedGenre()} onClose={() => setQuery('')}>
        <ComboboxInput
          aria-label="Genres"
          displayValue={(genre) => genre?.name ?? ""}
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