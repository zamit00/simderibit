function highlightCell(cell) {
    // מחזירים את כל התאים למצבם המקורי
    const cells = document.querySelectorAll('#choosesikon td');
    cells.forEach(cell=> {
        c.style.backgroundColor = 'black'; // צבע רקע שחור
    });

    // משנים את צבע הרקע של התא שנלחץ
    cell.style.backgroundColor = 'green'; // צבע רקע ירוק
    alert(cell.getAttribute("data-value"));
    
    
}
