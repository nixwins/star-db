import React, { useState } from 'react';
import './item-list.css';



const ItemList = (props) => {

    const { data, activeId } = props;

    const onMarkActiveItem = (event) => {
        const id = event.currentTarget.dataset.id;
        props.onItemSelected(id)
    }

    const items = data.map((item) => {

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

    return (
        <ul className="list-group">
            {items}
        </ul>
    )

}

export default ItemList;

