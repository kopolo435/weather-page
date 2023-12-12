function createHourContainer(hourObj, unitSystem) {
  const hourContainer = document.createElement("div");
  hourContainer.classList.add("hourContainer");

  hourContainer.appendChild(createHourElement());
  hourContainer.appendChild(createConditioElement());
  hourContainer.appendChild(createTempElement());

  return hourContainer;
}

export default createHourContainer;
