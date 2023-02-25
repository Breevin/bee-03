import React from "react";
import axios from "axios";
import '../Styles/home.css';
import Wallpaper from "./Wallpaper";
import Quicksearch from "./QuickSearch";


class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            locations: [],
            mealtype: []
        }
    }
    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:8900/locations',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => {
                console.log(this.state.locations)
                this.setState({ locations: response.data.locations })
            })
            .catch(err => console.log(err));

        // Qouicksearch
        axios({
            method: 'GET',
            url: 'http://localhost:8900/mealtype',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => {
                console.log(this.state.mealtype)
                this.setState({ mealtype: response.data.mealtype })
            })
            .catch(err => console.log(err));
    }
    render() {
        const { locations, mealtype } = this.state

        return (
            <div>
                <Wallpaper locationsData={locations} />
                <Quicksearch quicksearchData={mealtype} />
            </div>
        )
    }
}

export default Home;