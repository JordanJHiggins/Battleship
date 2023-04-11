import Ship from '../ship';

test('Has a defined length', () => {
  const testShip = Ship('carrier', 3);
  expect(testShip.shipLength).toEqual([0, 1, 2]);
});

test('Should increment hit counter by 1 when hit', () => {
  const testShip = Ship('dinghy', 4);
  expect(testShip.hit()).toBe(1);
  expect(testShip.hit()).toBe(2);
  expect(testShip.hit()).toBe(3);
});

test('if hits exceed length, sunk is true', () => {
  const testShip = Ship('dinghy', 2);
  testShip.hit();
  testShip.hit();
  expect(testShip.isSunk()).toEqual(true);
});
