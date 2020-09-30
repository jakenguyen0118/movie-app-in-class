import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Components/Form';
import MovieInfo from './Components/MovieInfo';

function App() {

  const [movieData, setMovieData] = useState({})

  const getMovie = title => {
	fetch(`http://www.omdbapi.com/?t=${title}&apikey=af739194`)
	.then((response) => response.json())
	.then((data) => {
		console.log(data)
		setMovieData(data)
	})
  }

  useEffect(() => {
	getMovie('Her')
  }, [])
  
  const handleSubmit = (title) => {
	  console.log('search for movie')
	getMovie(title)
  }
  
	return (
		<div className='App'>
			<Form handleSubmit={handleSubmit} />
			<MovieInfo movieData={movieData} />
		</div>
	)
}

export default App;