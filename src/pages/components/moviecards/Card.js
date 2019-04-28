import React from 'react';
import './styles/Card.css';
import { Link } from 'react-router-dom';

const Card = ({ name, id, released, score, poster, backdropImg, overview }) => (
    <div style={{margin:'15px', float:'left'}}>
        <Link 
            to={{
                pathname: 'movie',
                state: {
                    id, backdropImg, overview, name, poster, released, score
                }
            }}
        >
            <div style={{position:'relative'}}> 
                <div className="postr-wrap hov">
                    <img className="postr" src={`https://image.tmdb.org/t/p/w500${poster}`} alt={name} />
                </div>
                <p 
                    style={score < 5.0 ? {backgroundColor:'rgb(209,34,91)'} : (score < 7.0 ? {backgroundColor:'rgb(73,2,163)'} : {backgroundColor:'rgb(1,210,119)'}) } 
                    className="usr-score"
                >
                    {score*10}%
                </p> 
            </div>
        </Link>
        <div style={{maxWidth:'200px', width:'25vw'}}>
            <p style={{fontWeight:'bold', color:'#E6F7FF'}}>{name}</p>
            <p style={{color:'#A1D1E6'}}>Released {released}</p>
        </div>
    </div>
);

export default Card;