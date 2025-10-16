import { Input, Label, Field, Button, Textarea } from '@headlessui/react';
import { useFormik } from 'formik';
import { useState } from 'react';

export default function EditMovieForm() {
    const [tagInput, setTagInput] = useState('');
    const [castInput, setCastInput] = useState('');

    const formik = useFormik({
        initialValues: {
            title: 'Random Movie',
            originalTitle: 'Random Movie OG Title',
            lang: 'Es',
            author: 'Random Author',
            releaseDate: '24-05-1999',
            tags: ["tag", "looooong tag", "tag tag"] as string[],
            synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et arcu magna. Aenean non metus fermentum, volutpat mi sed, posuere eros. Pellentesque luctus facilisis lectus sit amet imperdiet. ',
            cast: ["actor1", "actor2", "actor3"] as string[]
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
                        placeholder="Input your author here..."
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
                    <Label htmlFor='synopsis'>Synopsis</Label>
                    <Textarea
                        id="synopsis"
                        name="synopsis"
                        onChange={formik.handleChange}
                        value={formik.values.synopsis}
                        placeholder='Input your synopsis here...'
                    />
                </Field>

            <Field className='label-input-container'>
                <div className="input-search-container">
                <Label htmlFor='tags'>Tags</Label>
                <Input 
                    id="tags"
                    name="tags"
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    placeholder='Input the tags...'
                />
                <Button type="button" className='tag-btn' onClick={addTag}>X</Button>
                </div>

                <div className="tags-container">
                    {formik.values.tags.map((tag, id) => (
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
                    placeholder='Input the cast...'
                />
                <Button type="button" className='cast-btn' onClick={addCast}>X</Button>
                </div>

                    
                <div className="cast-container">
                    {formik.values.cast.map((cast, id) => (
                        <Button 
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