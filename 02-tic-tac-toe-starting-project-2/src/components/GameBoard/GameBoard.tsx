  type PlayerSymbol = "X" | "O" | null;

  // type Turn = {
  //   square: { row: number; col: number };
  //   player: PlayerSymbol;
  // };

  type Props = {
    onSelectSquare: (rowIndex: number, colIndex: number) => void;
    board: GameBoard,
  }

  type GameBoard = PlayerSymbol[][];

const GameBoard = ({onSelectSquare, board}: Props) => {
  return (
    <>
      <ol id="game-board">
        {board.map((row, rowIndex) => <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => <li key={colIndex}>
              <button onClick={() => onSelectSquare(rowIndex, colIndex)}
                disabled={playerSymbol !== null}>
                {playerSymbol}
              </button>
            </li>)}
          </ol>
        </li>)}
      </ol>
    </>
  )
}

export default GameBoard;