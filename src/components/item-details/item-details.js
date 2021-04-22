import React, { Component } from 'react';
import './item-details.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

export default class ItemDetails extends Component {

    state = {
        item: {},
        load: true,
    }

    swapiService = new SwapiService();

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {

        if (this.props.selectedItem !== prevProps.selectedItem) {
            this.updateItem();
        }

    }

    updateItem() {
        const { selectedItem } = this.props;

        if (!selectedItem) return;

        this.swapiService
            .getPerson(selectedItem)
            .then((item) => {
                this.setState({ item, load: false });
            })
    }
    render() {

        const { item, load } = this.state;

        if (load) {
            return <Spinner />;
        }

        return (
            <div className="details-item">
                <div className="di-img-wrapper" alt="1">
                    <img src={item.imageURL} alt={item.name} />
                </div>
                <ul className="di-description">
                    <li className="list-group-item">Name: {item.name}</li>
                    <li className="list-group-item">Birht Year: {item.birthYear}</li>
                    <li className="list-group-item">Height: {item.height}</li>

                </ul>
            </div>
        )
    }
}