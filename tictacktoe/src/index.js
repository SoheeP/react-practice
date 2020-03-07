import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  //props = value, onClck이 있는 객체
  return ( 
  <button className = "square"
    onClick = {props.onClick}> 
    {props.value} 
    </button>
  );
}

class Board extends React.Component {

  renderSquare(i) {
    return (
      <Square 
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)} 
      />
    );
  }

  render() {
    return (
      <div>
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

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true,
    }
  }

  handleClick(i){
    // 사본배열
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[this.state.stepNumber];
    const squares = current.squares.slice();
    if(calcuateWinner(squares) || squares[i]){
      return;
    }
    squares[i] = this.state.xIsNext? 'X' : 'O';
    this.setState({ 
      history: history.concat([{
        squares : squares
      }]),
      stepNumber: history.length,
      xIsNext : !this.state.xIsNext
    });
  }

  jumpTo(step){
    this.setState({
      stepNumber: step,
      xIsNext: (step%2) === 0
      // X가 첫번째로 시작하기 때문
    })
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calcuateWinner(current.squares);

    const moves = history.map((step, move)=>{
      const desc = move 
      ? 'Go to move #' + move
      : 'Go to game start';
      return (
      <li key={move}>
        <button onClick={()=> this.jumpTo(move)}>{desc}</button>
      </li>
      );
    });

    let status;
    if(winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    
    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares = {current.squares} 
            onClick = {(i)=>this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calcuateWinner(squares){
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
  for(let i = 0; i < lines.length ; i++){
    const [a, b, c] = lines[i];
    // 승자라면, 저 lines배열과 일치하는 자리에 X 혹은 O값을 가지고 있을 것이므로 모두 같은 열을 찾는다.
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
