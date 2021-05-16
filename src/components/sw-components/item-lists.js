import { withData } from '../hoc-helpers';
import ItemList from '../item-list';
import SwapiService from '../../services/swapi-service';
import '../item-list/item-list.css';

const swapiService = new SwapiService();
const {
    getAllPeople,
    getAllPlanets,
    getAllStarShip
} = swapiService;

const PeopleList = withData(ItemList, getAllPeople);
const StarShipList = withData(ItemList, getAllStarShip);
const PlanetList = withData(ItemList, getAllPlanets);

export {
    PeopleList,
    StarShipList,
    PlanetList
}