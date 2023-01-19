import React from "react";
import "./CurrentConditions.css";

export default function CurrentCondtions() {
  let conditions = {
    maxTemp: 16,
    minTemp: 4,
    currentWind: 10,
    currentHumidity: 62,
  };
  return (
    <div className="CurrentConditions">
      <div className="card-body">
        <div className="card-text-main">
          <ul>
            <li>
              Max Temp: <span className="max-temp"> {conditions.maxTemp}°</span>
            </li>
            <li>Min Temp: {conditions.minTemp}°</li>
            <li>Wind: {conditions.currentWind} knts</li>
            <li>Humidity: {conditions.currentHumidity}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
