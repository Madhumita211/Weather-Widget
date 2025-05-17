import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import "./InfoBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faCloudBolt,
  faSun,
  faWind,
  faCloudRain,
  faSnowflake,
  faSunPlantWilt,
  faUmbrella,
} from "@fortawesome/free-solid-svg-icons";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AirIcon from "@mui/icons-material/Air";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import CloudySnowingIcon from "@mui/icons-material/CloudySnowing";

export default function InfoBox({ info }) {
  let getWeatherIcon = (weather, temp) => {
    switch (weather) {
      case "Cloudy":
      case "Overcast":
      case "Partly Cloudy":
        return faCloud;
      case "Thunderstorm":
      case "Thunder":
      case "Heavy Rain":
        return faCloudBolt;
      case "Clear":
      case "Sunny":
      case "Clear Sky":
        if (temp > 30) return faSunPlantWilt;
        return faSun;
      case "Rain":
      case "Drizzle":
      case "Light Rain":
        return faUmbrella;
      case "Snow":
      case "Cloudy Snowing":
      case "Snowy":
        return faSnowflake;
      case "Windy":
      case "Breezy":
      case "Windy with Rain":
        return faWind;
      case "Cloud Rain":
      case "Cloudy with Rain":
        return faCloudRain;
      default:
        if (temp > 30) return faSunPlantWilt;
        if (temp < 10) return faWind;
        return null;
    }
  };

  if (!info || !info.city || !info.country) {
    return <div className="InfoBox">Loading weather information...</div>;
  }

  let icon = getWeatherIcon(info.weather, info.temp);
  let IMG_URL = `https://openweathermap.org/img/wn/${info.icon}@2x.png`;

  return (
    <div className="InfoBox">
      <h2>Weather Information</h2>
      <br />
      <div className="card-container">
        <Card sx={{ maxWidth: 345 }}>
          <Box
            sx={{
              height: 140,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f5f5f5",
            }}
          >
            {icon ? (
              <FontAwesomeIcon icon={icon} size="4x" color="#FFA500" />
            ) : (
              <CardMedia
                component="img"
                sx={{ height: 140 }}
                image={IMG_URL}
                alt="Weather Icon"
              />
            )}
          </Box>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}, {info.country},{" "}
              {info.humidity > 70 || info.temp < 10 ? (
                <AirIcon />
              ) : info.weather === "Cloudy Snowing" ||
                info.weather === "Snowy" ||
                info.weather === "Cloudy with Snow" ? (
                <CloudySnowingIcon />
              ) : info.weather === "Snow" ? (
                <AcUnitIcon />
              ) : info.weather === "Rain" ||
                info.weather === "Drizzle" ||
                info.weather === "Light Rain" ? (
                <WaterDropIcon />
              ) : info.weather === "Thunderstorm" ||
                info.weather === "Thunder" ||
                info.weather === "Heavy Rain" ? (
                <ThunderstormIcon />
              ) : info.weather === "Cloudy" ||
                info.weather === "Overcast" ||
                info.weather === "Partly Cloudy" ? (
                <CloudIcon />
              ) : info.weather === "Clear" ||
                info.weather === "Sunny" ||
                info.weather === "Clear Sky" ||
                info.temp > 30 ? (
                <WbSunnyIcon />
              ) : info.weather === "Windy" ||
                info.weather === "Breezy" ||
                info.weather === "Windy with Rain" ? (
                <AirIcon />
              ) : null}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <div>Temperature: {info.temp}°C</div>
              <div>Feels Like: {info.feelsLike}°C</div>
              <div>Weather: {info.weather}</div>
              <div>Humidity: {info.humidity}%</div>
              <div>Min Temp: {info.tempMin}°C</div>
              <div>Max Temp: {info.tempMax}°C</div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
