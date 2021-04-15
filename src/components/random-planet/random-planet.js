import React, { Component } from 'react';
import Error from './../error';
import SwapiService from '../../services/swapi-service';

import './random-planet.css'

export default class RandomPlanet extends Component{

    _request = new SwapiService();

    state = {
        planet:{},
        loading:true,
        error:false
    };

    componentDidMount(){
        this.updatePlanet();
        setInterval(this.updatePlanet, 5000);  
    }

    updatePlanet = ()=>{

        const id = Math.floor(Math.random()*20) + 2;
        // console.log(id)
        this._request.getPlanet(id)
        .then(this.onLoaded)
        .catch(this.onError)
    };

    onLoaded = (planet)=>{
        this.setState({planet, loading:false})
    };

    onError = ()=>{
        this.setState({error:true})
    }
    render(){

        const {loading, error, planet} =  this.state;
        const spin = loading && !error  ? <Spin/> : null;
        const planetViewer = !loading && !error  ? <PlanetViewer planet={planet}/> : null;
        const errorEl =  error ? <Error/> : null;

        return (
                <div className="random-planet">
                    {spin}
                    {planetViewer}
                    {errorEl}
                </div>
        )
    }
}
const PlanetViewer = ({planet})=>{

   const {id, name, population, rotationPeriod, diameter} = planet;

    return (<React.Fragment >
                <div className="rp-img-wrapper">
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={name} />
                    </div>
                    <div className="rp-description">
                        <h3>{name}</h3>
                        <p>Population: <span>{population}</span></p>
                        <p>Rotation period: <span>{rotationPeriod}</span></p>
                        <p>Diameter: <span>{diameter}</span></p>
                </div>
            </React.Fragment>)
}
const Spin = ()=>{
    return(
        <div className="loadingio-spinner-interwind-nqrxppgvd4o">
            <div className="ldio-7hink7wze5f">
                 <div><div><div><div></div></div></div><div><div><div></div></div></div></div>
            </div>
        </div>
    )
}