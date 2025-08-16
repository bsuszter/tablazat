const table = document.getElementById("demoTable");

function resetTable() {
  // minden celláról levesszük a kiemelést
  for (let row of table.rows) {
    for (let cell of row.cells) {
      cell.classList.remove("highlight", "range");
    }
  }
  // a tábláról levesszük a szegély osztályokat
  table.classList.remove(
    "table-border-none",
    "table-border-outer",
    "table-border-inner",
    "table-border-all",
    "table-border-left",
    "table-border-right",
    "table-border-top",
    "table-border-bottom"
  );
}


function highlightRow(rowIndex) {
  resetTable();
  let row = table.rows[rowIndex];
  for (let cell of row.cells) {
    cell.classList.add("highlight");
  }
}

function highlightColumn(colIndex) {
  resetTable();
  for (let i = 0; i < table.rows.length; i++) {
    if (table.rows[i].cells[colIndex]) {
      table.rows[i].cells[colIndex].classList.add("highlight");
    }
  }
}

function highlightCell(rowIndex, colIndex) {
  resetTable();
  let cell = table.rows[rowIndex].cells[colIndex];
  cell.classList.add("highlight");
}

function highlightHeader() {
  resetTable();
  for (let cell of table.tHead.rows[0].cells) {
    cell.classList.add("highlight");
  }
}

function highlightRange() {
  resetTable();
  for (let i = 2; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
      table.rows[i].cells[j].classList.add("range");
    }
  }
}

function setBorder(type) {
  resetTable();
  table.classList.add(`table-border-${type}`);
}
