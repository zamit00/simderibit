function highlightCell(cell) {
    // Reset all cells to original color
    const cells = document.querySelectorAll('#choosesikon td');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'black';
    });

    // Highlight the clicked cell
    cell.style.backgroundColor = 'green';

    // Find the row and column index
    const rowIndex = cell.parentElement.rowIndex; // Get the row index of the cell
    const columnIndex = cell.cellIndex; // Get the column index of the cell

    // Show an alert with the data-value, row, and column index
    alert(`Value: ${cell.getAttribute("data-value")}, Row: ${rowIndex}, Column: ${columnIndex}`);
}
