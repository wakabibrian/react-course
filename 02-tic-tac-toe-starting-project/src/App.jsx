import { useState } from "react";

import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActive) => (curActive === "X" ? "O" : "X"));

    setGameTurns((prevTurns) => {
      let currentPlayer = "X";

      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...gameTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialPlayer="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialPlayer="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          playerSymbol={activePlayer}
        />
      </div>
      <Log />
    </main>
  );
}

export default App;
