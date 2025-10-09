import { useState } from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard';
import Player from './components/Player/Player';
import Log from './components/Log/Log';
import { WINNING_COMBINATIONS } from './utils/winning-combinatons/winning-combinations';
import GameOver from './components/GameOver/GameOver';

type PlayerSymbol = "X" | "O" | null;

type Turn = {
  square: { row: number; col: number };
  player: PlayerSymbol;
};

type PlayerName = {
  X: string;
  O: string;
}

const PLAYERS: PlayerName = {
  X: "Player 1",
  O: "Player 2",
}

const INITIAL_GAME_BOARD: GameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

const deriveActivePlayer = (gameTurns: Turn[]) => {
  let currentPlayer: PlayerSymbol = "X";
  if(gameTurns?.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
};

const derivedWinner = (gameBoard:GameBoard, players: Record<Exclude<PlayerSymbol, null>, string>) => {
  let winner: string | null = null;
  for(const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if(firstSquareSymbol && 
      firstSquareSymbol === secondSquareSymbol && 
      firstSquareSymbol === thirdSquareSymbol) {
        winner = players[firstSquareSymbol];
    }
  }
  return winner;
};

function App() {
  const[players, setPlayers] = useState(PLAYERS);

  const[gameTurns, setGameTurns] = useState<Turn[]>([]);
  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

  for(const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  const winner = derivedWinner(gameBoard, players);
  const isDraw = gameTurns.length === 9 && !winner;

  const handleSelectSquare = (rowIndex: number, colIndex: number) => {
    setGameTurns((prevTurns) => {
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

  const handleRestart = () => {
    setGameTurns([]);
  };

  const handlePlayerNameChange = (symbol: string, newName: string) => {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  };

  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              name={PLAYERS.X}
              isActive={activePlayer === "X"}
              symbol="X"
              onChangeName={handlePlayerNameChange}/>
            <Player
              name={PLAYERS.O}
              isActive={activePlayer === "O"}
              symbol="O"
              onChangeName={handlePlayerNameChange}/>
          </ol>
          {(winner || isDraw) && <GameOver onRestart={handleRestart} winner={winner}/>}
          <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
        </div>
      </main>
      <Log turns={gameTurns}/>
    </>
  )
};

export default App;
