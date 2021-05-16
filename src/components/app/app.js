import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorMessage from '../error-message/error-message';
import SwapiService from '../../services/swapi-service';
import {
    PlanetList,
    PeopleList,
    StarShipList,
    PeopleDetails,
    PlanetDetails,
    StarShipDetails
} from '../sw-components';

import './app.css'

export default class App extends Component {

    state = {
        hasError: false
    }

    swapiService = new SwapiService();

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {

        if (this.state.hasError) return <ErrorMessage />;

        return (
            <div className="app">
                <Header />
                <RandomPlanet />
                {/* <PeoplePage /> */}
                <PeopleList>
                    {(item) => <span>{item.name}</span>}
                </PeopleList>
                <PeopleDetails selectedItem={2}>

                </PeopleDetails>

                <PlanetList>
                    {(item) => <span>{item.name} ({item.diameter})</span>}
                </PlanetList>
                <PlanetDetails selectedItem={9}>

                </PlanetDetails>

                <StarShipList>
                    {(item) => <span>{item.name}</span>}
                </StarShipList>
                <StarShipDetails selectedItem={9}>

                </StarShipDetails>


            </div>)
    }
}