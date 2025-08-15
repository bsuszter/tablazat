const buttons = document.querySelectorAll('.controls button');
const table = document.getElementById('demoTable');
const bodyRows = table.tBodies[0].rows; // csak a TBODY sorai

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    clearHighlights();
    const target = btn.dataset.target;

    if (target === 'reset') return;

    switch (target) {
      case 'sor':
        if (bodyRows[1]) bodyRows[1].classList.add('highlight-sor');
        break;

      case 'oszlop':
        for (const row of bodyRows) {
          const cell = row.cells[1];
          if (cell) cell.classList.add('highlight-oszlop');
        }
        break;

      case 'cella':
        if (bodyRows[1] && bodyRows[1].cells[2]) {
          bodyRows[1].cells[2].classList.add('highlight-cella');
        }
        break;

      case 'fejlec':
        const headCell = table.tHead?.rows[0]?.cells[0];
        if (headCell) headCell.classList.add('highlight-fejlec');
        break;
    }
  });
});

function clearHighlights() {
  [...table.querySelectorAll('tbody tr')].forEach(tr =>
    tr.classList.remove('highlight-sor')
  );
  [...table.querySelectorAll('td, th')].forEach(cell =>
    cell.classList.remove('highlight-oszlop', 'highlight-cella', 'highlight-fejlec')
  );
}
