import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import './random-planet.css'

export default class RandomPlanet extends Component{


    state = {
        id:null,
        name:null,
        population:null,
        rotationPeriod:null,
        diameter:null
    }

    constructor(){
        super();
        const request = new SwapiService();
        const id = Math.floor(Math.random()*20) + 2;
        request.getPlanet(id)
               .then((planet)=>{
                    this.setState({
                        id,
                        name:planet.name,
                        population:planet.population,
                        rotationPeriod:planet.rotation_period,
                        diameter:planet.diameter
                     });
                });
    }
    render(){

        const {id, name, population, rotationPeriod, diameter} =  this.state;
        return (
                <div className="random-planet">
                    <div className="rp-img-wrapper">
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={name} />
                    </div>
                    <div className="rp-description">
                        <h3>{name}</h3>
                        <p>Population: <span>{population}</span></p>
                        <p>Rotation period: <span>{rotationPeriod}</span></p>
                        <p>Diameter: <span>{diameter}</span></p>
                    </div>
                </div>
        )
    }
}