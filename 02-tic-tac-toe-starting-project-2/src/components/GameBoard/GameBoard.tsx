  type PlayerSymbol = "X" | "O" | null;

  type Turn = {
    square: { row: number; col: number };
    player: PlayerSymbol;
  };

  type Props = {
    onSelectSquare: (rowIndex: number, colIndex: number) => void;
    turns: Turn[]
  }

  type GameBoard = PlayerSymbol[][];

  const initialGameBoard: GameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];

const GameBoard = ({onSelectSquare, turns}: Props) => {
  const gameBoard = initialGameBoard;

  for(const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  return (
    <>
      <ol id="game-board">
        {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
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