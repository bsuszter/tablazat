const svg = document.getElementById('tbl');
const panel = document.querySelector('.panel');

function clearAll() {
  svg.classList.remove('active-row', 'active-col', 'active-header', 'active-grid');
  document.querySelectorAll('.cell').forEach(c => c.classList.remove('active-cell'));
}

panel.addEventListener('click', (e) => {
  const action = e.target.dataset.action;
  if (!action) return;

  if (action === 'reset') {
    clearAll();
    return;
  }

  clearAll();
  switch (action) {
    case 'cell':
      document.getElementById('example-cell').classList.add('active-cell');
      break;
    case 'row':
      svg.classList.add('active-row');
      break;
    case 'col':
      svg.classList.add('active-col');
      break;
    case 'header':
      svg.classList.add('active-header');
      break;
    case 'grid':
      svg.classList.add('active-grid');
      break;
  }
});

svg.addEventListener('click', (e) => {
  if (e.target.matches('.cell')) {
    clearAll();
    e.target.classList.add('active-cell');
  }
});
