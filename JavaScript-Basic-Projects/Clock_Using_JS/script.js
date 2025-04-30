// Timing Logic -------------------------

let hr = document.getElementById('hour');
let min = document.getElementById('minute');
let sec = document.getElementById('second');

function getTime() {
    const myDate = new Date();
    let hh = myDate.getHours() % 12;
    let mm = myDate.getMinutes();
    let ss = myDate.getSeconds();

    let hrMove = 30 * hh;
    let minMove = 6 * mm;
    let secMove = 6 * ss

    console.log(hh, mm, ss);
    console.log(hrMove, minMove, secMove);

    hr.style.transform = `rotate(${hrMove}deg)`;
    min.style.transform = `rotate(${minMove}deg)`;
    sec.style.transform = `rotate(${secMove}deg)`;
}

setInterval(getTime, 1000);

// Date and Day display ----------------------

let day = document.getElementById('daybox');
let date = document.getElementById('datebox')

const myDate = new Date();
const dayArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

day.innerHTML = dayArray[myDate.getDay()]
date.innerHTML = myDate.getDate();

// Pop-Up menu --------------------

const popup = document.querySelector('.pop-up');

setTimeout(() => {
    popup.style.display = "flex"
}, 6000);

function closeMe() {
    popup.style.display = "none";
}



