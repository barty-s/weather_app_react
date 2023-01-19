import React from "react";
import "./MainCityData.css";

export default function MainCityData() {
  let cityData = {
    city: "Vigo",
    minTemp: 10,
    maxTemp: 20,
  };
  return (
    <div className="MainCityData">
      <div className="card-body">
        <h2>{cityData.city}</h2>
        <div className="card-text">
          <div className="card-text-main">
            <span className="current-temp">16</span>{" "}
            <span className="unit">
              °C | <a href="/">°F</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
