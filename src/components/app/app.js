import React, { Component } from 'react';
import Header from '../header';
import ItemList from '../item-list';
import RandomPlanet from '../random-planet';
import ItemDetails from '../item-details';

import './app.css'
import ThrowError from '../throw-error';
export default class App extends Component {

    state = {
        selectedItem: 2,
    }
    onItemSelected = (id) => {

        console.log(id)
        this.setState(() => {
            return { selectedItem: id }
        })
    }
    render() {
        return (
            <div className="app">
                <Header />
                <RandomPlanet />
                <div className="page-content">
                    <ItemList onItemSelected={this.onItemSelected} />
                    <ItemDetails selectedItem={this.state.selectedItem} />
                </div>

            </div>)
    }
}