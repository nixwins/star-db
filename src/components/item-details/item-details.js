import React, { Component } from 'react';
import './item-details.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ThrowError from '../throw-error/throw-error';


const Record = ({ item, field, label }) => {
    return (<li className="list-group-item"> {label} {item[field]}</li>);
}
export { Record }

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
        const { selectedItem, getData } = this.props;

        if (!selectedItem) return;

        getData(selectedItem)
            .then((item) => {
                this.setState({ item, load: false });
            })
    }
    render() {

        const { item, load } = this.state;

        if (load) return <Spinner />;


        return (
            <div className="details-item">
                <div className="di-img-wrapper" alt="1">
                    <img src={item.imageURL} alt={item.name} />
                </div>
                <ul className="di-description">
                    <li className="list-group-item">Name: {item.name}</li>
                    {React.Children.map(this.props.children, (child) => {
                        return React.cloneElement(child, { item });
                    })}
                    <ThrowError />
                </ul>

            </div>
        )
    }
}