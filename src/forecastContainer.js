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
    const dayCard = document.createElement("div");
    dayCard.classList.add("dayCard");
    dayCard.appendChild(createTextLine(day.date));
    dayCard.appendChild(createImg(day.iconCondition));
    dayCard.appendChild(createTextLine(day.dayCondition));
    forecastContainer.appendChild(dayCard);
  });
}

export default createForecastContainers;
