// Selectam elementele HTML
const ceas = document.getElementById("clock-container");
const containerOra = document.getElementById("container-ora");
const containerMin = document.getElementById("container-min");
const containerSec = document.getElementById("container-sec");
const containerDate = document.getElementById("container-date");

const alarmOra = document.getElementById("alarm-ora");
const alarmMin = document.getElementById("alarm-min");
const alarmSec = document.getElementById("alarm-sec");

const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

let alarmTime = "";

const alarmSound = new Audio("alarm.mp3");
alarmSound.loop = true;

// Functie care adauga un "0" in fata unui numar < 10
function addZero(nr) {
    if (nr < 10) {
        return "0" + nr;
    }

    return nr;
}

// Functie care afiseaza ora dupa fiecare secunda
function updateTime() {
    const date = new Date();

    const ora = addZero(date.getHours());
    const min = addZero(date.getMinutes());
    const sec = addZero(date.getSeconds());

    containerDate.textContent = date.getFullYear() + " - " + (date.getMonth() + 1) + " - " + week[date.getDay()];

    containerOra.textContent = ora;
    containerMin.textContent = min;
    containerSec.textContent = sec;

    const currentTime = "" + ora + min + sec;

    if (alarmTime == currentTime) {
        alarmSound.play();
        ceas.classList.add("alarm");
    }
}

// Functioe care adauga elementele pentru ora, min, sec ale alarmei
function createAlarmMenu() {
    // 24 elemente pt ora - de la 00 la 23
    for (let i = 0; i < 24; i++) {
        alarmOra.options[alarmOra.options.length] = new Option(addZero(i), addZero(i));
    }

    // 60 elemente - min si sec
    for (let i = 0; i < 60; i++) {
        alarmMin.options[alarmMin.options.length] = new Option(addZero(i), addZero(i));
        alarmSec.options[alarmSec.options.length] = new Option(addZero(i), addZero(i));
    }
}

// Functie care seteaza alarma
function setAlarm() {
    let selectedOra = alarmOra.options[alarmOra.selectedIndex].value;
    let selectedMin = alarmMin.options[alarmMin.selectedIndex].value;
    let selectedSec = alarmSec.options[alarmSec.selectedIndex].value;

    // Salvam ora alarmei in alarmTime
    alarmTime = alarmTime + selectedOra + selectedMin + selectedSec;

    // Dezactivam elementele ora, min, sec
    alarmMin.disabled = true;
    alarmOra.disabled = true;
    alarmSec.disabled = true;
}

// Functie care anuleaza alarma
function cancelAlarm() {
    alarmTime = "";

    // Reactivam elementele
    alarmMin.disabled = false;
    alarmOra.disabled = false;
    alarmSec.disabled = false;

    // Punem sunetul pe pauza
    alarmSound.pause();

    // Scoatem clasa "alarm" pentru a opri animatia
    ceas.classList.remove("alarm");
}


setInterval(updateTime, 1000);
updateTime();
createAlarmMenu();