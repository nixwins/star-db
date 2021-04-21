import React, { Component } from 'react';
import './details-item.css';

export default class DetailsItem extends Component { 

    render(){
        // console.log(this.props.item)
        const { item } = this.props;

        return(
            <div className="details-item">
                <div className="di-img-wrapper" alt="1">
                    <img src={item.imageURL} alt={item.name}/>
                </div>
                <div className="di-description">
                    <li className="list-group-item">Name: {item.name}</li>
                    <li className="list-group-item">Birht Year: {item.birthYear}</li>
                    <li className="list-group-item">Height: {item.height}</li>
              
                </div>
            </div>   
        )
    }
}