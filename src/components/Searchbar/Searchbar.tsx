import Example from '../FilterBtn/FilterBtn'
import { Button } from '@headlessui/react'

export default function Searchbar() {
  return (
    <div className="search-bar">
        <Example/>
        <input placeholder='Enter a movie...'></input>
        <Button className="enter-btn">Enter</Button>
    </div>
  )
}
