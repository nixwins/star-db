import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './item-list.css';

export default class ItemList extends Component {

    state = {
        itemList: [],
        load: true,
        activeId: null
    }

    swapiService = new SwapiService();

    componentDidMount() {

        this.props
            .getData()
            .then((peopleList) => {
                this.setState({ itemList: peopleList, load: false })
            });
    }

    onMarkActiveItem = (event) => {
        const id = event.currentTarget.dataset.id;
        this.props.onItemSelected(id)
        this.setState({ activeId: id });
    }
    render() {

        const { itemList, load, activeId } = this.state;

        if (load) {
            return <Spinner />;
        }

        const items = itemList.map(({ id, name }) => {
            let clazz = 'list-group-item list-group-item-action';

            if (activeId === id) {
                clazz += ' active'
            }
            return <li
                key={id}
                onClick={this.onMarkActiveItem}
                className={clazz}
                data-id={id}>
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