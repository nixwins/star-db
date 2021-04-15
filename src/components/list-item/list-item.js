import React, { Component } from 'react';
import './list-item.css'
export default class ListItem extends Component {
    render(){

        const { itemList, onItemClick } = this.props;
        const itemLi = itemList.map((item)=>{

            return <li key={item.id} className="list-group-item" onClick={()=>onItemClick(item.id)}>{item.name}</li>;
        });

        return(
            <ul className="list-group list-people">
               {itemLi}
            </ul>
        );
    }
}


