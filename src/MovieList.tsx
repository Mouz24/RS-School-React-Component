import './MovieList.css'
import React from 'react'

export interface JSONMovie {
  Poster: string
  Year: string
  Title: string
}

const MovieList: React.FC<JSONMovie[]> = (props: JSONMovie[]) => {
  return (
  <React.Fragment>
  <div className='moviesList'>
    {props.map((movie, index: number) => (
    <div className='Movie' key={index}>
    <img src={movie.Poster} alt='movie'></img>
    <div className='MovieCreds'>
      <div>Title: {movie.Title}</div>
      <div>Year: {movie.Year}</div>
    </div>
  </div>))}
  </div>
  </React.Fragment>
  )
}

export default MovieList
