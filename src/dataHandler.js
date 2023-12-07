import createCurrentWeather from "./currentWeather";

function getDayName(dayNumber) {
  const days = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
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

function getCurrentDate(lastUpdated) {
  const currentDate = new Date(lastUpdated);
  const date = `${getDayName(
    currentDate.getDay()
  )}, ${currentDate.getDate()} de ${getMonthName(
    currentDate.getMonth()
  )} de ${currentDate.getFullYear()}`;
  return date;
}

function getCurrentTime(lastUpdated) {
  const lastUpdatedDate = new Date(lastUpdated);
  return `${lastUpdatedDate.getHours()}:${lastUpdatedDate.getMinutes()}`;
}

function handleCurrentWeather(data) {
  return createCurrentWeather(
    data.location.name,
    data.location.country,
    getCurrentTime(data.location.localtime),
    getCurrentDate(data.location.localtime),
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

function getForecast(forecastday, localtime) {
  const currentDate = new Date(localtime);
  const day1 = forecastday[0].hour.slice(currentDate.getHours());
  const day2Limit = 24 - day1.length;
  const day2 = forecastday[1].hour.slice(0, day2Limit);
  return day1.concat(day2);
}

export { handleCurrentWeather, getForecast };
