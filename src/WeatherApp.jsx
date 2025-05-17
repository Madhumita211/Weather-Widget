import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    // city: "Delhi",
    // country: "IN",
    // temp: 30,
    // tempMin: 28,
    // tempMax: 32,
    // humidity: 60,
    // feelsLike: 31,
    // weather: "Clear",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  }

  return (
    <div className="WeatherApp" style={{ textAlign: "center" }}>
      <h1>Weather App</h1>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo} />
    </div>
  );
}
