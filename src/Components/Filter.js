import React from "react";
import '../Styles/filter.css';

class Filter extends React.Component{
    render(){
        return(
    
            <div>
                <div className="container1">
        <div className="topic1">
            Breakfast Place in Mumbai
        </div>
        <div className="box1">
        <div className="filter">
            <h3>Filters</h3>
            <h4>Select Location</h4>
            <input type="text" list="location" placeholder="Select Your Location"/>
            <datalist id="location" name="location">
                <option>Mumbai</option>
                <option>Goa</option>
                <option>Tamil Nadu</option>
                <option>Kerala</option>
            </datalist>
            <h4>Cuisine</h4>
            <input type="checkbox"/>North Indain<br/>
            <input type="checkbox"/>South Indain<br/>
            <input type="checkbox"/>Fast Food<br/>
            <input type="checkbox"/>Street Food<br/>
            <input type="checkbox"/>Chinese<br/>
            <h4>Cost For Two</h4>
            <input type="radio" name="cost"/>Less than 500 <br/>
            <input type="radio" name="cost"/>500 to 1000 <br/>
            <input type="radio" name="cost"/>1000 to 1500 <br/>
            <input type="radio" name="cost"/>1500 to 2500 <br/>
            <input type="radio" name="cost"/>2500+ <br/>
            <h4>Sort</h4>
            <input type="radio" name="sort"/>Low to High <br/>
            <input type="radio" name="sort"/>High to Low<br/>            
        </div>
    
        <div className="items">
            <div className="item">
                <div className="upper_box">
                <div className="upper_img"></div>
                    <h5 className="item_topic">The Big Chill Cakery</h5>
                    <p className="item_details"><b>FORT</b><br/>Vadapalani, Chennai,28</p>
                </div>
                <div className="lower_box">
                <pre className="item_price">CUSINES:        Bakery<br/>COST FOR TWO:   ₹ 700</pre>
                </div>
            </div>
            <div className="item">
                <div className="upper_box">
                    <div className="upper_img"></div>
                    <h5 className="item_topic">The Bake Shop</h5>
                    <p className="item_details"><b>FORT</b><br/>Vadapalani, Chennai,28</p>
                </div>
                <div className="lower_box">
                    <pre className="item_price">CUSINES:        Bakery<br/>COST FOR TWO:   ₹ 700</pre>
                </div>
            </div>
            <div className="pagination">
                <div className="bnt"> </div>
                <div className="bnt">1</div>
                <div className="bnt">2</div>
                <div className="bnt">3</div>
                <div className="bnt">4</div>
                <div className="bnt">5</div>
                <div className="bnt"> </div>
            </div>
        </div>
    
     </div>
    </div>
            </div>
        )
    }
}


export default Filter;