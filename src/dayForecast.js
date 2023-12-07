const createDayForecast = (
  hourForecast,
  date,
  maxTempC,
  maxTempF,
  minTempC,
  minTempF,
  sunrise,
  sunset,
  rainProbability,
  dayCondition,
  iconCondition
) => ({
  hourForecast,
  date,
  maxTempC,
  maxTempF,
  minTempC,
  minTempF,
  sunrise,
  sunset,
  rainProbability,
  dayCondition,
  iconCondition,
});

export default createDayForecast;
