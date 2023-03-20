import JSONMovie from './MovieList'

type JSONMovie = 
{
    Poster: string,
    Year: string,
    Title: string
}

const Movies: JSONMovie[] = [
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
]

export default Movies;