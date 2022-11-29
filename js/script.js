// Timer fields
const hourElemment = document.querySelector('.hour');
const minuteElemment = document.querySelector('.minute');
const secondElemment = document.querySelector('.second');
const millisecondElemment = document.querySelector('.millisecond');
let results = document.querySelector('.results')

// Buttons
const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const updateButton = document.querySelector('.update');
const circleButton = document.querySelector('.circle');

// Listeners
startButton.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})

pauseButton.addEventListener('click', () => {
    clearInterval(interval)
})

updateButton.addEventListener('click', () => {
    clearInterval(interval)
    hour = 00;
    minute = 00;
    second = 00;
    millisecond = 00;
    hourElemment.textContent = "00";
    minuteElemment.textContent = "00";
    secondElemment.textContent = "00";
    millisecondElemment.textContent = "00";
    results.innerHTML = '';
    
})

circleButton.addEventListener('click', () => {
    const result = document.querySelector('.results');
    const block = document.createElement('div');
    block.classList.add('results__info')
    block.innerText = `${hour}:${minute}:${second}:${millisecond}`
    result.append(block)
})

// Variables
let hour = 00,
    minute = 00,
    second = 00,
    millisecond = 00,
    interval;

function startTimer() {
    millisecond++;

    // Milliseconds
    if(millisecond < 9) {
        millisecondElemment.innerText = "0" + millisecond;
    }
    if(millisecond > 9) {
        millisecondElemment.innerText = millisecond;

    }
    if(millisecond > 99) {
        second++;
        secondElemment.innerText = "0" + second;
        millisecond = 0;
        millisecondElemment.innerText = "0" + millisecond;
    }

    // Seconds
    if(second < 9) {
        secondElemment.innerText = "0" + second;
    }
    if(second > 9) {
        secondElemment.innerText = second;
    }
    if(second > 59) {
        minute++;
        secondElemment.innerText = "0" + minute;
        second = 0;
        secondElemment.innerText = "0" + second;
    }

    // Minutes
    if(minute < 9) {
        minuteElemment.innerText = "0" + minute;
    }
    if(minute > 9) {
        minuteElemment.innerText = minute;
    }
    if(minute > 59) {
        hour++;
        minuteElemment.innerText = "0" + hour;
        minute = 0;
        minuteElemment.innerText = "0" + minute;
    }

    // Hours
    if(hour < 9) {
        hourElemment.innerText = "0" + hour;
    }
    if(hour > 9) {
        hourElemment.innerText = hour;
    }
}