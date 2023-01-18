import React from "react";
import "./CurrentConditions.css";

export default function CurrentCondtions() {
  let conditions = {
    currentTemp: 16,
    currentWind: 10,
    currentHumidity: 62,
  };
  return (
    <div className="MainCityData">
      <div className="card-body">
        <div className="card-text-main">
          Currently:{" "}
          <span className="main-temp"> {conditions.currentTemp}°</span>
        </div>
        <div>
          Wind: {conditions.currentWind} knts <br /> Humidity:{" "}
          {conditions.currentHumidity}%
        </div>
      </div>
    </div>
  );
}
