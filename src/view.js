// eslint-disable-next-line import/no-extraneous-dependencies
const View = (playerName) => {
  // const playerGrid = document.getElementById('player-grid');
  // const computerGrid = document.getElementById('computer-grid');

  const renderBoard = (grid) => {
    const currentGrid = document.getElementById(grid);

    for (let i = 0; i < 100; i++) {
      const row = parseInt(i / 10, 10);
      const col = i % 10;

      const cell = document.createElement('div');
      cell.classList.add(`cell`);
      cell.setAttribute('id', `player-cell-${i}`);
      cell.setAttribute('data-X-coordinate', `${row}`);
      cell.setAttribute('data-Y-coordinate', `${col}`);

      currentGrid.append(cell);
    }
  };
  // How to select adjacent tiles, increment Y coord?
  const renderShip = (ship) => {
    const currentGrid = document.querySelector('#player-grid');
    currentGrid.addEventListener('click', (e) => {
      e.target.classList.add('attack');
      const siblings = e.target.parentElement.children;
      const index = Array.from(siblings).indexOf(e.target);
      for (
        let i = index + 1;
        i < index + ship.shipLength && i < siblings.length;
        i++
      ) {
        siblings[i].classList.add('attack');
      }
    });
  };

  return { renderBoard, renderShip };
};
export default View;
