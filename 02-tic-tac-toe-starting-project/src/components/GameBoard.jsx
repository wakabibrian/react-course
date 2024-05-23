import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ selectSquare, playerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectCell(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const updatedGameBoard = [...prevGameBoard.map((array) => [...array])];
      updatedGameBoard[rowIndex][colIndex] = playerSymbol;
      return updatedGameBoard;
    });

    selectSquare();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectCell(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
