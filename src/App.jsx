import * as React from "react";

import { Box, Container } from "@mui/system";
import { TextField, Button } from "@mui/material";
import clear_icon from "./components/assets/clear.png";
import cloudy_icon from "./components/assets/cloud.png";
import rain_icon from "./components/assets/rain.png";
import snow_icon from "./components/assets/snow.png";
import wind_icon from "./components/assets/wind.png";
import humidity_icon from "./components/assets/humidity.png";
import drizzle_icon from "./components/assets/drizzle.png";

export default function App() {
  return (
    <>
      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            p: 2,
            boxShadow: 2,
            borderRadius: 2,
            bgcolor: "#2ab7ca",
          }}
        >
          <Box sx={{ m: 2, p: 2, display: "flex" }}>
            <TextField
              id="outlined-basic"
              label="city name"
              variant="outlined"
              sx={{ m: 1, bgcolor: "#F4F4F8" }}
            />

            <Button variant="contained" color="primary" sx={{ m: 1 }}>
              Search{" "}
            </Button>
          </Box>
          <Box sx={{ m: 2, p: 2 }}>
            <img src={drizzle_icon} />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",}}
          >
            <Box sx={{ m: 2, p: 2 }}>
              <img src={humidity_icon} />
              <p>Clear</p>
            </Box>
            <Box sx={{ m: 2, p: 2 }}>
              <img src={wind_icon} />
              <p>Cloudy</p>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
