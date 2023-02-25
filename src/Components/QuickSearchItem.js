import React from "react";

class QuicksearchItem extends React.Component{
    render(){
        const {name , content, image} = this.props.quicksearchitemData;
        return(
            <div>
                <div className="qs-box">
                <img src={image} alt="no img" className="home_img"/>
                <h4 className="qs-item-heading">{name}</h4>
                <p className="qs-item-description">{content}</p>
            </div>
            </div>
        )
    }
}
export default QuicksearchItem 