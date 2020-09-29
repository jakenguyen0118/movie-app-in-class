import React, {useState} from "react"

const Form = (props) => {

    const [movieTitle, setMovieTitle] = useState("")

    const handleSubmit = event => {
        console.log('handleSubmit clicked')
        event.preventDefault()
        props.handleSubmit(movieTitle)
        setMovieTitle("")
    }

    const handleChange = event => {
        console.log('handeChange clicked')
        const title = event.target.value
        setMovieTitle(title)
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor='movieTitle'>Title</label>
            <input
                id='movieTitle'
                type="text"
                value={movieTitle}
                onChange={handleChange}
                />
            <input
                type="submit"
                value='Find Movie Info'
                />
        </form>
        </>
    )
}

export default Form