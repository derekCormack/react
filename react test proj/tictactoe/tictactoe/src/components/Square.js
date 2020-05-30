import React from 'react';
import '../App.css'

// class Square extends React.Component {


//   clickHandler = () => {
//     this.props.pushMyButton();    ///this is a way to pass props to square in a nonfunctional comp
//   }

//   render() {   //cant put props here.....not a functional comp!
//     return (
//       <button
//         className="square"
//        // onClick attribute has special REACT meaning because its built in component 
//         onClick={this.clickHandler}>   
//         {this.props.value}
//       </button>
//     );
//   }
// }

// remove CLASS because Square is now "Dumb"  no state is passed
function Square(props){
  let L = props.value;
// if you dont want to execute pushmybutton IMMEDIATELY  THEN write arrow function to delay:  onClick={() => {props.pushMyButton()}}.
  return (
  <button className="square" onClick={props.pushMyButton}>
    {L}
    </button>
 );
}


export default Square
