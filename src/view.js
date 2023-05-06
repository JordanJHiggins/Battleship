// eslint-disable-next-line import/no-extraneous-dependencies
const View = (playerName) => {
  const playerGrid = document.getElementById('player-grid');
  // const computerGrid = document.getElementById('computer-grid');

  const validatePlacement = (event, ship) => {
    const siblings = event.target.parentElement.children;
    const index = Array.from(siblings).indexOf(event.target);

    // Check if cells in ships placement range already have 'attack' class.
    for (
      let i = index;
      i < index + ship.shipLength && i < siblings.length;
      i++
    ) {
      if (siblings[i].classList.contains('attack')) return false;
    }

    // Check if the last cell in ships placement range wraps to next row.
    const lastCell = siblings[index + ship.shipLength - 1];
    if (lastCell.getAttribute('data-y-coordinate') === '0') return false;

    return true;
  };

  const renderBoard = (grid) => {
    const currentGrid = document.getElementById(grid);

    for (let i = 0; i < 100; i++) {
      const row = parseInt(i / 10, 10);
      const col = i % 10;

      const cell = document.createElement('div');
      cell.classList.add(`cell`);
      cell.setAttribute('id', `player-cell-${i}`);
      cell.setAttribute('data-x-coordinate', `${row}`);
      cell.setAttribute('data-y-coordinate', `${col}`);

      currentGrid.append(cell);
    }
  };
  // How to select adjacent tiles, increment Y coord?
  const renderShip = (ship) => {
    const currentGrid = document.querySelector('#player-grid');

    currentGrid.addEventListener('click', (event) => {
      if (validatePlacement(event, ship) === false) return;

      event.target.classList.add('attack');

      const siblings = event.target.parentElement.children;
      const index = Array.from(siblings).indexOf(event.target);

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
