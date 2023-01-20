//import axios from "axios";
import React from "react";
import SearchForm from "./SearchForm";
import MainCityIcon from "./MainCityIcon";
import MainCityData from "./MainCityData";
import CurrentConditions from "./CurrentConditions";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Weather App</h1>
      <SearchForm />
      <div className="date">Thursday 19 Jan, 2023, 13:31</div>
      <div className="card m-3 weatherData">
        <div className="row">
          <div className="col-sm-4">
            <MainCityIcon />
          </div>
          <div className="col-sm-4">
            <MainCityData />
          </div>
          <div className="col-sm-4">
            <CurrentConditions />
          </div>
        </div>
      </div>
    </div>
  );
}
