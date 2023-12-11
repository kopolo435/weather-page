function createTextLine(text) {
  const textElement = document.createElement("p");
  textElement.classList.add("forecastText");
  textElement.textContent = text;
  return textElement;
}

function createForecastContainers(forecast, unitSystem) {
  const forecastContainer = document.getElementById("forecastContainer");
  forecast.forEach((day) => {
    forecastContainer.appendChild(createTextLine(day.date));
    forecastContainer.appendChild(createTextLine(day.date));
  });
}
