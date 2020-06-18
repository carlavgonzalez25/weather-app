import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "200px",
    width: "150px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "grey",
    margin: "10px 10px",

    "& img": {
      flexGrow: 2,
    },
  },
  temperatureContainer: {
    display: "flex",
    justifyContent: "space-around",
  },
}));

const WeatherCard = ({ day, min, max, img }) => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.root}>
      <div> {day} </div>
      <img src={img} alt={img.name} />
      <Grid container className={classes.temperatureContainer}>
        <Grid item>{min}º</Grid>
        <Grid item>{max}º</Grid>
      </Grid>
    </Paper>
  );
};

export default WeatherCard;
