import React from "react";
import './EvenComponent.css';

const EvenComp = (props) => {
    return (
        <div className = "EvenbackgroundColor">
            <h1>{ props.children } </h1>
            <h1>Isla likes piggies </h1>
            <h2>Image: </h2>
            <img src={ props.url } alt={ props.alt }/>
        </div>
    )
}

export default EvenComp;
// import React from 'react';

// const MyComp = (props) => {
//     return (
//         <div>
//             <h1>{ props.children }</h1>   
//             <h2>Hello World from MyComp, Derek!</h2>
//             <h2>Value coming from App.js { props.name }</h2>
//             <h2>Value coming from App.js { props.address }</h2>
//             <h2>Value coming from App.js { props.whatToSay }</h2>
//             <button onClick={ props.func }> Push Me in My Component </button>
//         </div>
//     )
// }

// export default MyComp;