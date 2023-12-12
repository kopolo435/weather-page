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

function setDayCardNight() {
  const dayCards = document.getElementsByClassName("dayCard");
  Array.from(dayCards).forEach((dayCard) => {
    dayCard.classList.remove("dayCardSunny");
    dayCard.classList.add("dayCardNight");
  });
}

function setDayCardSunny() {
  const dayCards = document.getElementsByClassName("dayCard");
  Array.from(dayCards).forEach((dayCard) => {
    dayCard.classList.remove("dayCardNight");
    dayCard.classList.add("dayCardSunny");
  });
}

function setDaySideBar() {
  const hourForecast = document.getElementById("hourForecast");
  hourForecast.classList.remove("dayCardNight");
  hourForecast.classList.add("dayCardSunny");
}

function setNightSideBar() {
  const hourForecast = document.getElementById("hourForecast");
  hourForecast.classList.remove("dayCardSunny");
  hourForecast.classList.add("dayCardNight");
}

function setDayBackground() {
  const { body } = document;
  body.classList.remove("night");
  body.classList.add("sunny");
  setDayCardSunny();
  setDayIcons();
  setDaySideBar();
}

function setNightBackground() {
  const { body } = document;
  body.classList.remove("sunny");
  body.classList.add("night");
  setDayCardNight();
  setNightIcons();
  setNightSideBar();
}

function setTimeBackground(isDay) {
  if (isDay === 1) {
    setDayBackground();
  } else {
    setNightBackground();
  }
}

export default setTimeBackground;
