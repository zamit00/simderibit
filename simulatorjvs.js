function highlightCell(cell) {
    // Reset all cells to the original color
    const cells = document.querySelectorAll('#choosesikon td');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'black';
    });

    // Highlight the clicked cell
    cell.style.backgroundColor = 'green';

    // Find the row and column index, adjusting for the header row and column
    const rowIndex = cell.parentElement.rowIndex - 1; // Subtract 1 for the header row
    const columnIndex = cell.cellIndex - 1; // Subtract 1 for the header column

    // Show an alert with the data-value, row, and column index
    alert(`Value: ${cell.getAttribute("data-value")}, Row: ${rowIndex}, Column: ${columnIndex}`);
}
