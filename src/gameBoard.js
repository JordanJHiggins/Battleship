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

  const receiveAttack = () => {};
  const fleetSunk = () => {};

  return { placeShip, receiveAttack, fleetSunk, createBoard, board };
};

// Logic Testing
// const testBoard = GameBoard();
// const testShip = Ship('Dinghy', 4);
// testBoard.createBoard();
// testBoard.placeShip(testShip, 2, 4);

// console.log(testBoard.board);

export default GameBoard;
