import React from "react";
import "./WeatherForecast.css";
import MainCityIcon from "./MainCityIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Thu</div>
          <MainCityIcon icon="01d" size={40} />
          <div className="Forecast-temps">
            <span className="max-temp">20°</span>
            <span className="min-temp">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
