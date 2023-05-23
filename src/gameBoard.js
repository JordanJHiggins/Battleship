/* eslint-disable no-plusplus */
// eslint-disable-next-line import/extensions
import Ship from './ship.js';
import View from './view.js';

const GameBoard = () => {
  const boardSize = 100;
  const beenHit = [];
  const missedHit = [];
  const board = [];

  const createBoard = () => {
    for (let i = 0; i < boardSize; i++) {
      const innerArray = new Array(boardSize).fill(null);
      board.push(innerArray);
    }
    return board;
  };

  const placeShip = (shipObj, orientation, x, y) => {
    const length = shipObj.shipLength;

    if (orientation === 'horizontal') {
      for (let i = 0; i < length; i++)
        if (board[x][y + i] === null) {
          board[x][y + i] = shipObj;
        }
    } else if (orientation === 'vertical') {
      for (let i = 0; i < length; i++)
        if (board[x][y + i] === null) {
          board[x + i][y] = shipObj;
        }
    }
    return board;
  };

  const receiveAttack = (x, y) => {
    if (board[x][y] === null) {
      missedHit.push([x, y]);
      return false;
    }
    beenHit.push([x, y]);
    board[x][y].hit();
    return true;
  };

  const fleetSunk = () => {};

  return {
    placeShip,
    receiveAttack,
    fleetSunk,
    createBoard,
    board,
    beenHit,
    missedHit,
  };
};
export default GameBoard;
