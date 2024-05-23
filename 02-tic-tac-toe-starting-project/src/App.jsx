import { useState } from "react";

import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare() {
    setActivePlayer((curActive) => (curActive === "X" ? "O" : "X"));
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
          selectSquare={handleSelectSquare}
          playerSymbol={activePlayer}
        />
      </div>
      LOG
    </main>
  );
}

export default App;
