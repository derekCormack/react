import React from 'react';
import Board from './Board.js'
import '../App.css'


class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  //history = [ { 'squares' = [null, null, null, null, null, null, null, null, null] }, { 'squares' = [null, null, 'X', null, null, null, null, null, null] }, { 'squares' = [null, null, 'X', null, null, 'O', null, null, null] }  ]

  handleClick(i) {
    const historyNew = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = historyNew[historyNew.length - 1];
    const squaresNew = current.squares.slice();
    console.log("whats the value of squares after slicing: ", squaresNew);
    // squares[i] = this.state.xIsNext ? 'X' : 'O';
    if (this.state.xIsNext) {
      squaresNew[i] = 'X';
    } else {
      squaresNew[i] = 'O';
    }
    this.setState({
      // a1 = [1,2,3]    a2 = [4, 5] ....  a1.concat(a2)  = [1,2,3,4,5]
      history: historyNew.concat(    //Unlike the array push() method you might be more familiar with, the concat() method doesn’t mutate the original array, so we prefer it.
        [{
          squares: squaresNew,
        }]),
      stepNumber: historyNew.length,
      xIsNext: !this.state.xIsNext,  // !  negation of variable (switch)
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const historyNew = this.state.history;  // historyNew = history
    const current = historyNew[this.state.stepNumber];  //current = historyNew[0] i.e. first object in history array
    const winner = this.calculateWinner(current.squares);  //passing squares from history array to calculate winner i.e. [null, null, null, null, null, null, null, null, null]
    const moves = historyNew.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}> {desc} </button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game" >
        <div className="game-board">
          <Board squares={current.squares}
            onClick={(i) => this.handleClick(i)}>
          </Board>
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
}

export default Game;

