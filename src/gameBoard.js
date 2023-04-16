// eslint-disable-next-line import/extensions
import Ship from './ship.js';

const GameBoard = () => {
  const boardSize = 10;
  let missedAttack = 0;
  const board = [];

  const createBoard = () => {
    // const board = [];
    for (let i = 0; i < boardSize; i += 1) {
      const innerArray = [...Array(boardSize).keys()];
      board.push(innerArray);
    }
    return board;
  };

  const placeShip = (shipObj, coordA, coordB) => {
    const length = shipObj.shipLength;

    if (board[coordA]) {
      board[coordA].splice(coordB, length, ...shipObj.shipArray);
    }
    return board;
  };

  const receiveAttack = (coordA, coordB) => {
    if (typeof board[coordA][coordB] !== 'string') {
      return 'nope';
    }

    return board[coordA][coordB];
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
console.log(dinghy);
console.log(testBoard);

export default GameBoard;
