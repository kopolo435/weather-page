import getWeatherData from "./fetchWeather";
import * as weather from "./dataHandler";

function searchForecast(location) {
  getWeatherData(location).then((data) => {
    console.log(data);

    const currentWeather = weather.handleCurrentWeather(data);
    const forecastWeather = weather.getForecast(
      data.forecast.forecastday,
      data.location.localtime
    );
    console.log(currentWeather);
    console.log(forecastWeather);
  });
}

searchForecast("London");
