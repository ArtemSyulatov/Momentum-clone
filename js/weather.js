const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const weatherDescription = document.querySelector(".weather-description");
const city = document.querySelector(".city");

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=1ec3467aa1a557cc376ad77551ecc835&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  weatherIcon.className = "weather-icon owf";
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.trunc(data.main.temp)}°C`;
  weatherDescription.textContent = data.weather[0].description;
}
getWeather();

function setCity(e) {
  if (e.code === "Enter") {
    getWeather();
    city.blur();
  }
}
document.addEventListener("DOMContentLoaded", getWeather);
city.addEventListener("keypress", setCity);

function setLocalStorage2() {
  localStorage.setItem("city", city.value);
}

window.addEventListener("beforeunload", setLocalStorage2);

function getLocalStorage2() {
  if (localStorage.getItem("city")) {
    city.value = localStorage.getItem("city");
  }
  getWeather();
}
window.addEventListener("load", getLocalStorage2);
