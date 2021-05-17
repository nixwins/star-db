import { StarShipList, StarShipDetails } from '../sw-components';
import { withSelectedItem } from '../hoc-helpers';

export default withSelectedItem(StarShipList, StarShipDetails);
