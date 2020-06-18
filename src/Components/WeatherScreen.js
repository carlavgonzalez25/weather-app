import React from "react";
import WeatherCard from "./WeatherCard";
import Grid from "@material-ui/core/Grid";
import { nublado, parcialmenteNublado, lluvioso, tormenta } from "../img";

const WeatherScreen = () => {
  console.dir(nublado);
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <WeatherCard img={nublado} min="8" max="16" day="Monday" />
      <WeatherCard img={parcialmenteNublado} min="5" max="15" day="Tuesday" />
      <WeatherCard img={lluvioso} min="10" max="25" day="Wednesday" />
      <WeatherCard img={lluvioso} min="11" max="14" day="Thursday" />
      <WeatherCard img={tormenta} min="20" max="32" day="Friday" />
    </Grid>
  );
};

export default WeatherScreen;
