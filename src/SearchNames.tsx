import data from "./MoviesConfig"
import './MovieList.css'
import { JSONMovie } from "./MovieList";
import React from "react";
import './Header.css'

interface Props {
    names: JSONMovie[];
  }
  
  interface State {
    searchName: string;
    filteredNames: JSONMovie[];
  }
  
  class SearchNames extends React.Component<Props, State> {
    constructor(props: Props) {
      super(props);
      this.state = {
        searchName: '',
        filteredNames: props.names,
      };
    }
  
    handleSearchNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const searchName = event.target.value;
      const filteredNames = this.props.names.filter(name =>
        name.Title.toLowerCase().includes(searchName.toLowerCase())
      );

      localStorage.setItem('Input' , searchName);
      
      this.setState({ searchName, filteredNames });
    };
  
    render() {
      return (
        <div>
            <div className="wrap">
                    <div className="search">
                        <input type="text" className="searchTerm" placeholder="What are you looking for?" onChange={this.handleSearchNameChange} value={this.state.searchName}/>
                            <button type="submit" className="searchButton">
                                <i className="fa fa-search"></i>
                            </button>
                    </div>
            </div>
          <ul>
            <div className="moviesList">
            {this.state.filteredNames.map(movie => (
              <div className='Movie'>
                <img src={movie.Poster} alt='movie'></img>
                <div className='MovieCreds'>
                    <div>Title: {movie.Title}</div>
                    <div>Year: {movie.Year}</div>
                </div>
                </div>
            ))}
            </div>
          </ul>
        </div>
      );
    }
  }
  
  export default SearchNames;