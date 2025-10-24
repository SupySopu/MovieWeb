import FilterGenre from '../FilterGenre/FilterGenre'
import {Input } from '@headlessui/react'
import FilterType from '../FilterType/FilterType'
import OrderSearchbar from '../OrderSearchbar/OrderSearchbar'

export default function Searchbar() {
  return (
    <div className="search-bar">
        <Input className="input-search-bar" name="search" type="text" placeholder='Enter a movie...'></Input>
        <FilterGenre />
        <OrderSearchbar />
        <FilterType />
    </div>
  )
}
