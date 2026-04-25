import { useEffect, useState } from "react";
import type { Genres } from "../../types/Movie"
import "./FilterGenre.scss"
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from "@headlessui/react";

interface FilterGenreProps {
    genresList: Genres[];
    handleGenresChange: (option: Genres) => void;
}

export default function FilterGenre({ genresList, handleGenresChange }: FilterGenreProps) {
    const [query, setQuery] = useState("");
    const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null)

    const filteredGenre = 
        query === ""
        ? genresList
        : genresList.filter((genre) => {
            return genre.name.toLowerCase().includes(query.toLowerCase())
        })

    useEffect( () => {
        if (selectedGenre) { 
            handleGenresChange(selectedGenre)
        }
    }, [selectedGenre])

    return (
        <Combobox 
            as="div" 
            value={selectedGenre}
            onChange={setSelectedGenre}
            onClose={() => setQuery("")}
        >
            <ComboboxInput 
                aria-label="Genres"
                displayValue={( genre: Genres | null ) => genre?.name ?? "" }
                placeholder="Genre"
                onChange={(event) => setQuery(event.target.value)}
            />
            <ComboboxOptions anchor="bottom" className="filterGenreOptions">
                {filteredGenre.map(( genre ) => (
                    <ComboboxOption key={genre.id} value={genre} className="filterGenreOption">
                        {genre.name}
                    </ComboboxOption>
                ))}
            </ComboboxOptions>
        </Combobox>
    )
}
