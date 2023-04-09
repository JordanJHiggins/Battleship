export default const shipFactory = (name, length) => {
  const hit = () => {};
  const isSunk = () => {};
  return { name, length };
};

const carrier = shipFactory('carrier', 2);

console.log(carrier);
