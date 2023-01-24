import React, { useState } from "react";
import axios from "axios";
import "./CurrentConditions.css";

export default function CurrentCondtions(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="CurrentConditions">
        <div className="card-body">
          <div className="card-text-main">
            <ul>
              <li>
                Max Temp:{" "}
                <span className="max-temp-forecast">
                  {" "}
                  {Math.round(forecast[0].temp.max)}°
                </span>
              </li>
              <li>
                Min Temp:
                <span className="min-temp-forecast">
                  {" "}
                  {Math.round(forecast[0].temp.min)}°
                </span>
              </li>
              <li>Wind: {props.data.wind} knts</li>
              <li>Humidity: {props.data.humidity}%</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let longitude = props.coord.lon;
    let latitude = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=e947cb2640f1db92e6a19005bc43b435&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
