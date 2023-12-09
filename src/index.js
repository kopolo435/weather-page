import getWeatherData from "./fetchWeather";
import * as dataHandler from "./dataHandler";
import updateLocation from "./updateLocation";
import style from "./style.css";

const searchBtn = document.getElementById("searchBtn");
const searchBar = document.getElementById("search");
const unitSystem = "imperial";

async function searchForecast(location) {
  const data = await getWeatherData(location);
  const currentWeather = dataHandler.handleCurrentWeather(data);
  const forecastWeather = dataHandler.getForecast(
    data.forecast.forecastday,
    data.location.localtime
  );

  return { currentWeather, forecastWeather };
}

function updateDisplay(weather) {
  console.log(weather);
  updateLocation(weather.currentWeather, weather.forecastWeather, unitSystem);
}

searchBtn.addEventListener("click", () => {
  searchForecast(searchBar.value).then(updateDisplay);
});

searchForecast("Panama,Panamá").then(updateDisplay);
