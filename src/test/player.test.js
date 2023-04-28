import Ship from '../ship';
import GameBoard from '../gameBoard';
import Player from '../player';

test('player can attack the enemey game board.', () => {
  const testPlayer = Player('test player');
  testPlayer.gameBoard.createBoard();

  const testComp = Player('test comp');
  testComp.gameBoard.createBoard();

  testPlayer.gameBoard.placeShip(
    testPlayer.fleet.battleship,
    'horizontal',
    2,
    4
  );

  testComp.attack(2, 4, testPlayer.gameBoard);
  expect(testPlayer.fleet.battleship.getTotalHits()).toEqual(1);
});
