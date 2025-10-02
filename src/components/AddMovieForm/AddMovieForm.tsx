import { useFormik } from 'formik';

export default function AddMovieForm() {

    const formik = useFormik({
        initialValues: {
            title: '',
            originalTitle: '',
            lang: '',
            author: '',
            releaseDate: '',
            tags: [],
            synopsis: '',
            cast: []
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    })

    return (
        <form>
            <label htmlFor='title'>Title</label>
            <input 
                id="title"
                name="title"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.title}
                placeholder='Input your tile here...'
            />

            <label htmlFor='originalTitle'>Original Title</label>
            <input 
                id="originalTitle"
                name="originalTitle"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.originalTitle}
                placeholder='Input your original tile here...'
            />

            <label htmlFor='lang'>Language</label>
            <input 
                id="lang"
                name="lang"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lang}
            />

            <label htmlFor='releaseDate'>Release Date</label>
            <input 
                id="releaseDate"
                name="releaseDate"
                type="date"
                onChange={formik.handleChange}
                value={formik.values.releaseDate}
            />

            <label htmlFor='releaseDate'>Release Date</label>
            <input 
                id="releaseDate"
                name="releaseDate"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.releaseDate}
            />

            <button type="submit">Submit</button>
        </form>
    )
}
