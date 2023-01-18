import "./App.css";

import SearchForm from "./SearchForm";
import MainCityIcon from "./MainCityIcon";
import MainCityData from "./MainCityData";
import CurrentConditions from "./CurrentConditions";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <SearchForm />
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
        <Footer />
      </div>
    </div>
  );
}
