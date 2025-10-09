import { useState } from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard';
import Player from './components/Player/Player';
import Log from './components/Log/Log';

type PlayerSymbol = "X" | "O" | null;

type Turn = {
  square: { row: number; col: number };
  player: PlayerSymbol;
};

const deriveActivePlayer = (gameTurns: Turn[]) => {
  let currentPlayer: PlayerSymbol = "X";

  if(gameTurns?.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
};

function App() {
  // const[activePlayer, setActivePlayer] = useState<PlayerSymbol>("X");
  const[gameTurns, setGameTurns] = useState<Turn[]>([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  const handleSelectSquare = (rowIndex: number, colIndex: number) => {
    // setActivePlayer((curActivePlayer) => curActivePlayer === "X" ? "O" : "X");
    setGameTurns((prevTurns) => {
      // let currentPlayer: PlayerSymbol = "X";

      // if(prevTurns?.length > 0 && prevTurns[0].player === "X") {
      //   currentPlayer = "O";
      // }

      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [{ square: {
        row: rowIndex,
        col: colIndex
      }, 
      player: currentPlayer
    }, ...prevTurns];
      return updatedTurns;
    });
  };

  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player name="Player 1" isActive={activePlayer === "X"} symbol="X"/>
            <Player name="Player 2" isActive={activePlayer === "O"} symbol="O"/>
          </ol>
          <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
        </div>
      </main>
      <Log turns={gameTurns}/>
    </>
  )
}

export default App;
