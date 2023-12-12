function changeSunrise(sunriseTime) {
  const sunriseElement = document.getElementById("forecastSunrise");
  sunriseElement.textContent = `${sunriseTime}`;
}
function changeSunset(sunsetTime) {
  const sunsetElement = document.getElementById("forecastSunset");
  sunsetElement.textContent = sunsetTime;
}

function changeMaxTemp(maxTempC, maxTempF, unitSystem) {
  const maxTempElement = document.getElementById("forecastMaxTemp");
  if (unitSystem === "metrico") {
    maxTempElement.textContent = `${maxTempC} °C`;
  } else {
    maxTempElement.textContent = `${maxTempF} °F`;
  }
}

function changeMinTemp(minTempC, minTempF, unitSystem) {
  const minTempElement = document.getElementById("forecastMinTemp");
  if (unitSystem === "metrico") {
    minTempElement.textContent = `${minTempC} °C`;
  } else {
    minTempElement.textContent = `${minTempF} °F`;
  }
}

function changeConditionText(text) {
  const textElement = document.getElementById("forecastCondition");
  textElement.textContent = text;
}

function changeConditionIcon(url) {
  const imgElement = document.getElementById("forecastConditionIcon");
  imgElement.src = url;
}

function displayHourForecast(forecastDay, unitSystem) {
  changeSunrise(forecastDay.sunrise);
  changeSunset(forecastDay.sunset);
  changeMaxTemp(forecastDay.maxTempC, forecastDay.maxTempF, unitSystem);
  changeMinTemp(forecastDay.minTempC, forecastDay.minTempF, unitSystem);
  changeConditionIcon(forecastDay.iconCondition);
  changeConditionText(forecastDay.dayCondition);
}

export default displayHourForecast;