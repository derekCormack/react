import React from 'react';
import './App.css';
import Game from './components/Game.js';
import FormComp from './components/FormComp.js';

function App() {
  return (
    <div className="App">
      <h1>tictactoe</h1>
      <Game></Game>
      <FormComp left="stringLeft" right="stringRight"> 
      {/* above  --- is custom props sent to FormComp(child) */}
        <h1 className="Dialog-title">
          Welcome
      </h1>
        <p className="Dialog-message">
          Thank you for visiting our spacecraft!
      </p>
      </FormComp>
    </div>
  );
}

export default App;
