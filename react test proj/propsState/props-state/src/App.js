import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput.js'
import UserOutput from './components/UserOutput.js'


class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "derek"  //match this key with setState below
    };
  }

  changeUserName = (event) => {
    console.log("What's newUserName: ", event.target.value);
    //1. You write a method which changes the state username
    //2. Call this method from a button click of UserInput child component
    //3. This function will be passed as a reference to the UserInput child component
    let newUserName = event.target.value;

    this.setState({
      username: newUserName
    });

    console.log("What's state now? ", this.state);
  }


  //You can write ES5/ES6 JavaScript before render() JSX...

  //DANGER  render() CONTAINS JSX   use {} for JS calls
  render() {
    return (
      <div className="App">
        <UserInput changeUN = {this.changeUserName}></UserInput>
        <UserOutput userName = {this.state.username}></UserOutput>
        <UserOutput userName="sally"></UserOutput>
      </div>
    );
  }

}
export default App;
