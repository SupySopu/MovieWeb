import { Input, Label, Field, Button, Textarea } from '@headlessui/react';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useCreateFilm } from '../../hooks/useCreateFilm';

export default function AddMovieForm() {
    const [tagInput, setTagInput] = useState('');
    const [castInput, setCastInput] = useState('');

    const mutation = useCreateFilm();

    const formik = useFormik({
        initialValues: {
            title: '',
            original_title: '',
            original_language: '',
            release_date: '',
            genres: [],
            overview: '',
            cast: []
        },
        onSubmit: (values) => {
            mutation.mutate(values);
        }
    })

    const addTag = () => {
        if (tagInput.trim() !== '' && !formik.values.genres.includes(tagInput.trim())) {
        formik.setFieldValue('genres', [...formik.values.genres, tagInput.trim()]);
        setTagInput('');
        }
    };

    const removeTag = (tag: string) => {
        formik.setFieldValue(
        'genres',
        formik.values.genres.filter(t => t !== tag)
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
                <div className="input-search-container">
                <Label htmlFor='genres'>Tags</Label>
                <Input 
                    id="genres"
                    name="genres"
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                />
                <Button type="button" className='tag-btn' onClick={addTag}>X</Button>
                </div>

                <div className="tags-container">
                    {formik.values.genres.map((tag, id) => (
                        <Button 
                        type="button" 
                        key={id} 
                        className="tag-item"
                        onClick={() => removeTag(tag)}
                        >
                        {tag} x
                        </Button>
                    ))}
                </div>
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
                <Button type="button" className='cast-btn' onClick={addCast}>X</Button>
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