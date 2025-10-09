import React from 'react';

type PlayerSymbol = "X" | "O" | null;

type Turn = {
  square: { row: number; col: number };
  player: PlayerSymbol;
};
type Props = {
  turns: Turn[]
}

const Log = ({turns}: Props) => {
  return (
    <>
      <ol id="log">
        {turns.map((turn) => <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selected {turn.square.row}, {turn.square.col}
        </li>)}
      </ol>
    </>
  )
}

export default Log;