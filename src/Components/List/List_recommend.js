import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import { Listcontainer } from "./Liststyles";
const List = ({ recommended }) => {
  return (
    <Listcontainer>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="stretch"
      >
        {recommended?.map((places, i) => (
          <Grid key={i}>
            <PlaceDetails places={places} />
          </Grid>
        ))}
      </Grid>
    </Listcontainer>
  );
};

export default List;
