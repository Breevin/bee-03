import React from "react";
import QuicksearchItem from "./QuickSearchItem";

class Quicksearch extends React.Component{
    render(){
        const {quicksearchData} = this.props
        return(
            <div>
                <div className="bottomsection">
        <h1 className="qs-heading">Quick Search</h1>
        <h3 className="qs-subheading">Discover reastuarnts by meal type</h3>
        <div className="container_row">

            {
                quicksearchData.map((item) => {

                    return <QuicksearchItem quicksearchitemData={item}/>
                })
            }
            
            
            </div>
    </div>
            </div>
        )
    }
}
   
export default Quicksearch;