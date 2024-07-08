import React from "react";
import "./Banner.scss"
function Banner(props) {
    return (
    <div className="banner">
        <div className="image">
            <img src={props.image} alt={props.alt}/>
        </div>
        <h1>{props.text}</h1>   
    </div>
    )
}

export default Banner;