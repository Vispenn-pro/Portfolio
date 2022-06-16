import React, { useContext, useEffect, useState } from "react";
import Wave from "react-wavify";
import AppContext from "../context/AppContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./weatherApp.scss";
import { weatherIcons } from "../constantes/application.constantes";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import MenuIcon from "@mui/icons-material/Menu";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import ReactAnimatedWeather from "react-animated-weather";

const WeatherApp = () => {
  const { weathers } = useContext(AppContext);

  const [weather, setWeather] = useState(weathers[0].value);
  const [temperature, setTemperature] = useState(21);
  const [temperatureUnit, setTemperatureUnit] = useState("Celsius");
  const [location, setLocation] = useState("Niort");
  const currentDate = new Date();
  const currentDateMonth =
    new Intl.DateTimeFormat("en-US", { month: "long" })
      .format(currentDate)
      .substring(0, 3) + ".";

  useEffect(() => {
    if (temperatureUnit === "Celsius") {
      if (temperature >= 30) {
        setWeather(weathers[0].value);
      } else if (temperature < 30 && temperature >= 23) {
        setWeather(weathers[1].value);
      } else if (temperature < 23 && temperature >= 16) {
        setWeather(weathers[2].value);
      } else if (temperature < 16 && temperature >= 10) {
        setWeather(weathers[3].value);
      } else {
        setWeather(weathers[4].value);
      }
    } else {
      if (temperature >= 86) {
        setWeather(weathers[0].value);
      } else if (temperature < 86 && temperature >= 73) {
        setWeather(weathers[1].value);
      } else if (temperature < 73 && temperature >= 61) {
        setWeather(weathers[2].value);
      } else if (temperature < 61 && temperature >= 50) {
        setWeather(weathers[3].value);
      } else {
        setWeather(weathers[4].value);
      }
    }
  }, [temperature]);

  const handleTemperatureUnitChange = () => {
    if (temperatureUnit === "Celsius") {
      setTemperatureUnit("Farenheit");
      setTemperature(Math.round((temperature * 9) / 5 + 32));
    } else {
      setTemperatureUnit("Celsius");
      setTemperature(Math.round(((temperature - 32) * 5) / 9));
    }
  };

  return (
    <div>
      <div className="d-flex weatherAppHeader">
        <SpeedDial
          ariaLabel="Settings"
          sx={{ position: "absolute", top: 16, left: 16 }}
          icon={<MenuIcon />}
          direction="down"
        >
          <SpeedDialAction
            key="Celsius to Farenheit"
            icon={<DeviceThermostatIcon />}
            tooltipTitle="Switch celsius to farenheit"
            onClick={handleTemperatureUnitChange}
          />
          <SpeedDialAction
            key="Change location"
            icon={<EditLocationAltIcon />}
            tooltipTitle="Change location"
            onClick={() => setLocation("Angers")}
          />
        </SpeedDial>
      </div>
      <div className="weatherAppContainer">
        <Wave
          className="waves"
          fill={weather}
          paused={false}
          options={{
            height: 1,
            amplitude: 75,
            speed: 0.2,
            points: 2,
          }}
        />
        <aside className="weatherAppInfos">
          <h3>Wind speed: </h3>
          <h3>Humidity: </h3>
          <h1>
            {temperatureUnit === "Celsius"
              ? `${temperature}°C`
              : `${temperature}°F`}
          </h1>
          <div className="locationContainer">
            <h4>{currentDate.toLocaleDateString()} | </h4>
            <LocationOnIcon />
            <h4>{location}</h4>
          </div>
        </aside>
        <nav className="weatherAppDaySelector">
          <div className="daysContainer">
            <div className="dayIcons" onClick={() => setTemperature(40)}>
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color={weatherIcons.color}
                size={weatherIcons.size}
                animate={weatherIcons.animate}
              />
            </div>
            <p>
              {currentDate.getDate() + 1} {currentDateMonth}
            </p>
          </div>
          <div className="daysContainer">
            <div className="dayIcons" onClick={() => setTemperature(23)}>
              <ReactAnimatedWeather
                icon="PARTLY_CLOUDY_DAY"
                color={weatherIcons.color}
                size={weatherIcons.size}
                animate={weatherIcons.animate}
              />
            </div>
            <p>
              {currentDate.getDate() + 2} {currentDateMonth}
            </p>
          </div>
          <div className="daysContainer">
            <div className="dayIcons" onClick={() => setTemperature(16)}>
              <ReactAnimatedWeather
                icon="CLOUDY"
                color={weatherIcons.color}
                size={weatherIcons.size}
                animate={weatherIcons.animate}
              />
            </div>
            <p>
              {currentDate.getDate() + 3} {currentDateMonth}
            </p>
          </div>
          <div className="daysContainer">
            <div className="dayIcons" onClick={() => setTemperature(0)}>
              <ReactAnimatedWeather
                icon="SNOW"
                color={weatherIcons.color}
                size={weatherIcons.size}
                animate={weatherIcons.animate}
              />
            </div>
            <p>
              {currentDate.getDate() + 4} {currentDateMonth}
            </p>
          </div>
          <div className="daysContainer">
            <div className="dayIcons" onClick={() => setTemperature(10)}>
              <ReactAnimatedWeather
                icon="RAIN"
                color={weatherIcons.color}
                size={weatherIcons.size}
                animate={weatherIcons.animate}
              />
            </div>
            <p>
              {currentDate.getDate() + 5} {currentDateMonth}
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default WeatherApp;
