import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';

export default  class ItemList extends Component{
 
    state = {
        itemList:[]
    }

    swapiService = new SwapiService();

    componentDidMount(){

        this.swapiService
                        .getAllPeople()
                        .then((peopleList)=>{
                            this.setState({itemList:peopleList})
                        });
    }
    render(){

        const { itemList } = this.state;

        const items = itemList.map((item)=>{
            return <li key={item.id} className="list-group-item">{item.name}</li>
        })
        console.log(items)
        return(
            <ul  className="list-group">
                {items}
            </ul>
          
        )
    }

}