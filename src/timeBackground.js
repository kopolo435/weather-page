function setDayBackground() {
  const { body } = document;
  body.classList.remove("night");
  body.classList.add("sunny");
}

function setNightBackground() {
  const { body } = document;
  body.classList.remove("sunny");
  body.classList.add("night");
}

function setTimeBackground(isDay) {
  if (isDay === 1) {
    setDayBackground();
  } else {
    setNightBackground();
  }
}

export default setTimeBackground;
