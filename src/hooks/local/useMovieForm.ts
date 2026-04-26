import { useFormik } from "formik";
import type { Genres } from "../../types/Movie";
import { useCreateLocalMovie } from "./useCreateLocalMovie";
import { useState } from "react";
import { useFetchApiGenre } from "../api/useFetchApiGenre";

interface MovieForm {
    title: string,
    original_title: string,
    original_language: string,
    release_date: string,
    poster_path: string,
    overview: string,
    genres: Genres[],
    cast: string[],
}

export const useMovieForm = () => {
    // mutate to create movie
    const mutation = useCreateLocalMovie();

    const [castInput, setCastInput] = useState("");

    const formik = useFormik<MovieForm>({
        initialValues: {
            title: "",
            original_title: "",
            original_language:"",
            release_date: "",
            poster_path: "",
            overview: "",
            genres: [],
            cast: [],
        },

        onSubmit: (values) => {
            mutation.mutate(values);
            if ( !values.poster_path ){
                values.poster_path = "";
            }
        }
    })

    // Genres handlers
    const handleGenresTagChange = ( selected: Genres ) => {
        if ( !formik.values.genres.some(g => g.id === selected.id) ){
            formik.setFieldValue("genres", [...formik.values.genres, selected])
        }
    }

    const handleGenreTagRemove = ( id: number ) => {
        formik.setFieldValue("genres", formik.values.genres.filter(g => g.id !== id))
    }

    // Cast handlers

    const handleCastInput = () => {
        const value = castInput.trim();
        if (value !== '' && !formik.values.cast.includes(value)) {
            formik.setFieldValue('cast', [...formik.values.cast, value]);
            setCastInput('');
        }
    }

    const handleCastRemove = (cast: string) => {
        formik.setFieldValue("cast", formik.values.cast.filter(c => c !== cast));
    }

    return {
        formik,
        castInput,
        setCastInput,
        handleGenresTagChange,
        handleGenreTagRemove,
        handleCastInput,
        handleCastRemove,
    };
}


