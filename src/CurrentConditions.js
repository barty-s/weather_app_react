import React from "react";
import "./CurrentConditions.css";

export default function CurrentCondtions(props) {
  return (
    <div className="CurrentConditions">
      <div className="card-body">
        <div className="card-text-main">
          <ul>
            <li>
              Max Temp: <span className="max-temp"> 15°</span>
            </li>
            <li>Min Temp: 4°</li>
            <li>Wind: {props.data.wind} knts</li>
            <li>Humidity: {props.data.humidity}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
