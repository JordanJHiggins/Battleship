import Ship from './ship';

const GameBoard = () => {
  const boardSize = 10;
  let missedAttack = 0;

  // Todo: Gameboard will be array of= array, created with nested for loop.
  const createBoard = () => {
    const board = [];
    for (let i = 0; i < boardSize; i += 1) {
      const innerArray = [...Array(boardSize).keys()];
      board.push(innerArray);
    }
    return board;
  };
  const placeShip = () => {};
  const receiveAttack = () => {};
  const fleetSunk = () => {};

  return { placeShip, receiveAttack, fleetSunk, createBoard };
};

export default GameBoard;
