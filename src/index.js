import Ship from './ship.js';
import GameBoard from './gameBoard.js';
import Player from './player.js';

// Logic testing
const player1 = Player('player1');

player1.gameBoard.placeShip(player1.fleet.battleship, 'horizontal', 2, 4);

console.log(player1.gameBoard);
