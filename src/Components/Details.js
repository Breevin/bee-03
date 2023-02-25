import React from "react";
import queryString from "query-string";
import axios from "axios";
import "../Styles/details.css"

class Details extends React.Component {
    constructor() {
        super();
        this.state = {
            restaurants: {},
        }
    }
    componentDidMount() {
        const qs = queryString.parse(this.props.location.search);
        const { restaurants } = qs;

        axios({
            method: 'GET',
            url: 'http://localhost:8900/restaurants/', restaurants,
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => {
                console.log(this.state.restaurants);
                this.setState({ restaurants: response.data.restaurants });
            })
            .catch(err => console.log(err));
    }
    render() {
        const { name,contact_number,min_price } = this.props.restaurants;
        return (
            <div>
                <div>
                    {/* <img src="image/food.jpg" alt="no" width="100%" height="50%"></img> */}
                    <button className="button">Click to see Image Gallery</button>
                </div>
                <div className="heading">{name}</div>
                <button className="btn-order">Place online order</button>

                {/* <div className="tabs">
                <div className="tab">
                    <input type="radio" id="tab-1" name="tab-group-1"></input>
                    <label for="tab-1">Overview</label>
                    <div className="content">
                        <div className="about">About this place</div>
                        <div className="head">Cusine</div>
                        <div className="value">Bakery, Fast-food</div>
                        <div className="head">Average cost</div>
                        <div className="value">{restaurants.min_price} for two people(approx)</div>
                    </div>  
                </div>
    
                <div className="tab">
                    <input type="radio" id="tab-2" name="tab-group-1"></input>
                    <label for="tab-2">Contact</label>
                    <div className="content">
                        <div className="about">Phone Number</div>
                        <div className="head">+{restaurants.contact_number}</div>
                        <div className="value">The Big Chill Cakery</div>
                        <div className="head">Shop 1, Plot D, JJ Complex, Delhi</div>
                        <div className="value">700 for two people(approx)</div>
                    </div>  
                </div>
                </div> */}
                <div className="tab">
                    <button className="tablinks" onclick="">Overview</button>
                    <button className="tablinks" onclick="">Contact</button>
                </div>

                <div id="overview" className="tabcontent">
                    <div className="about">About this place</div>
                    <div className="head">Cusine</div>
                    <div className="value">Bakery, Fast-food</div>
                    <div className="head">Average cost</div>
                    <div className="value">{min_price} for two people(approx)</div>
                </div>

                <div id="contact" className="tabcontent">
                    <div className="about">Phone Number</div>
                    <div className="head">+{contact_number}</div>
                    <div className="value">The Big Chill Cakery</div>
                    <div className="head">Shop 1, Plot D, JJ Complex, Delhi</div>
                    <div className="value">700 for two people(approx)</div>
                </div>
            </div>
        )
    }
}


export default Details;