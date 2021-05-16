import React from 'react';
import SwapiService from '../../services/swapi-service';
import ItemDetails, { Record } from '../item-details';

const swapiService = new SwapiService();

const {
    getPerson,
    getPlanet,
    getStarShip
} = swapiService;

const PeopleDetails = ({ selectedItem }) => {

    return (
        <ItemDetails
            selectedItem={selectedItem}
            getData={getPerson} >
            <Record label="Gender" field="gender" />
            <Record label="Birth Year" field="birthYear" />
            <Record label="Height " field="height" />
        </ItemDetails>
    );
};
const PlanetDetails = ({ selectedItem }) => {
    return (
        <ItemDetails
            selectedItem={selectedItem}
            getData={getPlanet} >
            <Record label="Population" field="population" />
            <Record label="Rotation" field="rotationPeriod" />
            <Record label="Diameter" field="diameter" />
        </ItemDetails>
    );
};
const StarShipDetails = ({ selectedItem }) => {

    return (
        <ItemDetails
            selectedItem={selectedItem}
            getData={getStarShip} >
            <Record label="Speed" field="speed" />
        </ItemDetails>
    )
};

export {
    PeopleDetails,
    PlanetDetails,
    StarShipDetails
}