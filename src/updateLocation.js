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

function changeTemperature(tempC, tempF) {
  const tempElement = document.getElementById("temp");
  tempElement.textContent = `${tempC}°C`;
}

function changeRealSensation(tempC, tempF) {
  const realSensation = document.getElementById("sensation");
  realSensation.textContent = `${tempC}°C`;
}

function changeNubosity(cloud) {
  const cloudElement = document.getElementById("nubosity");
  cloudElement.textContent = `${cloud}%`;
}

function changeHumidity(humidity) {
  const humidityElement = document.getElementById("humidity");
  humidityElement.textContent = `${humidity}%`;
}

function changeGustVelocity(gustKph, gustMph) {
  const gustElement = document.getElementById("windVel");
  gustElement.textContent = `${gustKph} Kph`;
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

function changeMaxTemp(maxTemp) {
  const maxTempElement = document.getElementById("maxTemp");
  maxTempElement.textContent = `${maxTemp}°C`;
}

function updateLocation(currentWeather, forecast) {
  changeTitle(currentWeather.city, currentWeather.country);
  changeDate(currentWeather.date);
  changeTime(currentWeather.time);
  changeConditionIcon(currentWeather.icon);
  changeConditionText(currentWeather.weatherCondition);
  changeTemperature(currentWeather.tempC, currentWeather.tempF);
  changeRealSensation(currentWeather.feelsLikeC, currentWeather.feelsLikeF);
  changeNubosity(currentWeather.cloud);
  changeHumidity(currentWeather.humidity);
  changeGustVelocity(currentWeather.gustKph, currentWeather.gustMph);
  changeWindDirection(currentWeather.windDir);
  changeSunrise(forecast[0].sunrise);
  changeSunset(forecast[0].sunset);
  changeMaxTemp(forecast[0].maxTempC, forecast[0].maxTempF);
}

export default updateLocation;
