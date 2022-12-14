document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;

    if (e.keyCode === 39) {
        moveRight();
    } else if (e.keyCode === 40) {
        moveDown();
    } else if (e.keyCode === 13) {
        removeCallOut();
    }
}
let buttonRat = '<p id="rat">🐭</p>';
let badCallOut = `<div class="callout-header">No More Then Three Steps In One Direction!!!</div>
<span class="closebtn" onclick="removeCallOut()";">×</span>
<div class="callout-container">`;
let goodCallOut = `<div style="background-color: green;" class="callout-header">Congratulation</div>
<span class="closebtn" onclick="removeCallOut()";">×</span>
<div class="callout-container">`;
let columnCounter = 1;
let rowCounter = 1;
let rightclickCounter = 0;
let downclickCounter = 0;

function moveRight() {
    let y = columnCounter;
    let z = rowCounter;
    if (rightclickCounter < 3) {
        document.getElementById('column' + ++y + 'row' + z).innerHTML = buttonRat;
        ++columnCounter;
        document.getElementById('column' + --y + 'row' + z).innerHTML = '';
        rightclickCounter++;
        downclickCounter = 0;
    } else {
        checkClickCounter();
    }
    if (document.getElementById('column7row5').innerHTML == buttonRat) {
        GoodCallOut();
        document.getElementById('column7row5').innerHTML = '';
        document.getElementById('column1row1').innerHTML = buttonRat;
        columnCounter = 1;
        rowCounter = 1;
    }
}

function moveDown() {
    let y = columnCounter;
    let z = rowCounter;
    if (downclickCounter < 3) {
        document.getElementById('column' + y + 'row' + ++z).innerHTML = buttonRat;
        ++rowCounter;
        document.getElementById('column' + y + 'row' + --z).innerHTML = '';
        downclickCounter++;
        rightclickCounter = 0;
    } else {
        checkClickCounter();
    }
    if (document.getElementById('column7row5').innerHTML == buttonRat) {
        GoodCallOut();
        document.getElementById('column7row5').innerHTML = '';
        document.getElementById('column1row1').innerHTML = buttonRat;
        columnCounter = 1;
        rowCounter = 1;
    }
}

function checkClickCounter() {
    let y = columnCounter;
    let z = rowCounter;
    if (rightclickCounter == 3) {
        document.getElementById('column1row1').innerHTML = buttonRat;
        document.getElementById('column' + y + 'row' + z).innerHTML = '';
        columnCounter = 1;
        rowCounter = 1;
        rightclickCounter = 0;
        downclickCounter = 0;
        document.getElementById('column' + y + 'row' + z).innerHTML = '';
        BadCallOut();
    } else if (downclickCounter == 3) {
        document.getElementById('column1row1').innerHTML = buttonRat;
        document.getElementById('column' + y + 'row' + z).innerHTML = '';
        columnCounter = 1;
        rowCounter = 1;
        downclickCounter = 0;
        rightclickCounter = 0;
        document.getElementById('column' + y + 'row' + z).innerHTML = '';
        BadCallOut();
    }
}
function removeCallOut() {
    document.getElementById('callout').innerHTML = '';
    columnCounter = 1;
    rowCounter = 1;
    downclickCounter = 0;
    rightclickCounter = 0;
}
function BadCallOut() {
    document.getElementById('callout').innerHTML = badCallOut;
}
function GoodCallOut() {
    document.getElementById('callout').innerHTML = goodCallOut;
}
