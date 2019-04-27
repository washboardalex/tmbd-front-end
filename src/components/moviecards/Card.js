import React from 'react';
import './styles/Card.css';

const Card = ({ name, released, score, image }) => (
    <div style={{margin:'15px', float:'left'}}>
        <div style={{position:'relative'}}>
            <div style={{height:'300px', position:'relative'}} className="postr-wrap">
                <img 
                    style={{height:'100%', boxShadow:'0px 0px 15px ', borderRadius:'10px', width:'auto', position:'relative', top:'0', left:'0'}} 
                    src={`https://image.tmdb.org/t/p/w500${image}`} 
                />
            </div>
            <p style={{position:'absolute', top:'0px', backgroundColor:'rgb(1,210,119)', left:'0px', color:'white', fontWeight:'bold', padding:'4px', paddingLeft:'8px', paddingRight:'8px', borderRadius:'15px'}}>{score*10}%</p>
        </div>
        <div style={{maxWidth:'200px', color:'white'}}>
            <p style={{fontWeight:'bold '}}>{name}</p>
            <p>Released {released}</p>
        </div>
    </div>
    
);

export default Card;