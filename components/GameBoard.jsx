import "./gameBoard.css";

function GameBoard({ winner, handleNewGame, handleMove, board, hasDraw }) {
  if (winner === "Red Player") {
    winner = "the Red Player";
  } else if (winner === "Yellow Player") {
    winner = "the Yellow Player";
  }

  return (
    <div className="game-container">
      {winner && (
        <div className="winner-announcement">
          The winner is {winner}!
          <button className="rematch-button" onClick={handleNewGame}>
            Rematch
          </button>
        </div>
      )}
      {hasDraw && (
        <div className="winner-announcement">
          It&apos;s a Draw !
          <button className="rematch-button" onClick={handleNewGame}>
            Rematch
          </button>
        </div>
      )}
      <div className="game-board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, columnIndex) => (
              <div
                key={columnIndex}
                className="cell"
                onClick={() => handleMove(columnIndex)}
              >
                {/* Render player's token or empty slot */}
                {cell && <div className={`token ${cell}`} />}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameBoard;
