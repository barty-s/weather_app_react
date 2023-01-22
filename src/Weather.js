import React, { useState } from "react";
import axios from "axios";
import MainCityIcon from "./MainCityIcon";
import MainCityData from "./MainCityData";
import CurrentConditions from "./CurrentConditions";
import FormattedDate from "./FormattedDate";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coord: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: Math.round(response.data.wind.speed * 1.944),
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
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a9079504eef286fcb131d4d133261ee2&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
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
        <div className="date">
          <FormattedDate date={weatherData.date} />
        </div>
        <div className="card m-3 weatherData">
          <div className="row">
            <div className="col-md-4 mt-4">
              <MainCityIcon
                icon={weatherData.icon}
                alt={weatherData.description}
                size={110}
              />
            </div>
            <div className="col-md-4">
              <MainCityData data={weatherData} />
            </div>
            <div className="col-md-4">
              <CurrentConditions data={weatherData} />
            </div>
          </div>
          <WeatherForecast coord={weatherData.coord} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
