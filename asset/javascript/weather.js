const API_KEY = "776011f256f1570e8ccd0d535a89b4ae";
const weatherDiv = document.getElementById("weather_div")

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude; 
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const city = document.getElementById("city");
        const weather = document.getElementById("weather");
        const weatherImg = document.getElementById("weatherIcon");
        const temperature = document.getElementById("temperature");

        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
        weatherImg.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        temperature.innerText = `
        Now : ${data.main.temp}℃ 
        Min : ${data.main.temp_min}℃ 
        Max : ${data.main.temp_max}℃`;
    });

}

function onGeoError(){
    weatherDiv.innerHTML = "<img src=\"./img/unknown_location.png\" style=\"width:40%; object-fit:cover\">"
    alert("위치 정보를 불러 올 수 없어 날씨가 표기되지 않습니다.")
}

const localStorageUserName = localStorage.getItem("username");

if (localStorageUserName !== null) {
    navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
}