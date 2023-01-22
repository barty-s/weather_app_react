import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    console.log(response);
  }

  if (loaded) {
    return <WeatherForecastDay data={forecast[1]} />;
  } else {
    let longitude = props.coord.lon;
    let latitude = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=e947cb2640f1db92e6a19005bc43b435&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
