import { Input, Label, Field, Button } from '@headlessui/react';
import { useFormik } from 'formik';
import { useState } from 'react';

export default function AddMovieForm() {
    const [tagInput, setTagInput] = useState('');
    const [castInput, setCastInput] = useState('');

    const formik = useFormik({
        initialValues: {
            title: '',
            originalTitle: '',
            lang: '',
            author: '',
            releaseDate: '',
            tags: [] as string[],
            synopsis: '',
            cast: [] as string[]
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    })

    const addTag = () => {
        if (tagInput.trim() !== '' && !formik.values.tags.includes(tagInput.trim())) {
        formik.setFieldValue('tags', [...formik.values.tags, tagInput.trim()]);
        setTagInput('');
        }
    };

    const removeTag = (tag: string) => {
        formik.setFieldValue(
        'tags',
        formik.values.tags.filter(t => t !== tag)
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
        <form className='form-add-movie'>
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
                    <Label htmlFor='originalTitle'>Original Title</Label>
                    <Input
                        id="originalTitle"
                        name="originalTitle"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.originalTitle}
                        placeholder='Input your original title here...'
                    />
                </Field>

                <Field className='label-input-container'>
                    <Label htmlFor='lang'>Language</Label>
                    <Input
                        id="lang"
                        name="lang"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.lang}
                    />
                </Field>
            </div>

                <Field className='label-input-container'>
                    <Label htmlFor='author'>Author</Label>
                    <Input
                        id="author"
                        name="author"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.author}
                    />
                </Field>

                <Field className='label-input-container'>
                    <Label htmlFor='releaseDate'>Release Date</Label>
                    <Input
                        id="releaseDate"
                        name="releaseDate"
                        type="date"
                        onChange={formik.handleChange}
                        value={formik.values.releaseDate}
                    />
                </Field>

                <Field className='label-input-container'>
                    <Label htmlFor='releaseDate'>Release Date</Label>
                    <Input
                        id="releaseDate"
                        name="releaseDate"
                        type="date"
                        onChange={formik.handleChange}
                        value={formik.values.releaseDate}
                    />
                </Field>

            <Field className='label-input-container'>
                <Label htmlFor='tags'>Tags</Label>
                <Input 
                    id="tags"
                    name="tags"
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                />
                <Button type="button" className='tag-btn' onClick={addTag}>Agregar</Button>

                <div className="tags-container">
                    {formik.values.tags.map((tag, id) => (
                        <Button 
                        type="button" 
                        key={id} 
                        className="tag-btn"
                        onClick={() => removeTag(tag)}
                        >
                        {tag} x
                        </Button>
                    ))}
                </div>
            </Field>

            <Field className='label-input-container'>
                <Label htmlFor='cast'>Cast</Label>
                <Input 
                    id="cast"
                    name="cast"
                    type="text"
                    value={castInput}
                    onChange={(e) => setCastInput(e.target.value)}
                />
                <Button type="button" className='cast-btn' onClick={addCast}>Agregar</Button>

                <div className="cast-container">
                    {formik.values.cast.map((cast, id) => (
                        <Button 
                        type="button" 
                        key={id} 
                        className="cast-btn"
                        onClick={() => removeCast(cast)}
                        >
                        {cast} x
                        </Button>
                    ))}
                </div>
            </Field>
            <button type="submit">Submit</button>
        </form>
    )
}