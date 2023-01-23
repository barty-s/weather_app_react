import React from "react";
import MainCityIcon from "./MainCityIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="Forecast-day">
      <div>{day()}</div>
      <MainCityIcon icon={props.data.weather[0].icon} size={40} />
      <div className="Forecast-temps">
        <span className="max-temp">{Math.round(props.data.temp.max)}°</span>
        <span className="min-temp">{Math.round(props.data.temp.min)}°</span>
      </div>
    </div>
  );
}
