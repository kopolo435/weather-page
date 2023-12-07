import getWeatherData from "./fetchWeather";
import * as dataHandler from "./dataHandler";

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
}

searchForecast("London").then(updateDisplay);
