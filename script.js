const timer = document.querySelector('.timer');
const btnStart = timer.querySelector('.btn-start');
const btnReset = timer.querySelector('.btn-reset');

const hourEl = document.querySelector('.hour-text');
const minEl = document.querySelector('.min-text');
const secEl = document.querySelector('.sec-text');

let time = 0;
let Utimer = null;
let timetoggle = false

function updateTime() {
    time++;
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    let hours = Math.floor(time / 3600);
    
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    hours = hours < 10 ? "0" + hours : hours;

    hourEl.textContent = hours;
    minEl.textContent = minutes;
    secEl.textContent = seconds;
}

function startTimer() {
    Utimer = setInterval(updateTime, 1000);
    btnStart.lastChild.textContent = 'stop';
    timetoggle = true;
}

function stopTimer() {
    clearInterval(Utimer);
    btnStart.lastChild.textContent = 'start'
    timetoggle = false;
}
function resetTimer() {
    clearInterval(timer);
    time = 0;
    hourEl.textContent = '00';
    minEl.textContent = '00';
    secEl.textContent = '00';
}

btnStart.addEventListener('click', () => {
    if (timetoggle === false)
        startTimer();
    else
        stopTimer();
})
btnReset.addEventListener('click', resetTimer);