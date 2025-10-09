import React from 'react'

type Props = {}

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

const GameBoard = (props: Props) => {
  
  return (
    <>
      <ol id="game-board">
        {initialGameBoard.map((row, rowIndex) => <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => <li key={colIndex}>
              <button>{playerSymbol}</button>
            </li>)}
          </ol>
        </li>)}
      </ol>
    </>
  )
}

export default GameBoard;