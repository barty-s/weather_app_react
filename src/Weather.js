import React, { useState } from "react";
import axios from "axios";
import MainCityIcon from "./MainCityIcon";
import MainCityData from "./MainCityData";
import CurrentConditions from "./CurrentConditions";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "a9079504eef286fcb131d4d133261ee2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (setWeatherData.ready) {
    return (
      <div className="Weather">
        <h1>Weather App</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="search-bar"
            type="text"
            placeholder="Search for a city here..."
            autoFocus="on"
            autoComplete="off"
            onChange={handleCityChange}
          />

          <input className="btn btn-primary" type="submit" value="Search" />
        </form>
        <div className="date">Thursday 19 Jan, 2023, 13:31</div>
        <div className="card m-3 weatherData">
          <div className="row">
            <div className="col-sm-4">
              <MainCityIcon />
            </div>
            <div className="col-sm-4">
              <MainCityData data={weatherData} />
            </div>
            <div className="col-sm-4">
              <CurrentConditions data={weatherData} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
