import React, { useState } from "react";
import ReactDOM, { render } from "react-dom";

function Square({ value, squareColor, onClick}) {
  return (
    <button className="square" style={{background:{squareColor}}} onClick={onClick}>
      {value}
    </button>
  );
}

function GameBoard() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [color, setColor] = useState('white');

  function renderSquare(i) {
    return (
      <Square
        value={squares[i]} 
        squareColor={setColor('red')}
        onClick={() => {
          if (squares[i] != null) {
            return;
          }
          const nextSquares = squares.slice();
          nextSquares[i] = 1;
          setSquares(nextSquares);
        }}
      />
    );
  }

  return (
    <div className="container">
      <div className="game">
        <div className="game-board">
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameBoard;
