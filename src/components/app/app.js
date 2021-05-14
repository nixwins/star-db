import React, { Component } from 'react';
import Header from '../header';
import ItemList from '../item-list';
import RandomPlanet from '../random-planet';
import ItemDetails from '../item-details';
import ErrorMessage from '../error-message/error-message';
import PeoplePage from '../people-page';
import SwapiService from '../../services/swapi-service';

import './app.css'
import { Record } from '../item-details/item-details';
import { PlanetList } from '../sw-components';

export default class App extends Component {

    state = {
        hasError: false
    }

    swapiService = new SwapiService();

    componentDidCatch() {
        this.setState({ hasError: true });
        //console.log("componentDidCatch")
    }

    render() {

        if (this.state.hasError) return <ErrorMessage />;

        return (
            <div className="app">
                <Header />
                <RandomPlanet />
                <PeoplePage />
                <div className="row mb2">
                    <div className="md-6">
                        {/* <ItemList
                            onItemSelected={this.onItemSelected}
                            getData={this.swapiService.getAllPlanets}
                        >
                            {(item) => <span>{item.name} ({item.diameter})</span>}

                        </ItemList> */}

                        <PlanetList>
                            {(item) => <span>{item.name} ({item.diameter})</span>}
                        </PlanetList>

                    </div>
                    <div className="md-6">
                        <ItemDetails
                            selectedItem={2}
                            getData={this.swapiService.getPlanet} >
                            <Record label="Population" field="population" />
                            <Record label="Rotation" field="rotationPeriod" />
                            <Record label="Diameter" field="diameter" />
                        </ItemDetails>
                    </div>

                </div>

            </div>)
    }
}