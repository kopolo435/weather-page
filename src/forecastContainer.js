function createTextLine(text) {
  const textElement = document.createElement("p");
  textElement.classList.add("forecastText");
  textElement.textContent = text;
  return textElement;
}

function createImg(url) {
  const img = document.createElement("img");
  img.src = url;
  return img;
}

function createForecastContainers(forecast, unitSystem) {
  const forecastContainer = document.getElementById("forecastContainer");
  forecast.forEach((day) => {
    forecastContainer.appendChild(createTextLine(day.date));
    forecastContainer.appendChild(createImg(day.iconCondition));
    forecastContainer.appendChild(createTextLine(day.dayCondition));
  });
}

export default createForecastContainers;
