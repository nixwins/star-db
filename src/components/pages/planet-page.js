import React from 'react';
import Row from '../row';
import { PlanetList, PlanetDetails } from '../sw-components';

export default class PlanetPage extends React.Component {

    state = {
        selectedItem: 2
    }

    onItemSelected = (id) => {
        this.setState({ selectedItem: id })
    }

    render() {
        const { selectedItem } = this.state;
        return (
            <Row
                left={<PlanetList onItemSelected={this.onItemSelected} />}
                right={<PlanetDetails selectedItem={selectedItem} />}
            />

        )
    }
}