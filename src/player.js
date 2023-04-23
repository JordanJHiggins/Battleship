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

  const checkMove = () => {};
  return { gameBoard, fleet, playerName };
};

const player1 = Player('player1');

console.log(player1.gameBoard);
console.log(player1.gameBoard.createBoard());
console.log(player1.fleet.carrier);
