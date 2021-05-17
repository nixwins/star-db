import React, { Component } from 'react';
import Row from '../row';

const withSelectedItem = (Left, Right) => {

    return class extends Component {
        state = {
            selectedItem: 9
        }

        onItemSelected = (id) => {
            this.setState({ selectedItem: id })
        }

        render() {
            const { selectedItem } = this.state;
            return (
                <Row
                    left={<Left onItemSelected={this.onItemSelected} />}
                    right={<Right selectedItem={selectedItem} />}
                />
            )
        }
    }
}

export default withSelectedItem;