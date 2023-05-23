import Ship from './ship.js';
import GameBoard from './gameBoard.js';
import Player from './player.js';
import View from './view.js';
import './style.css';

// - Game Loop -

// Create new player instance
const player = Player('player');
player.gameBoard.createBoard();

const playerView = View(player);
playerView.renderBoard('player-grid');
playerView.renderShip(player.fleet.carrier);

const computer = Player('computer');
computer.gameBoard.createBoard();

const computerView = View('computer');
computerView.renderBoard('computer-grid');

// renderBoard(player.gameBoard.board);

// player1.gameBoard.placeShip(player1.fleet.cruiser, 'horizontal', 2, 4);

// // can attack at given coords, working.
// // player1.gameBoard.receiveAttack(2, 4);
// player1.gameBoard.receiveAttack(1, 2);

// // return totals hits on a ship, working.
// console.log(player1.fleet.cruiser.getTotalHits());

// // return coords of sucessfull hits, working.
// console.log(player1.gameBoard.beenHit);

// // return coords of a missed hit, working.
// console.log(player1.gameBoard.missedHit);
