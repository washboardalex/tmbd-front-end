import React, { Component } from 'react';
import Card from './Card';

class MovieCards extends Component {
  constructor() {
    super();
    this.state = {
      movies: [0,1,2,3,4,5,6,7,8,9],
      isLoading: true
    }
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=6ed12e064b90ae1290fa326ce9e790ff&language=en-US&page=1', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          this.setState(prevState => ({
            movies: data.results,
            isLoading:false
          }))
        })
        .catch(console.log)
  }
  
  
  render() {

    const { movies, isLoading } = this.state; 
    console.log(movies)
  
    return (
      <div style={{display:'flex', flexWrap:'wrap'}}>
      {
        isLoading ? 
        <div>Loading</div>
        :
        movies.map((movie) => {
          return (
            <Card
              key={movies.indexOf(movie)}
              id={movie.id}
              name={movie.original_title}
              released={movie.release_date}
              score={movie.vote_average}
              image={movie.poster_path}
            />
          );
        })
      }
      </div>
    )
  }
} 

export default MovieCards;