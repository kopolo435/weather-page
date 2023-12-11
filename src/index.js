import getWeatherData from "./fetchWeather";
import * as dataHandler from "./dataHandler";
import updateLocation from "./updateLocation";
import setTimeBackground from "./timeBackground";
import createForecastContainers from "./forecastContainer";
import style from "./style.css";

const searchForm = document.getElementById("searchForm");
const searchBar = document.getElementById("search");
const selectUnitSystem = document.getElementById("unidad");
let unitSystem = "metrico";
let currentWeather;
let forecastWeather;

async function searchForecast(location) {
  const data = await getWeatherData(location);
  currentWeather = dataHandler.handleCurrentWeather(data);
  forecastWeather = dataHandler.getForecast(
    data.forecast.forecastday,
    data.location.localtime
  );

  return { currentWeather, forecastWeather };
}

function updateDisplay(weather) {
  console.log(weather);
  updateLocation(weather.currentWeather, weather.forecastWeather, unitSystem);
  setTimeBackground(weather.currentWeather.isDay);
  createForecastContainers(forecastWeather, unitSystem);
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchForecast(searchBar.value).then(updateDisplay);
});

selectUnitSystem.addEventListener("change", () => {
  unitSystem = unitSystem === "imperial" ? "metrico" : "imperial";
  updateDisplay({ currentWeather, forecastWeather });
});

searchForecast("Panama,Panamá").then(updateDisplay);
