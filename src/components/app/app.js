import React, { Component } from 'react';
import Header from '../header';
import ItemList from '../item-list';
import RandomPlanet from '../random-planet';
import ItemDetails from '../item-details';

import './app.css'
import ThrowError from '../throw-error';
import ErrorMessage from '../error-message/error-message';
import PeoplePage from '../people-page';
export default class App extends Component {

    state = {
        hasError: false
    }


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
                <PeoplePage />
                <PeoplePage />

            </div>)
    }
}