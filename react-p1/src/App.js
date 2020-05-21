import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import LarryComp from './LarryComp';

let index = 20;

function App() {

    const [count, setCount] = useState(10)
      // let count = 10;
    
    function myOnClickCount(e) {
      console.log('We just clicked count', count);
      setCount(count + 1);
    }

    }
    
      function myOnclick(e) {
      // count++;
      setCount(count +1);
      console.log('We just clicked', count);
    }
 
    return (

    <div className="App">
           <div>
            <h1 onClick={myOnClick}> hello world  count {count}</h1>
            <h1 onClick={myOnClick}> hello world  count {index}</h1>
          </div>
          <LarryComp/ count-{count}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
