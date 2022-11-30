import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Listcontainer } from "./Liststyles";
import Slider from "react-slick";

const List = ({ result }) => {
  const recommend = "No";
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <Listcontainer>
      <Slider {...settings}>
        {result?.map((places, i) => (
          <Grid key={i} sx={{ flexGrow: 1 }}>
            <PlaceDetails places={places} recommend={recommend} />
          </Grid>
        ))}
      </Slider>
    </Listcontainer>
  );
};

export default List;
