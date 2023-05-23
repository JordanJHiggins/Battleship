import GameBoard from './gameBoard.js';
import Ship from './ship.js';

const Player = (name) => {
  const playerName = name;
  const gameBoard = GameBoard();
  const fleet = {
    carrier: Ship('carrier', 5),
    battleship: Ship('battleship', 4),
    cruiser: Ship('cruiser', 3),
    submarine: Ship('submarine', 3),
    destroyer: Ship('destroyer', 2),
  };

  const validateAttack = (x, y, board) => {
    if (
      board.beenHit.forEach((coordPair) => {
        if (coordPair[0] === x && coordPair[1] === y) {
          return true;
        }
      })
    )
      return false;
  };

  const attack = (x, y, board) => {
    if (validateAttack(x, y, board) === false) gameBoard.receiveAttack(x, y);
  };

  const randomAttack = (board) => {
    const randomX = Math.floor(Math.random() * (9 - 0 + 0) + 0);
    const randomY = Math.floor(Math.random() * (9 - 0 + 0) + 0);

    if (validateAttack(randomX, randomY, board) !== true) {
      return board.receiveAttack(randomX, randomY);
    }

    return board.missedHit();
  };

  return { gameBoard, fleet, playerName, validateAttack, attack, randomAttack };
};

export default Player;
