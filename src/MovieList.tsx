import React from 'react';
import List from './SearchNames';
import './MovieList.css';

export type JSONMovie = 
{
    Poster: string,
    Year: string,
    Title: string
};

const MovieList = (props: { movies: JSONMovie[] }) => {
	
	return (
		<div className='moviesList'>
			{props.movies.map((movie, index: number) => (
				<div className='Movie'>
					<img src={movie.Poster} alt='movie'></img>
					<div className='MovieCreds'>
						<div>Title: {movie.Title}</div>
						<div>Year: {movie.Year}</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default MovieList;