import React from 'react';
import Row from '../row';
import { PeopleList } from '../sw-components/item-lists';
import { PersonDetails } from '../sw-components';
import { withRouter } from 'react-router';



const PeoplePage = ({ history }) => {

    return <PeopleList onItemSelected={(selectedItem) => {
        console.log(history)
        history.push(selectedItem)
    }} />;
}

export default withRouter(PeoplePage);