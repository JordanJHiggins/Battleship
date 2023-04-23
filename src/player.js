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

  const attack = (x, y, gameBoard) => {
    // if (checkMove) return

    gameBoard.receiveAttack();
  };

  const randomAttack = () => {
    // if (checkMove return
  };

  const checkMove = (x, y, board) => {
    if (
      board.beenHit.forEach((coordPair) => {
        if (coordPair[0] === x && coordPair[1] === y) {
          return 'This space has already been hit';
        }
      })
    )
      return 'this space is Free';
  };

  return { gameBoard, fleet, playerName, checkMove };
};

const player1 = Player('player1');
