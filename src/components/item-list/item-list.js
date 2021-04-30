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

    renderItems(itemList, activeId) {

        return itemList.map((item) => {

            const { id } = item;
            const label = this.props.children(item);
            let clazz = 'list-group-item list-group-item-action';

            clazz = (activeId === id) ? clazz += ' active' : clazz;


            return <li
                key={id}
                onClick={this.onMarkActiveItem}
                className={clazz}
                data-id={id}>
                {label}
            </li>
        });
    }

    render() {

        const { itemList, load, activeId } = this.state;

        if (load) return <Spinner />;

        return (
            <ul className="list-group">
                {this.renderItems(itemList, activeId)}
            </ul>
        )
    }

}