import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import Card from './Card';

class CardList extends Component {

  componentDidMount() {
    let { movies, fetchMovies } = this.props;

    if ( movies.length === 0 ) {
      fetchMovies();
    }
  }
  
  render() {
    const { movies, isLoading } = this.props; 
  
    return (
      <div style={{display:'flex', flexWrap:'wrap'}}>
      {
        isLoading ? 
        <div style={{display:'flex', justifyContent:'center', width:'90vw', height:'300'}}>
          <div style={{padding:'0px', marginTop:'10vh'}}><ReactLoading type={'spinningBubbles'} color={'#E3F4FC'} width={150} /></div>
        </div>
        :
        movies.map((movie) => {
          if (movie.poster_path !== null && movie.backdrop_path !== null) {
            return (
              <Card
                key={movies.indexOf(movie)}
                id={movie.id}
                name={movie.original_title}
                released={movie.release_date.slice(0,4)}
                score={movie.vote_average}
                poster={movie.poster_path}
                backdropImg={movie.backdrop_path}
                overview={movie.overview}
              />
            );
          }
        })
      }
      </div>
    )
  }
} 

export default CardList;