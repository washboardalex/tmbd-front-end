import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import apiKey from '../../api/apiKey';
import apiCall from '../../api/apiCall';

import '../components/moviecards/styles/Card.css';
import './DetailsPage.css';

class DetailsPage extends Component {

    constructor() {
        super();
        this.state = {
            duration: 0,
        }
    }

    componentDidMount() {
        if (this.props.location.state !== undefined) {
            const { id } = this.props.location.state;
            apiCall(`movie/${id}?api_key=${apiKey}&language=en-US`)
            .then(data => {
                this.setState(prevState => ({
                    duration: data.runtime
                }))
            })
            .catch(console.log)
        }
    }

    render() {
        if ( this.props.location.state === undefined ) {
            return (
                <Redirect to="/" push />
            )
        }

        const { backdropImg, overview, poster, name, released, score } = this.props.location.state;
        const { duration } = this.state;

        return(
            <Fragment>
                <div className="bckgrd" style={{ backgroundImage:`url(https://image.tmdb.org/t/p/w1280/${backdropImg})` }}>
                    <i onClick={() => window.history.go(-1)} className="material-icons rsize">arrow_back</i>
                </div>
                <div style={{display:'flex', flexWrap:'wrap'}}>
                    <div style={{marginRight:'10vw'}} className="postr-wrap-dtls" >
                        <img className="postr trslte" src={`https://image.tmdb.org/t/p/w500/${poster}`} alt={`${name} poster`}/>
                    </div>
                    <div className="dtls-wrap">
                        <h1 className="dtls-head">{name}</h1>
                        <p className="dtls-txt">Released {released} <span>&#183;</span> {score*10}% User Score</p>
                        <p className="dtls-txt">{ Math.floor(duration/60)}h {duration%60 } min</p>
                    </div>
                </div>
                <div className="divider" ></div>
                <div className="ovrvw-wrap" >
                    <h2>Overview</h2>
                    <p className="ovrvw">{overview}</p>
                </div>
            </Fragment>
        );
  
    }
}

export default DetailsPage;