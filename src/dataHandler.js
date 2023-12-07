import createCurrentWeather from "./currentWeather";
import createHourForecast from "./hourForecast";
import createDayForecast from "./dayForecast";

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
  const addZero = (i) => (i < 10 ? `0${i}` : i);
  const hour = addZero(lastUpdatedDate.getHours());
  const minutes = addZero(lastUpdatedDate.getMinutes());
  return `${hour}:${minutes}`;
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

function getHourObject(hour) {
  return createHourForecast(
    getCurrentTime(hour.time),
    hour.condition.icon,
    hour.condition.text,
    hour.temp_c,
    hour.temp_f
  );
}

function getDayObject(day, date, astro, hourForecast) {
  return createDayForecast(
    hourForecast,
    date,
    day.maxtemp_c,
    day.maxtemp_f,
    day.mintemp_c,
    day.mintemp_f,
    astro.sunrise,
    astro.sunset,
    day.daily_chance_of_rain,
    day.condition.text,
    day.condition.icon
  );
}

function getForecast(forecastday) {
  const dayForecast = [];
  console.log(forecastday);
  forecastday.forEach((day) => {
    const hourForecast = [];
    day.hour.forEach((hour) => {
      hourForecast.push(getHourObject(hour));
    });
    dayForecast.push(
      getDayObject(
        day.day,
        getCurrentDate(`${day.date}T00:00:00`),
        day.astro,
        hourForecast
      )
    );
  });
  return dayForecast;
}

export { handleCurrentWeather, getForecast };
