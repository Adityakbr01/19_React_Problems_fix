import React, { useEffect, useState } from "react";

function CurrentWeather() {
  const [weather, setWeather] = useState(null);
  const apiKey = "87b735f4eceace1ef7509f6f69c3fb84";

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
        )
          .then((response) => response.json())
          .then((data) => {
            setWeather(data);
          });
      });
    }
  }, []);

  const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

  const kelvinToFahrenheit = (kelvin) => {
    return ((kelvin - 273.15) * 9) / 5 + 32;
  };

  return (
    <div>
      {weather ? (
        <div className="flex flex-col gap-6 items-center">
          <div className="flex flex-col gap-2 items-center">
            <h2 className="text-2xl">User Location: {weather.name}</h2>
            <div>
              <h2 className="text-xl">
                Max Temperature:{" "}
                {kelvinToCelsius(weather.main.temp_max).toFixed(2)}°C /{" "}
                {kelvinToFahrenheit(weather.main.temp_max).toFixed(2)}°F
              </h2>
              <h2 className="text-xl">
                Min Temperature:{" "}
                {kelvinToCelsius(weather.main.temp_min).toFixed(2)}°C /{" "}
                {kelvinToFahrenheit(weather.main.temp_min).toFixed(2)}°F
              </h2>
              <h2 className="text-xl">Condition: {weather.weather[0].description}</h2>
            </div>
          </div>
          <div className="flex gap-4 items-center">
     
          </div>
        </div>
      ) : (
        <h2 className="text-4xl">Loading...</h2>
      )}
    </div>
  );
}

export default CurrentWeather;
