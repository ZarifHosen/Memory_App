import { useEffect } from "react";

const Header = ({ handleNewGame, wins }) => {
  useEffect(() => (document.title = `${wins} wins`), [wins]);

  return (
    <header className="header">
      <h2>Wins: {wins}</h2>
      <h1>Memory Game</h1>
      <button onClick={handleNewGame}>New Game</button>
    </header>
  );
};

export default Header;
