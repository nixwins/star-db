import React from 'react';
import { withSwapiService } from '../hoc-helpers';
import ItemDetails, { Record } from '../item-details/';


const PersonDetails = (props) => {

    return (

        <ItemDetails
            {...props} >
            <Record label="Gender" field="gender" />
            <Record label="Birth Year" field="birthYear" />
            <Record label="Height " field="height" />
        </ItemDetails>
    );

};

const mapMethodsToProps = ({ getPerson }) => {
    return {
        getData: getPerson
    }
}
export default withSwapiService(PersonDetails, mapMethodsToProps);