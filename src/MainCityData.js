import React, { useState } from "react";
import "./MainCityData.css";

export default function MainCityData(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return Math.round((props.data.temperature * 9) / 5 + 32);
  }

  if (unit === "celsius") {
    return (
      <div className="MainCityData">
        <div className="card-body">
          <h2>{props.data.city}</h2>
          <div className="card-text">
            <div className="card-text-main">
              <span className="current-temp">{props.data.temperature}</span>{" "}
              <span className="unit">
                <span className="active">°C</span> |{" "}
                <a href="/" onClick={showFahrenheit}>
                  °F
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="MainCityData">
        <div className="card-body">
          <h2>{props.data.city}</h2>
          <div className="card-text">
            <div className="card-text-main">
              <span className="current-temp">{fahrenheit()}</span>{" "}
              <span className="unit">
                <a href="/" onClick={showCelcius}>
                  °C
                </a>{" "}
                | <span className="active">°F</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
