import React, { Component } from 'react';
import './App.css';

//We can give any name to the component in import statement, but it should start from uppercase
import MyComponent from './Components/MyComponent.js';
import EvenComponent from './Components/EvenComponent';
import OddComponent from './Components/OddComponent';
// .js in this path is optional './Components/MyComponent.js'

//JSX format!
// JS - JavaScript and X - XML
//To avoid JSX: https://reactjs.org/docs/react-without-jsx.html

//The restrictions with JSX:
// 1. Always wrap your html content in Parent element
// 2. You can't write "class" keyword in JSX because it is used to define Component!


//Two ways of defining components in React:

//This is functional component: - Stateless component

// function App() {
//   return (
//     <div className="App1">
//       <h1>this is react app :)</h1>
//       <h2>Does this h2 element work? </h2>
//     </div>
//   );
// }

//This is the class component: - Stateful components

class App extends Component {

  // declaring a counter here is optional! The counter is initialised with this keyword in constructor!
  //counter = 0;

  constructor() {
    //With the help of super() method, here is the  inheritance of the functionality of React Components!
    super();
    this.counter = 21;    // IF NOT BOUND to react state this.counter will not be recognised 

    //This React State is like a Two-Way binding!
    this.state = {
      myState: "TBD",
      person: [
        {
          name: "Vaib",
          age: 24
        },
        {
          name: "Don",
          age: 25
        }
      ]
    };

  }

  //This is regular JS function
  // onPushMe() {
  //   console.log("You pushed me");
  // }

  // Arrow function
  onPushMe = () => {
    console.log("What's 'this' keyword ?", this);
    this.counter++;
    console.log("counter value: ", this.counter);
    console.log("You pushed me");
    this.setState({                      //.setState is a predefined method in react state.
      myState: this.counter
    });

    this.setState({
      person: [
        {
          name: "Derek",
          age: 24
        },
        {
          name: "Don",
          age: 25
        }
      ]
    })
    console.log("What's in the state? ", this.state);
  }

  render() {
    return (  //THIS IS JSX!!!!!
      <div className="App1">
        <h1>this is react app :)</h1>x
        <h2>Does this h2 element work? </h2>
        <h2>I am in control of this application and my name is Mr X</h2>
        <h3>What's the value of counter? {this.counter} </h3>    {/* string binding */}
        <button onClick={this.onPushMe} > Push Me </button>
        <h3>React State: {this.state.myState}</h3>   {/* binding state to the DOM */}
        <h4>React State Object: {this.state.person[0].name} --- {this.state.person[0].age}</h4>
        <h4>React State Object: {this.state.person[1].name} --- {this.state.person[1].age}</h4>

        <div className="my-comp">     
          <MyComponent name="Vaibhav" address="Capitol Hill" whatToSay="What Ever" func={this.onPushMe} >
            This is My Component as a child Component of App Component!!!  
          </MyComponent>  
        </div>

        {
          this.state.myState % 2 === 0 && 
            <div className="even-comp">
              <EvenComponent alt="Piggy Image" url="https://i.pinimg.com/originals/f6/8b/04/f68b0480335f4f7f5ca00d1b9cd0bf56.png">
                This is Even Component as a child Component of App Component!!!  
              </EvenComponent>
            </div>
        }

        {
          this.state.myState % 2 !== 0 && 
            <div className="odd-comp">
              <OddComponent alt="Cowwy Image" url="https://cdn.pixabay.com/photo/2013/07/13/11/44/cow-158552_640.png">
                This is Odd Component as a child Component of App Component!!!  
              </OddComponent>
            </div>
        }


        {/* { this.state.myState % 2 === 0 &&
          <EvenComponent></EvenComponent>
        }
        { this.state.myState % 2 !== 0 &&
          <OddComponent></OddComponent>
        } */}
      </div>
    );
  }
}

//This is alternative for JSX!

//React.createElement('div', { className: 'App1' }, React.createElement('h1', null, 'this is react app :)') );


export default App;
