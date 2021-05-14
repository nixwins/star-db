import React, { useState } from 'react';
import './item-list.css';



export default function ItemList(props) {

    const { data } = props;

    console.log(props)

    const onMarkActiveItem = (event) => {
        const id = event.currentTarget.dataset.id;
        props.onItemSelected(id)
        // this.setState({ activeId: id });
        // setActiveId(id);
    }

    function renderItems(itemList, activeId) {

        return itemList.map((item) => {

            const { id } = item;
            const label = props.children(item);
            let clazz = 'list-group-item list-group-item-action';

            clazz = (activeId === id) ? clazz += ' active' : clazz;


            return <li
                key={id}
                onClick={onMarkActiveItem}
                className={clazz}
                data-id={id}>
                {label}
            </li>
        });
    }



    return (
        <ul className="list-group">
            {renderItems(data, null)}
        </ul>
    )

}


