const Ship = (name, length) => {
  const shipLength = [...Array(length).keys()];
  let totalHits = 0;

  const hit = () => {
    totalHits += 1;
    return totalHits;
  };

  const isSunk = () => {
    // prevent players from playing same space twice.
    if (totalHits !== shipLength.length) {
      return false;
    }

    return true;
  };

  return { name, shipLength, hit, totalHits, isSunk };
};

export default Ship;
