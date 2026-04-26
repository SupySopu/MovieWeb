import { useFormik } from "formik";
import { useFetchApiGenre } from "../../../hooks/api/useFetchApiGenre"
import { useCreateLocalMovie } from "../../../hooks/local/useCreateLocalMovie";
import "./MovieForm.scss"
import type { Genres } from "../../../types/Movie";
import { Button, Field, Fieldset, Input, Label, Legend, Textarea } from "@headlessui/react";
import FilterGenre from "../../FilterGenre/FilterGenre";

interface MovieForm {
    title: string,
    original_title: string,
    original_language: string,
    release_date: string,
    poster_path: string,
    overview: string,
    genres: Genres[],
}

export default function MovieForm() {
    // fetch genres
    const data = useFetchApiGenre();
    // mutate to create movie
    const mutation = useCreateLocalMovie();

    // initial values Formik
    const formik = useFormik<MovieForm>({
        initialValues: {
            title: "",
            original_title: "",
            original_language:"",
            release_date: "",
            poster_path: "",
            overview: "",
            genres: []
        },

        onSubmit: (values) => {
            mutation.mutate(values);
            if ( !values.poster_path ){
                values.poster_path = "";
            }
        }
    })

    // Genres handlers
    const handleGenresChange = ( selected: Genres ) => {
        if ( !formik.values.genres.some(g => g.id === selected.id) ){
            formik.setFieldValue("genres", [...formik.values.genres, selected])
        }
    }

    const handleGenreRemove = ( id: number ) => {
        formik.setFieldValue("genres", formik.values.genres.filter(g => g.id !== id))
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <Fieldset className="formAddMovie" >
                <Legend>Create your own movie in our Database!</Legend>
                <Field className="labelInputContainer">
                    <Label>Title</Label>
                    <Input
                        id="title"
                        name="title"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.title}
                        placeholder="Input your title here..."
                    />
                </Field>

                <Field className="labelInputContainer">
                    <Label>Original Title</Label>
                    <Input
                        id="original_title"
                        name="original_title"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.original_title}
                        placeholder="Input the original title here..."
                    />
                </Field>

                <Field className="labelInputContainer">
                    <Label>Original Language</Label>
                    <Input
                        id="original_language"
                        name="original_language"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.original_language}
                        placeholder="Input the original language here..."
                    />
                </Field>

                <Field className="labelInputContainer">
                    <Label>Synopsis</Label>
                    <Textarea
                        id="overview"
                        name="overview"
                        onChange={formik.handleChange}
                        value={formik.values.overview}
                        placeholder="Input the synopsis here..."
                    />
                </Field>

                <Field>
                    <Label>Genres</Label>

                    <FilterGenre 
                        genresList={data?.genres ?? []}
                        handleGenresChange={handleGenresChange}
                    />

                    <div className="tagsContainer">
                        {formik.values.genres.map((genre) => (
                            <Button
                                key={genre.id}
                                type="button"
                                className="tagItem"
                                onClick={() => handleGenreRemove(genre.id)}
                            >
                                {genre.name} X
                            </Button>
                        ))}
                    </div>
                </Field>
            </Fieldset>

            <Button type="submit" className="submitBtn">Submit</Button>
        </form>
    )
}