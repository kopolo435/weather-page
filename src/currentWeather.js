const createCurrentWeather = (
  time,
  date,
  tempC,
  tempF,
  feelsLikeC,
  feelsLikeF,
  gustKph,
  gustMph,
  windDir,
  humidity,
  cloud,
  isDay,
  weatherCondition,
  icon,
  co2
) => ({
  time,
  date,
  tempC,
  tempF,
  feelsLikeC,
  feelsLikeF,
  gustKph,
  gustMph,
  windDir,
  humidity,
  cloud,
  isDay,
  weatherCondition,
  icon,
  co2,
});

export default createCurrentWeather;
