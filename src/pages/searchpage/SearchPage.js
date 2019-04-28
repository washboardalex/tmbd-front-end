import React, { Component, Fragment } from 'react';
import SearchBox from '../components/searchbox/SearchBox.js';
import CardList from '../components/moviecards/CardList';
import apiKey from '../../api/apiKey';
import apiCall from '../../api/apiCall';


import themoviedb from '../../static/themoviedb.svg';
import './SearchPage.css';


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

    fetchStateUpdateHelper = (data) => {
        this.setState(prevState => ({
            movies: data.results,
            isLoading: false
        }))
    }

    onSearch = () => {
        const searchVal = document.getElementById('search-box').value;
        if (searchVal !== "") {
            this.setState(prevState => ({ isSearch: true, isLoading:true }))
            apiCall(`search/movie?api_key=${apiKey}&language=en-US&query=${searchVal}&page=1&include_adult=false`)
            .then(data => { this.fetchStateUpdateHelper(data) })
            .catch(console.log);
        }
    }

    fetchMovies = () => {
        this.setState(prevState => ({ isSearch: false }))
        apiCall(`movie/popular?api_key=${apiKey}&language=en-US&page=1`)
        .then(data => { this.fetchStateUpdateHelper(data) })
        .catch(console.log);
    }

    render() {

        const { movies, isLoading, isSearch } = this.state;

        return (
            <Fragment>
                <div className="ctr logo-cont" >
                    <img className="logo" src={themoviedb} alt="Logo" />
                    <div className="ray one"></div>
                    <div className="ray two"></div>
                    <div className="ray three"></div>
                    <div className="ray four"></div>
                    <div className="ray five"></div>
                    <div className="ray six"></div>
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