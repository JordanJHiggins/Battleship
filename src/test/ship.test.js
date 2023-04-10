import Ship from '../ship';

test('Has a defined length', () => {
  const testShip = Ship(3);
  expect(testShip.length.toEqual(3));
});
