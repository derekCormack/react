// import React, { Component } from 'react';


// class MyComp extends Component {   //MyComp  CAPS for custom components....

//     render() {
//         return (
//         <div>
//             <h1>Hello World from MyComp, Deeeerek!</h1>
//             <h2>Value coming from App.js { this.props.name }</h2>
//             <h2>Value coming from App.js { this.props.address }</h2>
//             <h2>Value coming from App.js { this.props.whatToSay }</h2>
//         </div>
//         )
//     }
// }

// export default MyComp;

//----------------------------------------------------------------------------------------


//Writing component in ES5 functional way
// import React from 'react';

// function MyComp() {
//     return (
//         <div>
//             <h1>Hello World from MyComp</h1>
//         </div>
//     )
// }

// export default MyComp;

//----------------------------------------------------------------------------------------

//Writing component in ES6 functional way

// props.children is predefined attribute/property of Props! this is not custom like name, address or whatToSay

import React from 'react';
import './MyComponent.css';

const MyComp = (props) => {
    return (
        <div className="my-comp-div">
            <h1>{ props.children }</h1>   
            <h2>Hello World from MyComp, Deeeerek!</h2>
            <h2>Value coming from App.js { props.name }</h2>
            <h2>Value coming from App.js { props.address }</h2>
            <h2>Value coming from App.js { props.whatToSay }</h2>
            <button className="btn" onClick={ props.func }> Push Me in My Component </button>
        </div>
    )
}

export default MyComp;

//Props are used for static/constant values! Whenever you have to send data from one component to another,
//use Props. You can't change the content of Props. If you want to change, use State.