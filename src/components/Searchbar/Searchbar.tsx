import FilterAlphabet from '../FilterAlphabet/FilterAlphabet'
import FilterGenre from '../FilterGenre/FilterGenre'
import {Input } from '@headlessui/react'
import FilterRating from '../FilterRating/FilterRating'
import FilterType from '../FilterType/FilterType'

export default function Searchbar() {
  return (
    <div className="search-bar">
        <Input className="input-search-bar" name="search" type="text" placeholder='Enter a movie...'></Input>
        <FilterGenre />
        <FilterAlphabet/>
        <FilterRating />
        <FilterType />
    </div>
  )
}
