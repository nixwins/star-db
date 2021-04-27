import React from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import './people-page.css'
import ErrorMessage from '../error-message/error-message';
import SwapiService from '../../services/swapi-service';


export default class PeoplePage extends React.Component {

    swapiService = new SwapiService();

    state = {
        selectedItem: 2,
        hasError: false
    }

    componentDidCatch() {
        this.setState({ hasError: true })
    }
    onItemSelected = (id) => {

        console.log(id)
        this.setState(() => {
            return { selectedItem: id }
        })
    }

    render() {

        const { hasError } = this.state;

        if (hasError) return <ErrorMessage />

        return (<div className="page-content">
            <ItemList onItemSelected={this.onItemSelected} getData={this.swapiService.getAllPeople} />
            <ItemDetails selectedItem={this.state.selectedItem} />
        </div>)
    }
}