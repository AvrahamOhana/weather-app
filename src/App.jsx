import * as React from "react";
import { useEffect, useState } from "react";

import { Box, Container } from "@mui/system";
import { TextField, Button } from "@mui/material";
import clear_icon from "./components/assets/clear.png";
import cloudy_icon from "./components/assets/cloud.png";
import rain_icon from "./components/assets/rain.png";
import snow_icon from "./components/assets/snow.png";
import wind_icon from "./components/assets/wind.png";
import humidity_icon from "./components/assets/humidity.png";
import drizzle_icon from "./components/assets/drizzle.png";
import Typography from '@mui/material/Typography';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [weather, setWeather] = useState(null);

  const search = async () => {
    console.log(isLoaded);
    const element = document.getElementById("outlined-basic");
    if (element.value === "") {
      return;
    }
    let url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      element.value +
      "&units=Metrics=&appid=aeb3090204006eb6490bf5e26e98757c";

    const response = await fetch(url);
    const data = await response.json();
    setWeather(data);
    setIsLoaded(true);
    console.log(data);
  };
  return (
    <>
      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            p: 1,
            boxShadow: 2,
            borderRadius: 2,
            bgcolor: "#2ab7ca",
          }}
        >
          <Box sx={{ m: 1, p: 1, display: "flex" }}>
            <TextField
              id="outlined-basic"
              label="city name"
              variant="outlined"
              sx={{ m: 1, bgcolor: "#F4F4F8" }}
            />

            <Button
              variant="contained"
              color="primary"
              sx={{ m: 1 }}
              onClick={() => {
                search();
              }}
            >
              Search
            </Button>
          </Box>
          <Box sx={{ m: 1, p: 1 }}>
          
            {weather && weather.weather[0].main === "Clear" && (
              <img src={clear_icon} />
            )}
            {weather && weather.weather[0].main === "Clouds" && (
              <img src={cloudy_icon} />
            )}
            {weather && weather.weather[0].main === "Rain" && (
              <img src={rain_icon} />
            )}
            {weather && weather.weather[0].main === "Snow" && (
              <img src={snow_icon} />
            )}
            {weather && weather.weather[0].main === "Drizzle" && (
              <img src={drizzle_icon} />
            )}
          </Box>
          <Typography variant="h2" component="h2" gutterBottom color="white">
            {weather && Math.round(weather.main.temp - 273.15)}°C
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom color="white">
          {weather && weather.weather[0].description}
        </Typography>
        <Typography variant="h2" gutterBottom color="white">
        {weather && weather.name}
      </Typography>
        
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            
            {!weather && <p>Select City...</p>}
            <Box sx={{ m: 2, p: 2, display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",}}>
            {weather && <img src={humidity_icon} />}
              {weather && <Typography variant="h6" gutterBottom color="white">{weather.main.humidity}%</Typography>}
              {weather && <Typography variant="h7" gutterBottom color="white">Humidity</Typography>}

            </Box>
            <Box sx={{ m: 2, p: 2, display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center", }}>
            {weather && <img src={wind_icon} />}
            {weather && <Typography variant="h6" gutterBottom color="white">{weather.wind.speed} km/h</Typography>}
            {weather && <Typography variant="h7" gutterBottom color="white">Wind Speed</Typography>}

            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
