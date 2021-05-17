import React, { Component } from 'react';
import ErrorMessage from '../error-message';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ThrowError from '../throw-error';
import './random-planet.css'

export default class RandomPlanet extends Component {

    _request = new SwapiService();

    state = {
        planet: {},
        loading: true,
        hasError: false
    };

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 10000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    updatePlanet = () => {

        const id = Math.floor(Math.random() * 20) + 2;
        this._request.getPlanet(id)
            .then(this.onLoaded)
            .catch(this.onError)
    };

    onLoaded = (planet) => {
        this.setState({ planet, loading: false })
    };

    onError = () => {
        this.setState({ hasError: true })
    }
    render() {

        const { loading, hasError, planet } = this.state;
        const spin = loading && !hasError ? <Spinner /> : null;
        const planetViewer = !loading && !hasError ? <PlanetViewer planet={planet} /> : null;
        const errorEl = hasError ? <ErrorMessage msg={`Cant' update planet by Planet:`} /> : null;

        return (
            <div className="random-planet">
                {spin}
                {planetViewer}
                {errorEl}
            </div>
        )
    }
}
const PlanetViewer = ({ planet }) => {

    const { name, population, rotationPeriod, diameter, imageURL } = planet;

    return (<React.Fragment >
        <div className="rp-img-wrapper">
            <img src={imageURL} alt={name} />
        </div>
        <div className="rp-description">
            <h3>{name}</h3>
            <p>Population: <span>{population}</span></p>
            <p>Rotation period: <span>{rotationPeriod}</span></p>
            <p>Diameter: <span>{diameter}</span></p>
            <ThrowError />
        </div>
    </React.Fragment>)
}
