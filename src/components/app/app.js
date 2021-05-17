import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorMessage from '../error-message/error-message';
import SwapiService from '../../services/swapi-service';
import {
    PlanetList,
    PeopleList,
    StarShipList,
    PersonDetails,
    PlanetDetails,
    StarShipDetails
} from '../sw-components';
import { SwapiServiceProvider } from '../sw-service-context';
import './app.css'
import Row from '../row';
import PeoplePage from '../pages/people-page';

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
                <SwapiServiceProvider value={this.swapiService}>

                    <Header />

                    <RandomPlanet />
                    <PeoplePage />
                    <Row
                        left={<PlanetList />}
                        right={<PlanetDetails selectedItem={9} />}
                    />

                    <Row
                        left={<StarShipList />}
                        right={<StarShipDetails selectedItem={9} />}
                    />

                </SwapiServiceProvider>



            </div>)
    }
}