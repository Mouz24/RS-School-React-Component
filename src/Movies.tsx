import React from 'react';
import MoviesList from './MoviesConfig'
import MovieList, { JSONMovie } from './MovieList';
import './MovieList';
import List from './SearchNames';
import SearchNames from './SearchNames';
import Header from './Header'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Link, Outlet, Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUs';
import NotFound from './NotFound';

const movieToSearch: string | null = localStorage.getItem('Input');
localStorage.clear();

class Movies extends React.Component<{}, { Movies: JSONMovie[]}> {
    constructor(props: JSONMovie[]) {
        super(props)
        this.state = {
           Movies: [
            {
                "Title" : "The Avengers",
                "Year" : "2012",
                "Poster" : "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
            },
            {
                "Title" : "Star Wars: Episode IV - A New Hope",
                "Year" : "1977",
                "Poster" : "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
            },
            {
                "Title" : "Spider Man: Lost Cause",
                "Year" : "2014",
                "Poster" : "https://m.media-amazon.com/images/M/MV5BYmZkYWRlNWQtOGY0Zi00MWZkLWJiZTktNjRjMDY4MTU2YzAyXkEyXkFqcGdeQXVyMzYzNzc1NjY@._V1_SX300.jpg"
            },
            {
                "Title" : "Fast & Furious",
                "Year" : "2009",
                "Poster" : "https://m.media-amazon.com/images/M/MV5BYjQ1ZTMxNzgtZDcxOC00NWY5LTk3ZjAtYzRhMDhlNDZlOWEzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
            },
        ]
        }
      }

    render() {
    return (
        <>
            <Header/>
            <SearchNames names ={this.state.Movies} />
            <div>
            <Outlet/>
            </div>
        </>
  );
    }

};

export default Movies;