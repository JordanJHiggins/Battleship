const Ship = (name, length) => {
  let totalHits = 0;

  const hit = () => {
    totalHits += 1;
    return totalHits;
  };

  const isSunk = () => {};

  return { name, length, hit, totalHits };
};

const carrier = Ship('carrier', 2);

// console.log(carrier.hit());
// console.log(carrier.totalHits);

export default Ship;
