function highlightCell(cell) {
    // Reset all cells to the original color
    const cells = document.querySelectorAll('#choosesikon td');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'black';
    });

    // Highlight the clicked cell
    

    

    // Find the row and column index, adjusting for the header row and column
    const rowIndex = cell.parentElement.rowIndex ; // Subtract 1 for the header row
    const columnIndex = cell.cellIndex; // Subtract 1 for the header column
    let tkofabeshanim = parseInt(document.getElementById("selecttkofa").value);
    if((rowIndex===1 && tkofabeshanim>5) || (rowIndex===2 && (tkofabeshanim<=5 || tkofabeshanim>10))
    || (rowIndex===3 && (tkofabeshanim<=10 || tkofabeshanim>20)) || (rowIndex===4 && tkofabeshanim<=20)){ 
        alert('התקופה שנבחרה אינה תואמת לבחירה בטבלה'); return;
       
    }
    
    else{ 
        cell.style.backgroundColor = 'green';
let x1 = parseInt(document.getElementsByName("txt1")[0].value);
let x2 = parseInt(document.getElementsByName("txt2")[0].value);
let dn = parseFloat(document.getElementsByName("dmeynihul")[0].value);
let ribitchoose = cell.getAttribute("data-value");
let ribitOzar = 0.04;



// בדיקות תקינות
if (isNaN(x1) || isNaN(x2) || x1 < 0 || x2 < 0) {
    alert('סכומים לא תקינים');
    numbermakor0(); // הנחיות לפונקציה זו
    return;
}

if (isNaN(dn) || dn < 0 || dn > 1) {
    alert('דמי ניהול לא תקינים');
    numbermakor0(); // הנחיות לפונקציה זו
    return;
}


//console.log(x1, x2, dn, ribitchoose, ribitOzar);//
if (document.getElementById("rd1").checked){x1=x1;x2=x2;}
else if (document.getElementById("rd2").checked){x1=x1;x2=0;}
else{x1=0;x2=x2;}

sumsum(x1, x2, dn, ribitchoose, ribitOzar,tkofabeshanim,columnIndex)




    }
    
    
    
}

function beforsumsum(){
    const cells = document.querySelectorAll('#choosesikon td');
let greenCellFound = false; // Flag to track if any green cell is found

cells.forEach(cell => {
    if (cell.style.backgroundColor === 'green') {
        ribitchoose = cell.getAttribute("data-value");
        greenCellFound = true; // Set the flag to true if a green cell is found
   
    
    const rowIndex = cell.parentElement.rowIndex ; // Subtract 1 for the header row
    const columnIndex = cell.cellIndex; // Subtract 1 for the header column
    let tkofabeshanim = parseInt(document.getElementById("selecttkofa").value);
    if((rowIndex===1 && tkofabeshanim>5) || (rowIndex===2 && (tkofabeshanim<=5 || tkofabeshanim>10))
    || (rowIndex===3 && (tkofabeshanim<=10 || tkofabeshanim>20)) || (rowIndex===4 && tkofabeshanim<=20)){ 
        alert(' בצע בחירה מתאימה בטבלה'); 
        cells.forEach(cell => {
        cell.style.backgroundColor = 'black';
    });
        document.getElementById('tbltozza').rows[1].cells[0].innerText='';
        document.getElementById('tbltozza').rows[1].cells[1].innerText='';
        document.getElementById('tbltozza').rows[2].cells[0].innerText='';
        document.getElementById('tbltozza').rows[3].cells[0].innerText='';
        document.getElementById('tbltozza').rows[4].cells[0].innerText='';
        document.getElementById('tbltozza').rows[2 ].cells[1].innerText='';
        document.getElementById('tbltozza').rows[3].cells[1].innerText='';
        document.getElementById('tbltozza').rows[4].cells[1].innerText='';
        document.getElementById('tbltozza').rows[1].cells[2].innerText='';
        document.getElementById('tbltozza').rows[2].cells[2].innerText='';
        document.getElementById('tbltozza').rows[3].cells[2].innerText='';
        document.getElementById('tbltozza').rows[4].cells[2].innerText='';
        return;
       
    }
    
    
    
    
    
    
    }
});

// Show alert if no green cell was found
if (!greenCellFound) {
    return;
}
else{
    


    //if(isNaN(ribitchoose)){alert("");return;}//
    let x1 = parseInt(document.getElementsByName("txt1")[0].value);
    let x2 = parseInt(document.getElementsByName("txt2")[0].value);  
    let dn = parseFloat(document.getElementsByName("dmeynihul")[0].value);
    // בדיקות תקינות
if (isNaN(x1) || isNaN(x2) || x1 < 0 || x2 < 0) {
    alert('סכומים לא תקינים');
    numbermakor0(); // הנחיות לפונקציה זו
    return;
}

if (isNaN(dn) || dn < 0 || dn > 1) {
    alert('דמי ניהול לא תקינים');
    numbermakor0(); // הנחיות לפונקציה זו
    return;
}

    
    
   
    let tkofabeshanim = parseInt(document.getElementById("selecttkofa").value);
    let ribitOzar = 0.04;
    if (document.getElementById("rd1").checked){x1=x1;x2=x2;}
    else if (document.getElementById("rd2").checked){x1=x1;x2=0;}
    else{x1=0;x2=x2;}

    sumsum(x1, x2, dn, ribitchoose, ribitOzar,columnIndex);


}
}

function sumsum(x1, x2, dn, ribitchoose, ribitOzar,tkofabeshanim,colu){ 

    ribitOzar=(ribitOzar-dn/100);
    ribitchoose=(ribitchoose-dn/100);
    let sum1 = hishuv(x1,x2,ribitOzar,tkofabeshanim);
     
    document.getElementById('tbltozza').rows[1].cells[1].innerText=parseInt(sum1).toLocaleString();
    console.log(parseInt(sum1));
    let sum2=hishuv(x1,x2,ribitchoose,tkofabeshanim);
    
    document.getElementById('tbltozza').rows[1].cells[2].innerText=parseInt(sum2).toLocaleString();
   console.log(parseInt(sum2));

    document.getElementById('tbltozza').rows[1].cells[0].innerText='תקופה של ' + tkofabeshanim + ' שנים';
    
    if(tkofabeshanim<10){
    document.getElementById('tbltozza').rows[2].cells[0].innerText='תקופה של 10 שנים'
     sum1 = hishuv(x1,x2,ribitOzar,10);
    document.getElementById('tbltozza').rows[2].cells[1].innerText=parseInt(sum1).toLocaleString();
    console.log(parseInt(sum1));
    if(colu===1){
     sum2=hishuv(x1,x2,0.06-dn/100,10);}
     else if(colu===2){
        sum2=hishuv(x1,x2,0.05-dn/100,10);}
        
     else{
        sum2=hishuv(x1,x2,0.03-dn/100,10);
     } 

    document.getElementById('tbltozza').rows[2].cells[2].innerText=parseInt(sum2).toLocaleString();
    console.log(parseInt(sum2));}
    else{
        document.getElementById('tbltozza').rows[2].cells[0].innerText='';

    }


    if(tkofabeshanim<20){
    document.getElementById('tbltozza').rows[3].cells[0].innerText='תקופה של 20 שנים'
    sum1 = hishuv(x1,x2,ribitOzar,20);
    
    document.getElementById('tbltozza').rows[3].cells[1].innerText=parseInt(sum1).toLocaleString();
    console.log(parseInt(sum1));
    if(colu===1){
        sum2=hishuv(x1,x2,0.07-dn/100,20);}
        else if(colu===2){
           sum2=hishuv(x1,x2,0.06-dn/100,20);}
        else{
           sum2=hishuv(x1,x2,0.04-dn/100,20);
        }
    
    document.getElementById('tbltozza').rows[3].cells[2].innerText=parseInt(sum2).toLocaleString();
  console.log(parseInt(sum2));}
    else{
        document.getElementById('tbltozza').rows[3].cells[0].innerText='';

    }
    
    

    sum1 = hishuv(x1,x2,ribitOzar,30);
    document.getElementById('tbltozza').rows[4].cells[0].innerText='תקופה של 30 שנים'
    
    document.getElementById('tbltozza').rows[4].cells[1].innerText=parseInt(sum1).toLocaleString();

    console.log(parseInt(sum1));
    if(colu===1){
        sum2=hishuv(x1,x2,0.08-dn/100,30);}
        else if(colu===2){
           sum2=hishuv(x1,x2,0.07-dn/100,30);}
        else{
           sum2=hishuv(x1,x2,0.04-dn/100,30);
        }
    
    document.getElementById('tbltozza').rows[4].cells[2].innerText=parseInt(sum2).toLocaleString();
 console.log(parseInt(sum2));



}

function hishuv(schom1,schom2,ribit,tkofa){
    let hishuv = schom1 + schom2;
    hishuv=hishuv * (1+ribit/12);
    for (let i = 1; i < tkofa*12; i++) {
        hishuv = (hishuv+schom2) * (1+ribit/12);
    }
    return hishuv;
}

function toggleTextboxes() {
    const text1 = document.getElementById("tx1");
    const text2 = document.getElementById("tx2");
    
    if (document.getElementById("rd1").checked) {
    text1.disabled = false;
    text2.disabled = false;
    numbermakor1();
    
    } else if (document.getElementById("rd2").checked) {
       
    text1.disabled = false;
    text2.disabled = true;
    
    numbermakor2();
    
    
    } else if (document.getElementById("rd3").checked) {
    text1.disabled = true;
    text2.disabled = false;
    numbermakor3();
    }
    }
    function numbermakor0(){document.getElementById("tx1").value=1000;document.getElementById("tx2").value=200;}
    
    function numbermakor1(){
    if(document.getElementById("tx1").value<0 || document.getElementById("tx1").value<0 ){alert('סכומים לא תקינים');numbermakor0();return;}
    
    if(document.getElementById("tx1").value==0){document.getElementById("tx1").value=1000;}
    if(document.getElementById("tx2").value==0){document.getElementById("tx2").value=200;}
    
    } 
    function numbermakor2(){
    if(document.getElementById("tx1").value<0 ){alert('סכום לא תקין');return;}
    if(document.getElementById("tx1").value==0){document.getElementById("tx1").value=1000;}
    document.getElementById("tx2").value=0;
    
    } 
    function numbermakor3(){
    if(document.getElementById("tx2").value<0 ){alert('סכום לא תקין');return;}
    if(document.getElementById("tx2").value==0){document.getElementById("tx2").value=200;}
    document.getElementById("tx1").value=0;
    
    } 
    




/*


window.onload = function() {

   
    sumsum();}

function gotohome(){
    window.location.href = 'index.html';
   
}


function part(partx){
    let part = partx.toString().split(".");
    let integerPart = part[0]; // "123"
    integerPart=integerPart.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    part=integerPart;
    return part;

}
function gotosheelon(){
   
    localStorage.removeItem('savedMessage');
    document.getElementById("opn").style.display = "none";
    document.getElementById("cls").style.display = "block";
    document.getElementById("alltozaa").style.display = "none";
    document.getElementById("iframe").style.display = "block";

    const iframe = document.getElementById('myIframe');

    iframe.contentWindow.postMessage('clearAnswers', '*');
    iframe.style.display = 'block';
}
function backfromsheelon(){
    let touser="";
    document.getElementById("opn").style.display = "block";
    document.getElementById("cls").style.display = "none";
    document.getElementById("iframe").style.display = "none";
    document.getElementById("alltozaa").style.display = "block";
    document.getElementById("sikonnimdad").style.display = "none";
    const savedMessage = localStorage.getItem('savedMessage');
    if (savedMessage) {touser=savedMessage;
         document.getElementById("sikonnimdad").style.height="110px";
        document.getElementById("sikonnimdad").innerText='סיכון ' + touser;
    } else {
       document.getElementById("sikonnimdad").style.height="110px";
        touser="לא בוצע שאלון";
        document.getElementById("sikonnimdad").innerText=touser;
    }
    
    document.getElementById("sikonnimdad").style.display = "block";
    localStorage.removeItem('savedMessage');
    return;
       
}
function gotomaslul() {
    
   //const targetWindow = window.open('https://zamit00.github.io/HZgemel/', '_blank');
   //const message = document.getElementById("sikonnimdad").innerText;
   //if (message !== ''){
  // targetWindow.postMessage(message, 'https://zamit00.github.io/HZgemel/');}
   window.location.href = 'netunim.html';
   
}
   */
