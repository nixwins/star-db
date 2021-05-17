import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorMessage from '../error-message/error-message';
import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../sw-service-context';
import { PeoplePage, PlanetPage, StarShipPage } from '../pages';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

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
                <SwapiServiceProvider value={this.swapiService}>

                    <BrowserRouter>
                        <Header />

                        <RandomPlanet />

                        <Route to="/"
                            render={() => {
                                return <h2>Welcome StarDB</h2>
                            }}
                            exact={true} />

                        <Route path="/people" component={PeoplePage} />
                        <Route path="/planets" component={PlanetPage} />
                        <Route path="/starships" component={StarShipPage} />

                    </BrowserRouter>

                </SwapiServiceProvider>




            </div>)
    }
}