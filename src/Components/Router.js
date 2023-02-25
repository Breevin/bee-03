import React from "react";
import {Route, BrowserRouter} from 'react-router-dom';
import Home from "./Home";
import Filter from "./Filter";
import Details from "./Details";
import Header from "./Header";

function Router(){
    return(
        <BrowserRouter>
        <Route path='*' component={Header}/>
        <Route exact path='/' component={Home} />
        <Route path='/Filter' component={Filter} />
        <Route path='/Details' component={Details} />
        </BrowserRouter>
    )
}

export default Router;