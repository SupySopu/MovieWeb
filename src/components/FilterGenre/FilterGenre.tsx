import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import { useState } from 'react'

const genre = [
  { id: 1, label: 'Fiction' },
  { id: 2, label: 'Documentary' },
  { id: 3, label: 'Romance' },
  { id: 4, label: 'Comedy' },
]

export default function FilterGenre() {
  const [selectedGenre, setSelectedGenre] = useState(genre[0])
  const [query, setQuery] = useState('')

  const filteredGenre =
    query === ''
      ? genre
      : genre.filter((genre) => {
          return genre.label.toLowerCase().includes(query.toLowerCase())
        })

  return (
      <Combobox as="div" value={selectedGenre} className="filter-genre" onChange={() => setSelectedGenre()} onClose={() => setQuery('')}>
        <ComboboxInput
          aria-label="Genres"
          displayValue={(genre) => genre?.label ?? ""}
          placeholder="Genre"
          onChange={(event) => setQuery(event.target.value)}
        />
        <ComboboxOptions anchor="bottom" className="filter-genre-options">
          {filteredGenre.map((genre) => (
            <ComboboxOption key={genre.id} value={genre} className="filter-genre-option">
              {genre.label}
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
  )
}