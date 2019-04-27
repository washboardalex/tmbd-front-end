import React, { Component } from 'react';
import './App.css'
import SearchBox from './components/SearchBox.js';
import CardList from './components/moviecards/MovieCards';

import themoviedb from './static/themoviedb.svg';

class App extends Component {

  constructor() {
    super();
    this.state = {
      searchField: '',
    }
  }

  componentDidMount() {
    
  }

  onSearchChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {
    
    return (
      <div className="app">
        <div className="ctr logo-cont" >
          <img className="logo" src={themoviedb} alt="Logo" />
        </div>
        <div className="ctr">
          <SearchBox />
        </div>
        <div style={{paddingLeft:'5vw', paddingTop:'25px'}}>
          <h2>Popular Movies</h2>
          <CardList/>
        </div>
      </div>
    );
  }
}

export default App;
