import React, { Component } from 'react';
import './list-item.css'
export default class ListItem extends Component {
    render(){

        const { itemList, onItemClick } = this.props;
        console.log(this.props.children)
        const itemLi = itemList.map((item)=>{

            return <li 
                        key={item.id} 
                        className="list-group-item" 
                        onClick={()=>onItemClick(item.id)}>
                            {this.props.children(item)}
                    </li>;
        });

        return(
            <ul className="list-group list-people">
               {itemLi}
            </ul>
        );
    }
}


