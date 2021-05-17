import React from 'react';
import { withSwapiService } from '../hoc-helpers';
import ItemDetails, { Record } from '../item-details';



const StarShipDetails = (props) => {

    return (
        <ItemDetails {...props}>
            <Record label="Speed" field="speed" />
            <Record label="Model" field="model" />
        </ItemDetails>
    );

};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarShip
    }
}

export default withSwapiService(StarShipDetails, mapMethodsToProps);