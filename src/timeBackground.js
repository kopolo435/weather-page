function setDayIcons() {
  const icons = document.getElementsByClassName("asideIcon");
  Array.from(icons).forEach((icon) => {
    const path = icon.querySelector("path");
    path.setAttribute("stroke", "#000000");
  });
}

function setNightIcons() {
  const icons = document.getElementsByClassName("asideIcon");
  Array.from(icons).forEach((icon) => {
    const path = icon.querySelector("path");
    path.setAttribute("stroke", "#ffffff");
  });
}

function setDayBackground() {
  const { body } = document;
  body.classList.remove("night");
  body.classList.add("sunny");
  setDayIcons();
}

function setNightBackground() {
  const { body } = document;
  body.classList.remove("sunny");
  body.classList.add("night");
  setNightIcons();
}

function setTimeBackground(isDay) {
  if (isDay === 1) {
    setDayBackground();
  } else {
    setNightBackground();
  }
}

export default setTimeBackground;
