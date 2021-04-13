import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css'


export default class App extends Component{

    render(){
        return(
            <div className="app">
                <Header/>
                <RandomPlanet/>
            </div>)

    }
}