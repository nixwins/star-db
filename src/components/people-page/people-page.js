import React from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from '../row'
import ErrorMessage from '../error-message/';
import SwapiService from '../../services/swapi-service';
import ErrorBoundary from '../error-boundary';

import './people-page.css'


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

        const itemList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.swapiService.getAllPeople}>

                {(item) => (`${item.name} (${item.gender})`)}
            </ItemList>
        );


        const itemDetails = (
            <ErrorBoundary>
                <ItemDetails
                    selectedItem={this.state.selectedItem}
                    getData={this.swapiService.getPerson} />
            </ErrorBoundary>
        );
        return (
            <Row lItem={itemList} rItem={itemDetails} />
        )
    }
}
