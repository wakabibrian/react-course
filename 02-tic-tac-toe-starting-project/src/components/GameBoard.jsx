import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare }) {
  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   function handleSelectCell(rowIndex, colIndex) {
  //     setGameBoard((prevGameBoard) => {
  //       const updatedGameBoard = [...prevGameBoard.map((array) => [...array])];
  //       updatedGameBoard[rowIndex][colIndex] = playerSymbol;
  //       return updatedGameBoard;
  //     });

  //     onSelectSquare();
  //   }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={onSelectSquare}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
