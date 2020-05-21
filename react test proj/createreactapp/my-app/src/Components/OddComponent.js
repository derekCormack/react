import React from "react";
import './OddComponent.css';

const OddComp = (props) => {
    return (
        <div className="backgroundColor">
            <h1>{ props.children } </h1>
            <h1>Daddy likes monstercows</h1>
            <h2>Image: </h2>
            <img src={ props.url } alt={ props.alt }/>          
        </div>
    )
}

export default OddComp;