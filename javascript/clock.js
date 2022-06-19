const times = document.getElementById("clock");
const dates = document.getElementById("date");

function setTime() {
    const date = new Date();
    const Year = String(date.getFullYear());
    const Month = String(date.getMonth()+1);
    const Day = String(date.getDate());
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    dates.textContent = `${Year}년 ${Month}월 ${Day}일`;
    times.textContent = `${hours}:${minutes}:${seconds}`;
}

setTime();
setInterval(setTime, 1000);
