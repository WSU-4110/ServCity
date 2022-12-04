import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Listcontainer } from "./Liststyles";
import Slider from "react-slick";
import Maps from "../Map/maps";
import "./modal.css";

const List = ({ result }) => {
  const [modal, setOpenModal] = useState(false);
  const [location, SetLocation] = useState({});
  const toggleModal = () => {
    setOpenModal(!modal);
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "350px",
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      <Listcontainer>
        <Slider {...settings}>
          {result?.map((places, i) => (
            <Grid key={i} sx={{ flexGrow: 1 }}>
              <PlaceDetails {...{ places, setOpenModal, SetLocation }} />
            </Grid>
          ))}
        </Slider>
      </Listcontainer>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <Maps placeLocation={location} />
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default List;
