function highlightCell(cell) {
    // מחזירים את כל התאים למצבם המקורי
    const cells = document.querySelectorAll('#choosesikon td');
    cells.forEach(c => {
        c.style.backgroundColor = 'black'; // צבע רקע שחור
    });

    // משנים את צבע הרקע של התא שנלחץ
    cell.style.backgroundColor = 'green'; // צבע רקע ירוק
}
