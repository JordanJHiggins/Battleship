// eslint-disable-next-line import/no-extraneous-dependencies

const renderBoard = () => {
  const gridOne = document.getElementById('grid-one');
  const gridTwo = document.getElementById('grid-two');

  for (let i = 0; i < 100; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.setAttribute('id', `player-position-${i}`);

    gridOne.append(cell);
  }
};

export default renderBoard;
