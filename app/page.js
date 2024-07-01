import Link from "next/link";

export default function Home() {
  return (
    <div className="home-content">
      <h1>Welcome to Daniel&apos;s Game Center!</h1>
      <p>Choose a game to play:</p>
      <div className="game-buttons">
        <Link className="game-button" href="/connect4">
         Connect 4
        </Link>
        <Link className="game-button" href="/tictactoe">
          Tic Tac Toe
        </Link>
      </div>
    </div>
  );
}
