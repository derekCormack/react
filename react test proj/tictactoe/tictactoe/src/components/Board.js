import React from 'react';
import Square from './Square.js'
import '../App.css'

class Board extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     squares: Array(9).fill(null),
  //     xIsNext: true,
  //   };
  // }

  

  renderSquare(i) {
    return (
      <Square
        // value={this.state.squares[i]}
        value={this.props.squares[i]}
        pushMyButton={() => this.props.onClick(i)}>
      </Square>
    );
  }

  render() {
    //  ----reduntant winner is now being calc in game Component.
    //  const winner = this.calculateWinner(this.state.squares);
    // let status;
    // if (winner) {
    //   status = 'Winner: ' + winner;
    // } else {
    //   status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    // }
    // console.log(this.state.squares);
    return (
      <div>
        {/* <div className="status">{status}</div> */}
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }


}


export default Board;
