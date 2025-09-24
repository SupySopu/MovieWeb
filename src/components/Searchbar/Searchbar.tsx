import React from 'react'
import Example from '../FilterBtn/FilterBtn'

export default function Searchbar() {
  return (
    <div className="search-bar">
        <Example/>
        <input placeholder='Enter a movie...'></input>
        <button className="enter-btn">Enter</button>
    </div>
  )
}
