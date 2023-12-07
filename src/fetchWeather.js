async function getWeatherData(location) {
  const key = "1135fa4c264d495a985173013232611";
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json ?key=${key}&q=${location}&days=3&aqi=yes`,
    { mode: "cors" }
  );

  const data = await response.json();
  return data;
}

export default getWeatherData;
