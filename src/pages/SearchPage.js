import React, { Component, Fragment } from 'react';
import SearchBox from './components/searchbox/SearchBox.js';
import CardList from './components/moviecards/CardList';
import apiKey from '../key';

import themoviedb from '../static/themoviedb.svg';


class SearchPage extends Component {
    constructor() {
        super();
        this.state = {
            searchField: '',
            movies: [],
            isSearch: false,
            isLoading: true
        }
    }

    componentDidMount() {
        window.addEventListener('keypress', (e) => {
            if (e.keyCode === 13) {
                this.onSearch()
            }
        });
    }

    fetchBoilerplate = (qryStr) => {
        fetch(`https://api.themoviedb.org/3/${qryStr}`, {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                this.setState(prevState => ({
                    movies: data.results,
                    isLoading: false
                }))
            })
            .catch(console.log)
    }

    onSearch = () => {
        const searchVal = document.getElementById('search-box').value;
        if (searchVal !== "") {
            this.setState(prevState => ({ isSearch: true, isLoading:true }))
            this.fetchBoilerplate(`search/movie?api_key=${apiKey}&language=en-US&query=${searchVal}&page=1&include_adult=false`);
        }
    }

    fetchMovies = () => {
        this.setState(prevState => ({ isSearch: false }))
        this.fetchBoilerplate(`movie/popular?api_key=${apiKey}&language=en-US&page=1`);
    }

    render() {

        const { movies, isLoading, isSearch } = this.state;

        return (
            <Fragment>
                <div className="ctr logo-cont" >
                    <img className="logo" src={themoviedb} alt="Logo" />
                </div>
                <div className="ctr">
                    <SearchBox onSearch={this.onSearch} />
                </div>
                <div style={{paddingLeft:'5vw', paddingTop:'25px'}}>
                    <h2>{isSearch ? 'Your Search' : 'Popular Movies'}</h2>
                    <CardList movies={movies} isLoading={isLoading} fetchMovies={this.fetchMovies}/>
                </div>
            </Fragment>
        );
    }
}

export default SearchPage;