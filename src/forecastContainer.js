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

function createTemperatureText(text, tempC, tempF, unitSystem) {
  const textElement = document.createElement("p");
  if (unitSystem === "metrico") {
    textElement.textContent = `${text} ${tempC} °C`;
  } else {
    textElement.textContent = `${text} ${tempF} °F`;
  }
  return textElement;
}

function createForecastContainers(forecast, unitSystem) {
  const forecastContainer = document.getElementById("forecastContainer");
  forecastContainer.replaceChildren();
  forecast.forEach((day, index) => {
    const dayCard = document.createElement("button");
    dayCard.classList.add("dayCard");
    dayCard.setAttribute("data-id", index);

    dayCard.appendChild(createTextLine(day.date));
    dayCard.appendChild(createImg(day.iconCondition));
    dayCard.appendChild(createTextLine(day.dayCondition));
    dayCard.appendChild(
      createTemperatureText("Max.", day.maxTempC, day.maxTempF, unitSystem)
    );
    dayCard.appendChild(
      createTemperatureText("Min.", day.minTempC, day.minTempF, unitSystem)
    );
    forecastContainer.appendChild(dayCard);
  });
}

export default createForecastContainers;
