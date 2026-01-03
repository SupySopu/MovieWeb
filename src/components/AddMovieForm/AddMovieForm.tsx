import { Input, Label, Field, Button, Textarea } from '@headlessui/react';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useCreateFilm } from '../../hooks/useCreateFilm';
import FilterGenre from '../FilterGenre/FilterGenre';
import { useFetchGenre } from '../../hooks/useFetchGenre';
import type { Genres } from '../../types/Movie';

interface MovieForm {
  title: string;
  original_title: string;
  original_language: string;
  release_date: string;
  poster_path: string;
  genres: Genres[];
  overview: string;
  cast: string[];
}

export default function AddMovieForm() {
    const [castInput, setCastInput] = useState('');

    const data = useFetchGenre();

    const mutation = useCreateFilm();

    const formik = useFormik<MovieForm>({
        initialValues: {
            title: '',
            original_title: '',
            original_language: '',
            release_date: '',
            poster_path: '',
            genres: [],
            overview: '',
            cast: []
        },
        // Hacer validacion(toast o vista Home) para el user y que se conecte con el onSuccess
        onSubmit: (values) => {
            mutation.mutate(values);
            if (!values.poster_path) {
                values.poster_path = "";
            }
        }
    })

    const handleGenresChange = (selected: Genres) => {
        if (!formik.values.genres.some(g => g.id === selected.id)) {
            formik.setFieldValue("genres", [...formik.values.genres, selected]);
        }
    };

    const removeTag = (id: number) => {
        formik.setFieldValue(
            'genres',
            formik.values.genres.filter((g) => g.id !== id)
        );
    };

    const addCast = () => {
        if (castInput.trim() !== '' && !formik.values.cast.includes(castInput.trim())) {
        formik.setFieldValue('cast', [...formik.values.cast, castInput.trim()]);
        setCastInput('');
        }
    };

    const removeCast = (cast: string) => {
        formik.setFieldValue(
        'cast',
        formik.values.cast.filter(c => c !== cast)
        );
    };

    return (
        <form className="form-add-movie" onSubmit={formik.handleSubmit}>

            <Field className='label-input-container'>
                <Label htmlFor='title'>Title</Label>
                <Input
                    id="title"
                    name="title"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    placeholder='Input your tile here...'
                />
            </Field>

            <div className='og-title-lang-container'>
                <Field className='label-input-container'>
                    <Label htmlFor='original_title'>Original Title</Label>
                    <Input
                        id="original_title"
                        name="original_title"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.original_title}
                        placeholder='Input your original title here...'
                    />
                </Field>

                <Field className='label-input-container'>
                    <Label htmlFor='original_language'>original_languageuage</Label>
                    <Input
                        id="original_language"
                        name="original_language"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.original_language}
                    />
                </Field>
            </div>

                <Field className='label-input-container'>
                    <Label htmlFor='release_date'>Release Date</Label>
                    <Input
                        id="release_date"
                        name="release_date"
                        type="date"
                        onChange={formik.handleChange}
                        value={formik.values.release_date}
                    />
                </Field>

                <Field className='label-input-container'>
                    <Label htmlFor='overview'>Synopsis</Label>
                    <Textarea
                        id="overview"
                        name="overview"
                        onChange={formik.handleChange}
                        value={formik.values.overview}
                        placeholder='Input your overview here...'
                    />
                </Field>

            <Field className='label-input-container'>
                <Field className='label-input-container'>
                    <Label htmlFor='genres'>Genres</Label>

                    <FilterGenre
                        genresList={data?.genres ?? []}
                        handleGenresChange={handleGenresChange}
                    />

                    <div className="tags-container">
                    {formik.values.genres.map((genre) => (
                        <Button
                        type="button"
                        key={genre.id}
                        className="tag-item"
                        onClick={() => removeTag(genre.id)}
                        >
                        {genre.name} ×
                        </Button>
                    ))}
                    </div>

                </Field>
            </Field>

            <Field className='label-input-container'>
                <div className="input-search-container">
                <Label htmlFor='cast'>Cast</Label>
                <Input 
                    id="cast"
                    name="cast"
                    className=""
                    type="text"
                    value={castInput}
                    onChange={(e) => setCastInput(e.target.value)}
                />
                <Button type="button" className='cast-btn'onClick={addCast}>X</Button>
                </div>

                    
                <div className="cast-container">
                    {formik.values.cast.map((cast, id) => (
                        <Button 
                            id="cast-item"
                            type="button" 
                            key={id} 
                            className="cast-item"
                            onClick={() => removeCast(cast)}
                            >
                            {cast} x
                        </Button>   
                    ))}
                </div>
            </Field>

            <Button type="submit" className="submit-btn">Submit</Button>
        </form>
    )
}