/* eslint-disable no-plusplus */
// eslint-disable-next-line import/extensions
import Ship from './ship.js';

const GameBoard = () => {
  const boardSize = 10;
  let missedAttack = 0;
  const board = [];
  // Push placed ships to fleet array?

  const createBoard = () => {
    for (let i = 0; i < boardSize; i++) {
      const innerArray = new Array(boardSize).fill(null);
      board.push(innerArray);
    }
    return board;
  };

  const placeShip = (shipObj, x, y) => {
    const length = shipObj.shipLength;

    for (let i = 0; i < length; i++)
      if (board[x][y + i] === null) {
        board[x][y + i] = shipObj;
        // board[coordA].splice(coordB, length, shipObj);
      }
    return board;
  };

  const receiveAttack = (x, y) => {
    const ship = board[x][y];
    if (typeof ship !== 'object') {
      return 'nope';
    }
    return board[x][y].hit();
  };
  const fleetSunk = () => {};

  return { placeShip, receiveAttack, fleetSunk, createBoard, board };
};

// Logic Testing
const testBoard = GameBoard();
const dinghy = Ship('dinghy', 4);
testBoard.createBoard();
testBoard.placeShip(dinghy, 2, 4);

console.log(testBoard.receiveAttack(2, 4));
console.log(testBoard.receiveAttack(2, 4));
console.log(testBoard);

export default GameBoard;
