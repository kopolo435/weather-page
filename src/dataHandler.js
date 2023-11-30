import createCurrentWeather from "./currentWeather";

function getDayName(dayNumber) {
  const days = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ];

  return days[dayNumber];
}

function getMonthName(monthNumber) {
  const months = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "novimebre",
    "diciembre",
  ];

  return months[monthNumber];
}

function getCurrentDate() {
  const currentDate = new Date();
  const date = `${getDayName(
    currentDate.getDay()
  )}, ${currentDate.getDate()} de ${getMonthName(
    currentDate.getMonth()
  )} de ${currentDate.getFullYear()}`;
  return date;
}

function getCurrentTime() {
  const currentDate = new Date();
  return `${currentDate.getHours()}:${currentDate.getMinutes()}`;
}

function handleCurrentWeather(data) {
  return createCurrentWeather(
    data.location.name,
    data.location.country,
    getCurrentTime(),
    getCurrentDate(),
    data.current.temp_c,
    data.current.temp_f,
    data.current.feelslike_c,
    data.current.feelslike_f,
    data.current.gust_kph,
    data.current.gust_mph,
    data.current.wind_dir,
    data.current.humidity,
    data.current.cloud,
    data.current.is_day,
    data.current.condition.text,
    data.current.condition.icon,
    data.current.air_quality.co
  );
}

export default handleCurrentWeather;
