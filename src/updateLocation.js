function changeTitle(city, country) {
  const title = document.getElementById("location");
  title.textContent = `${city}, ${country}`;
}

function changeDate(date) {
  const dateElement = document.getElementById("date");
  dateElement.textContent = date;
}

function changeTime(time) {
  const timeElement = document.getElementById("time");
  const ending = time < 12 ? "AM" : "PM";
  timeElement.textContent = `${time} ${ending}`;
}

function changeConditionIcon(icon) {
  const imgElement = document.getElementById("mainConditionIcon");
  imgElement.src = icon;
}

function changeConditionText(condition) {
  const conditionElement = document.getElementById("mainCondition");
  conditionElement.textContent = condition;
}

function changeTemperature(tempC, tempF, unitSystem) {
  const tempElement = document.getElementById("temp");
  if (unitSystem === "metric") {
    tempElement.textContent = `${tempC} °C`;
  } else {
    tempElement.textContent = `${tempF} °F`;
  }
}

function changeRealSensation(tempC, tempF, unitSystem) {
  const realSensation = document.getElementById("sensation");
  if (unitSystem === "metric") {
    realSensation.textContent = `${tempC} °C`;
  } else {
    realSensation.textContent = `${tempF} °F`;
  }
}

function changeNubosity(cloud) {
  const cloudElement = document.getElementById("nubosity");
  cloudElement.textContent = `${cloud}%`;
}

function changeHumidity(humidity) {
  const humidityElement = document.getElementById("humidity");
  humidityElement.textContent = `${humidity}%`;
}

function changeGustVelocity(gustKph, gustMph, unitSystem) {
  const gustElement = document.getElementById("windVel");
  if (unitSystem === "metric") {
    gustElement.textContent = `${gustKph} Kph`;
  } else {
    gustElement.textContent = `${gustMph} Mph`;
  }
}

function changeWindDirection(windDir) {
  const windDirElement = document.getElementById("windDir");
  windDirElement.textContent = `${windDir}`;
}

function changeSunrise(sunriseTime) {
  const sunriseElement = document.getElementById("sunrise");
  sunriseElement.textContent = `${sunriseTime}`;
}

function changeSunset(sunsetTime) {
  const sunsetElement = document.getElementById("sunset");
  sunsetElement.textContent = sunsetTime;
}

function changeMaxTemp(maxTempC, maxTempF, unitSystem) {
  const maxTempElement = document.getElementById("maxTemp");
  if (unitSystem === "metric") {
    maxTempElement.textContent = `${maxTempC} °C`;
  } else {
    maxTempElement.textContent = `${maxTempF} °F`;
  }
}

function changeMinTemp(minTempC, maxTempF, unitSystem) {
  const minTempElement = document.getElementById("minTemp");
  if (unitSystem === "metric") {
    minTempElement.textContent = `${minTempC} °C`;
  } else {
    minTempElement.textContent = `${maxTempF} F`;
  }
}

function updateLocation(currentWeather, forecast, unitSystem) {
  changeTitle(currentWeather.city, currentWeather.country);
  changeDate(currentWeather.date);
  changeTime(currentWeather.time);
  changeConditionIcon(currentWeather.icon);
  changeConditionText(currentWeather.weatherCondition);
  changeTemperature(currentWeather.tempC, currentWeather.tempF, unitSystem);
  changeRealSensation(
    currentWeather.feelsLikeC,
    currentWeather.feelsLikeF,
    unitSystem
  );
  changeNubosity(currentWeather.cloud);
  changeHumidity(currentWeather.humidity);
  changeGustVelocity(
    currentWeather.gustKph,
    currentWeather.gustMph,
    unitSystem
  );
  changeWindDirection(currentWeather.windDir);
  changeSunrise(forecast[0].sunrise);
  changeSunset(forecast[0].sunset);
  changeMaxTemp(forecast[0].maxTempC, forecast[0].maxTempF, unitSystem);
  changeMinTemp(forecast[0].minTempC, forecast[0].minTempF, unitSystem);
}

export default updateLocation;
