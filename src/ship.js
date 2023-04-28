const Ship = (name, length) => {
  const shipLength = length;
  let totalHits = 0;

  const hit = () => {
    totalHits += 1;

    return totalHits;
  };

  const getTotalHits = () => totalHits;

  const isSunk = () => {
    // Rework this, push ship to sunk array if hits > shipLength?
    if (totalHits !== shipLength) {
      return false;
    }

    return true;
  };

  return { name, shipLength, hit, totalHits, isSunk, getTotalHits };
};

export default Ship;
