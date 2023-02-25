import React from "react";
import axios from "axios";
import {withRouter} from 'react-router-dom';



class Wallpaper extends React.Component {
    constructor() {
        super();
        this.state = {
            restaurants: [],
            inputText: '',
            suggestions:[],
        }
    }

    handleLocation = (event) => {
        const name = event.target.value;
        console.log(name);

        axios({
            method: 'GET',
            url: 'http://localhost:8900/restaurants/',name,
            headers: { 'Content-Type': 'application/json'}
        })
            .then(response => {
                console.log(this.state.restaurants);
                this.setState({ restaurants: response.data.restaurants });
            })
            .catch(err => console.log(err));
    }

    handleSearch = (event) => {
        let inputText = event.target.value;
        const { restaurants } = this.state;
        const suggestions =restaurants.filter(item => item.name.toLowerCase().includes(inputText.toLowerCase()));
        this.setState({suggestions, inputText});
    }


    showSuggestion=()=>{
        const {suggestions, inputText} = this.state;

        if (suggestions.length === 0 && inputText=== undefined ){
            return null;
        }

        if (suggestions.length > 0 && inputText=== '' ){
            return null;
        }

        if (suggestions.length === 0 && inputText){
            return <ul>
            <li>No search results found</li>
            </ul>;
        }
        return (
            <ul>
            {
                suggestions.map((item, index)=> (<li key={index} onClick={()=> this.selectingRestaurant(item)}>{item.name} - {item.locality},{item.city} </li>))
            }
        </ul>
        );
    }

    selectingRestaurant =(resObj)=>{
        this.props.history.push('/details?restaurant='+resObj.name);
        
    }
    render() {
        const { locationsData } = this.props;
        return (
            <div>
                <div className="top">
                    <img className="img" src="./Assets/food.jpg" alt="no" />
                    {/* <div className="logo-container">
                    <div className="logo">
                        <h1 className="name">Z</h1>
                    </div>
                    </div> */}
                    <div className="topic">
                        <p className="zom">ZOMATO</p>
                    </div>
                    <div className="topic sub">
                        <p className="zom 1">Search your Favourite restaurants nearby</p>
                    </div>
                    <div className="search">
                        <select name="location" className="location" onChange={this.handleLocation}>
                            <option value="0">Select</option>
                            {locationsData.map((item) => {
                                return <option value={item.location_id}>{item.name}, {item.city}</option>
                            })}
                        </select>
                        <input id="query" className="searchbox" type="text" placeholder="Search for restaurant" onChange={this.handleSearch} />
                        {this.showSuggestion()} 
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Wallpaper);