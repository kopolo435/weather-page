const createDayForecast = (
  hourForecast,
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
