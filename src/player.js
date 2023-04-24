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

  const checkMove = (x, y, board) => {
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
    if (checkMove(x, y, board)) gameBoard.receiveAttack(x, y);
  };

  const randomAttack = (board) => {
    const randomX = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    const randomY = Math.floor(Math.random() * (10 - 1 + 1) + 1);

    if (checkMove(randomX, randomY, board) !== true) {
      return board.receiveAttack(randomX, randomY);
    }
    console.log('bingbong');
  };

  return { gameBoard, fleet, playerName, checkMove, attack, randomAttack };
};

const player1 = Player('player1');

// LOGIC TESTING
console.log(player1.gameBoard.createBoard());
console.log(
  player1.gameBoard.placeShip(player1.fleet.carrier, 'horizontal', 2, 4)
);
console.log(player1.gameBoard.receiveAttack(2, 4));
// console.log(player1.gameBoard.beenHit);
// console.log(player1.checkMove(2, 4, player1.gameBoard));
console.log(player1.randomAttack(player1.gameBoard));
