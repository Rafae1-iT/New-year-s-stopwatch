// Variables
let date = new Date('Jan 1 2026 00:00:00');
const dElemment = document.querySelector('.d');
const hElemment = document.querySelector('.h');
const mElemment = document.querySelector('.m');
const sElemment = document.querySelector('.s');
// FUNCTION
function counts() {
    let now = new Date();
    gap = date - now;

    let days = Math.floor(gap / 1000 / 60 / 60 / 24);
    let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(gap / 1000 / 60) % 60;
    let seconds = Math.floor(gap / 1000) % 60;
    console.log(days);
    console.log(hours);
    console.log(minutes);

    dElemment.innerText = days;
    hElemment.innerText = hours;
    mElemment.innerText = minutes;
    sElemment.innerText = seconds;
}
counts();

setInterval(counts, 1000);

document.querySelector('.new__year').addEventListener('click', function (e) {
    document.getElementsByClassName('container')[0].style.display = "none";
    document.getElementsByClassName('timeToNewYear')[0].style.display = "block";
    document.getElementsByClassName('new__year')[0].style.background = "#FFF";
    document.getElementsByClassName('stopwatch')[0].style.background = "gray";
  })

document.querySelector('.stopwatch').addEventListener('click', function (e) {
    document.getElementsByClassName('timeToNewYear')[0].style.display = "none";
    document.getElementsByClassName('container')[0].style.display = "block";
    document.getElementsByClassName('stopwatch')[0].style.background = "#FFF";
    document.getElementsByClassName('new__year')[0].style.background = "gray";
  })
