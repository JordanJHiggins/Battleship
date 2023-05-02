// eslint-disable-next-line import/no-extraneous-dependencies

const renderBoard = () => {
  const gridOne = document.getElementById('grid-one');
  const gridTwo = document.getElementById('grid-two');

  for (let i = 0; i < 100; i++) {
    const row = parseInt(i / 10, 10);
    const col = i % 10;

    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.setAttribute('id', `player-position-${i}`);

    cell.setAttribute('data-X-coordinate', `${row}`);
    cell.setAttribute('data-Y-coordinate', `${col}`);

    gridOne.append(cell);
  }
};

export default renderBoard;
