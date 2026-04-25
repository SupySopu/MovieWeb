import React, { useState } from "react";
import { useFetchApiGenre } from "../../hooks/api/useFetchApiGenre";
import { useApiMoviesStore } from "../../stores/api/apiMoviesStore"
import "./SearchBar.scss"
import type { Genres } from "../../types/Movie";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Select } from "@headlessui/react";

export default function SearchBar() {

    // Opciones de los dropdowns
    const orderOptions = [
        {value: "popularity.desc", label:"Most Popular"},
        {value: "popularity.asc", label:"Least Popular"},
        {value: "title.desc", label:"A - Z"},
        {value: "title.asc", label:"Z - A"}
    ]

    const filterOptions = [
        {value: "api", label:"API"},
        {value: "local", label:"Community"}
    ]

    // States + Fetch
    const { params, set, type } = useApiMoviesStore();
    const data = useFetchApiGenre();
    const [ selectedOrder, setSelectedOrder ] = useState(orderOptions[0]);

    //handles
    //handle del searchbar, detecta el input
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        set({ params: { ...params, q: e.target.value } });
    };

    //handle del tipo de pelicula (local / api) y cambia el container
    const handleTypeChange = (value: string) => {
        set({ type: value });
    };

    //handle del orden de las peliculas
    const handleSortChange = (option: { value: string; label: string; }) => {
        set({ params: { ...params, sort_by: option.value } });
        setSelectedOrder(option);
    };

    const handleGenresChange = (option: Genres) => {
        set({ params: { ...params, with_genres: option.id } })
    }

    return (
        <div className="searchBar">
            <input
                className="inputSearchBar"
                name="search"
                type="text"
                placeholder="Enter a movie title..."
                onChange={handleSearchChange}
                value={params.q || ""}
            />

            <Listbox value={selectedOrder} onChange={handleSortChange} as="div" className="filterOrder">
                <ListboxButton className="filterOrderBtn">
                    {selectedOrder.label}
                </ListboxButton>
            

                <ListboxOptions anchor="bottom" className="filterOrderOptions">
                    {orderOptions.map((option) => (
                        <ListboxOption key={option.value} value={option}>
                            {( {focus} ) => (
                                <div className={`filterOrderOption ${ focus ? "focus" : "" }`}>
                                    {option.label}
                                </div>
                            )}
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </Listbox>

            <Select 
                value={type} 
                onChange={(e) => handleTypeChange(e.target.value)} 
                className="filterTypeInput"
            >
                {filterOptions.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </Select>
        </div>
    )
}
