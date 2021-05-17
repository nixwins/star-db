import React from 'react';
import Row from '../row';
import { PeopleList } from '../sw-components/item-lists';
import { PersonDetails } from '../sw-components';



export default class PeoplePage extends React.Component {
    state = {
        selectedItem: 1
    }

    onItemSelected = (id) => {
        console.log("selected", id)
        this.setState({ selectedItem: id })
    }

    render() {
        const { selectedItem } = this.state;
        return (

            <Row
                left={<PeopleList onItemSelected={this.onItemSelected} />}
                right={<PersonDetails selectedItem={selectedItem} />}
            />

        );
    }
}