import GameBoard from '../gameBoard';
import Ship from '../ship';

test('game board is of defined size', () => {
  const gameBoard = GameBoard();
  expect(gameBoard.createBoard(10)).toEqual([
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
  ]);
});

test('can place a ship at correct coordinates', () => {
  const testBoard = GameBoard();
  testBoard.createBoard();
  const testShip = Ship('carrier', 4);
  expect(testBoard.placeShip(testShip, 2, 4)).toEqual([
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [
      null,
      null,
      null,
      null,
      testShip,
      testShip,
      testShip,
      testShip,
      null,
      null,
    ],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
  ]);
});

test('can register a hit on the correct tile and ship', () => {
  const testBoard = GameBoard();
  const testShip = Ship('destroyer', 2);
  testBoard.createBoard();
  testBoard.placeShip(testShip, 4, 3);

  expect(testBoard.receiveAttack(4, 3)).toEqual(1);
});
