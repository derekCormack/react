import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput.js'
import UserOutput from './components/UserOutput.js'
import UserOutputClass from './components/UserOutputClass.js'


class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "derek"  //match this key with setState below
    };
  }

  changeUserName = (event) => {
    //console.log("what is data?", data);
    console.log("What's newUserName: ", event.target.value);
    //1. You write a method which changes the state username
    //2. Call this method from change evenet of UserInput child component
    //3. This function will be passed as a reference to the UserInput child component
    let newUserName = event.target.value;

    this.setState({
      username: newUserName
    });

    console.log("What's state now? ", this.state);
  }

  clickFunction = (data) => {
    console.log(data);
  }

  //You can write ES5/ES6 JavaScript before render() JSX...

  //DANGER  render() CONTAINS JSX   use {} for JS calls
  render() {
    return (
      <div className="App">
        <UserInput changeUN = { this.changeUserName } > </UserInput>
        <UserOutput username={ this.state.username } clickFunc={ this.clickFunction.bind(this, "You clicked first paragraph") }></UserOutput>
        <UserOutput username = "Sally" clickFunc={ this.clickFunction.bind(this, "You clicked second paragraph") }></UserOutput>
        <UserOutputClass></UserOutputClass>
      </div>
    );
  }

}
export default App;
