import React from "react";
import "./MainCityData.css";

export default function MainCityData(props) {
  return (
    <div className="MainCityData">
      <div className="card-body">
        <h2>{props.data.city}</h2>
        <div className="card-text">
          <div className="card-text-main">
            <span className="current-temp">{props.data.temperature}</span>{" "}
            <span className="unit">
              °C | <a href="/">°F</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
