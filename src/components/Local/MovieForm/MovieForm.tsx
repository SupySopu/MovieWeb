import { useFetchApiGenre } from "../../../hooks/api/useFetchApiGenre"
import "./MovieForm.scss"
import { Button, Field, Fieldset, Input, Label, Legend, Textarea } from "@headlessui/react";
import FilterGenre from "../../FilterGenre/FilterGenre";
import { useMovieForm } from "../../../hooks/local/useMovieForm";

export default function MovieForm() {

    const { formik, castInput, setCastInput, handleGenresTagChange, handleGenreTagRemove, handleCastInput, handleCastRemove} = useMovieForm();

    // fetch genres
    const data = useFetchApiGenre();

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
                        handleGenresChange={ handleGenresTagChange }
                    />

                    <div className="tagsContainer">
                        {formik.values.genres.map((genre) => (
                            <Button
                                key={genre.id}
                                type="button"
                                className="tagItem"
                                onClick={() => handleGenreTagRemove(genre.id)}
                            >
                                {genre.name} X
                            </Button>
                        ))}
                    </div>
                </Field>

                <Field className="labelInputContainer">
                    <div className="inputSearchContainer">
                        <Label>Cast</Label>
                        <Input 
                            id="cast"
                            name="cast"
                            type="text"
                            value={castInput}
                            onChange={(e) => setCastInput(e.target.value)}
                        />
                        <Button type="button" className="castBtn" onClick={handleCastInput}>X</Button>
                    </div>

                    <div className="castContainer">
                        {formik.values.cast.map(( cast, id ) => (
                            <Button
                                id="castItem"
                                key={id}
                                type="button"
                                className="castItem"
                                onClick={() => handleCastRemove(cast)}
                            >{cast} X</Button>
                        ))}
                    </div>
                </Field>
            </Fieldset>

            <Button type="submit" className="submitBtn">Submit</Button>
        </form>
    )
}