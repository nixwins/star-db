import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './item-list.css';

export default class ItemList extends Component {

    state = {
        itemList: [],
        load: true
    }

    swapiService = new SwapiService();

    componentDidMount() {

        this.props
            .getData()
            .then((peopleList) => {
                this.setState({ itemList: peopleList, load: false })
            });
    }
    render() {

        const { itemList, load } = this.state;

        if (load) {
            return <Spinner />;
        }
        const items = itemList.map(({ id, name }) => {
            return <li
                key={id}
                onClick={() => this.props.onItemSelected(id)}
                className="list-group-item list-group-item-action">
                {name}
            </li>
        });


        return (
            <ul className="list-group">
                {items}
            </ul>

        )
    }

}