import "./App.css";

import Footer from "./Footer";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <div className="container">
        <Weather defaultCity="Vigo" />
      </div>
      <Footer />
    </div>
  );
}
