import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const List = ({ recommended }) => {
  const recommend = "yes";
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      {recommended?.map((places, i) => (
        <Grid key={i}>
          <PlaceDetails places={places} recommend={recommend} />
        </Grid>
      ))}
    </Grid>
  );
};

export default List;
