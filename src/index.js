import getWeatherData from "./fetchWeather";
import * as dataHandler from "./dataHandler";
import updateLocation from "./updateLocation";
import setTimeBackground from "./timeBackground";
import createForecastContainers from "./forecastContainer";
import displayHourForecast from "./displayHourForecast";
import style from "./style.css";

const searchForm = document.getElementById("searchForm");
const searchBar = document.getElementById("search");
const selectUnitSystem = document.getElementById("unidad");
const sidebar = document.getElementById("hourForecast");
const closeBtn = document.getElementById("return");
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

function showHourForecast(event) {
  const { id } = event.target.closest("[data-id]").dataset;
  displayHourForecast(forecastWeather[id]);
}

function addDayCardEvent() {
  const cards = document.getElementsByClassName("dayCard");
  Array.from(cards).forEach((day) => {
    day.addEventListener("click", showHourForecast);
  });
}

function updateDisplay(weather) {
  console.log(weather);
  updateLocation(weather.currentWeather, weather.forecastWeather, unitSystem);
  createForecastContainers(forecastWeather, unitSystem);
  setTimeBackground(weather.currentWeather.isDay);
  addDayCardEvent();
}

function changeSideBarVisibility() {
  sidebar.classList.add("visible");
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchForecast(searchBar.value).then(updateDisplay);
});

selectUnitSystem.addEventListener("change", () => {
  unitSystem = unitSystem === "imperial" ? "metrico" : "imperial";
  updateDisplay({ currentWeather, forecastWeather });
  changeSideBarVisibility();
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("visible");
});

searchForecast("Panama,Panamá").then(updateDisplay);
