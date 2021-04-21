import React, { Component, Fragment } from 'react'
import DetailsItem from '../details-item'
import ListItem from '../list-item'
import SwapiService from '../../services/swapi-service';
import './people-page.css'

export default class PeoplePage extends Component{

    _request = new SwapiService();

    state={
        itemList:[],
        item:{}
    }

    componentDidMount(){
        
        this._request
                    .getAllPeople()
                    .then((peopleList)=>{
                    
                         this.setState({ itemList: peopleList, item:peopleList[0] });
        });
    }


    onItemClick = (id)=>{
        const {itemList} = this.state;

       const item =  itemList.filter((item)=>item.id === id)[0];
       this.setState({item});
    }

    render(){

        const {itemList, item} = this.state;

        return(
            <div className="page-content">
                <ListItem 
                            itemList={itemList}
                            onItemClick={this.onItemClick}>

                            {(item)=>`${item.name} (${item.birthYear})`}
                            
                </ListItem>
                <DetailsItem item={item} />
            </div>
        
        )
    }
}