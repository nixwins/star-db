import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorMessage from '../error-message/error-message';
import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../sw-service-context';
import { PeoplePage, PlanetPage, StarShipPage } from '../pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './app.css'
import { StarShipDetails, PersonDetails } from '../sw-components';

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

                    <Router>
                        <Header />
                        <RandomPlanet />
                        <Switch>
                            <Route path="/" exact>
                                {
                                    () => {
                                        return <h2 style={{ color: "red" }}>Welcome</h2>
                                    }
                                }
                            </Route>

                            <Route path="/people" exact>
                                <PeoplePage />
                            </Route>
                            <Route path="/people/:id" exact render={({ match, location, history }) => {
                                console.log(match)
                                return <PersonDetails selectedItem={match.params.id} />
                            }} />

                            <Route path="/planets" exact>
                                <PlanetPage />
                            </Route>
                            <Route path="/starships" exact>
                                <StarShipPage />
                            </Route>


                        </Switch>






                    </Router>
                </SwapiServiceProvider>

            </div>)
    }
}