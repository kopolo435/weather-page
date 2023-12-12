function createHourElement(time) {
  const hourElement = document.createElement("p");
  hourElement.classList.add("time");
  hourElement.textContent = time;

  return hourElement;
}

function createText(text) {
  const textElement = document.createElement("p");
  textElement.classList.add("condition");
  textElement.textContent = text;

  return textElement;
}

function createIcon(url) {
  const img = document.createElement("img");
  img.src = url;
  return img;
}

function createConditioElement(text, imgUrl) {
  const conditionElement = document.createElement("div");
  conditionElement.classList.add("conditionCon");

  conditionElement.appendChild(createIcon(imgUrl));
  conditionElement.appendChild(createText(text));

  return conditionElement;
}

function createTempElement(tempC, tempF, unitSystem) {
  const text = document.createElement("p");
  if (unitSystem === "metrico") {
    text.textContent = `${tempC} °C`;
  } else {
    text.textContent = `${tempF} °F`;
  }
  return text;
}

function createHourContainer(hourObj, unitSystem) {
  const hourContainer = document.createElement("div");
  hourContainer.classList.add("hourContainer");

  hourContainer.appendChild(createHourElement(hourObj.time));
  hourContainer.appendChild(
    createConditioElement(hourObj.condition, hourObj.icon)
  );
  hourContainer.appendChild(
    createTempElement(hourObj.tempC, hourObj.tempF, unitSystem)
  );

  return hourContainer;
}

export default createHourContainer;
