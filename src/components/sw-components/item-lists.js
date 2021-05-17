import React from 'react';
import { withData, withSwapiService } from '../hoc-helpers';
import ItemList from '../item-list';
import '../item-list/item-list.css';


const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return <Wrapped {...props}>{fn}</Wrapped>;
    }
}

const renderName = ({ name }) => <span>{name}</span>;
const renderNameWithModel = ({ name, model }) => <span>{name} ({model})</span>;

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
}
const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
}
const mapStarShipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarShip
    }
}
const PeopleList = withSwapiService(
    withData(withChildFunction(ItemList, renderName)),
    mapPersonMethodsToProps
);
const StarShipList = withSwapiService(
    withData(
        withChildFunction(ItemList, renderNameWithModel)
    ),
    mapStarShipMethodsToProps
);
const PlanetList = withSwapiService(
    withData(
        withChildFunction(ItemList, renderName)
    ),
    mapPlanetMethodsToProps);

export {
    PeopleList,
    StarShipList,
    PlanetList
}