import React from 'react';

const MovieInfo = (props) => {
	const movie = props.movieData
	return (
		<div>
			<img src={movie.Poster} />
			<h1>Title: {movie.Title}</h1>
			<h2>Year: {movie.Year}</h2>
			<h3>Genre: {movie.Genre}</h3>
			<h4>Plot: {movie.Plot}</h4>
		</div>
	)
}

export default MovieInfo;
