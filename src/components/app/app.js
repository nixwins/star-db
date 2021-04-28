import React, { Component } from 'react';
import Header from '../header';
import ItemList from '../item-list';
import RandomPlanet from '../random-planet';
import ItemDetails from '../item-details';

import './app.css'
import ThrowError from '../throw-error';
import ErrorMessage from '../error-message/error-message';
import PeoplePage from '../people-page';
import SwapiService from '../../services/swapi-service';
export default class App extends Component {

    state = {
        hasError: false
    }
    swapiService = new SwapiService();

    componentDidCatch() {
        this.setState({ hasError: true });
        console.log("componentDidCatch")
    }
    render() {

        if (this.state.hasError) return <ErrorMessage />;

        return (
            <div className="app">
                <Header />
                <RandomPlanet />
                <PeoplePage />
                <div className="page-content">
                    <ItemList onItemSelected={this.onItemSelected} getData={this.swapiService.getAllPlanets} />
                    <ItemDetails selectedItem={this.state.selectedItem} />
                </div>

            </div>)
    }
}