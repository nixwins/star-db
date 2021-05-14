import React from 'react';
import { withData } from '../hoc-helpers';
import ItemList from '../item-list';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();
const {
    getAllPeople,
    getAllPlanets,
    getAllStarship
} = swapiService;

const PlanetList = withData(ItemList, getAllPeople);

export {
    PlanetList
}